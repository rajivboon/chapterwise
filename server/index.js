const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const routes = require('../routes');

// service
const authService = require('./services/auth');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);
const config = require('./config');

const Book = require('./models/book');
const bodyParser = require('body-parser');

const secretData = [
    {
        title: 'seredafd data 1',
        description: 'plans how to build '
    },
    {
        title: 'sercond data 2',
        description: ' tsfg sdggh build '
    }
]

mongoose.connect(config.DB_URI, { useNewUrlParser: true })
    .then(() => console.log('Database Connected'))
    .catch(err => console.error(err));

//  async () => (await mongoose.connect(config.DB_URI, { useNewUrlParser: true })) ();

app.prepare()
    .then(() => {
        const server = express();

        server.use(bodyParser.json());

        server.post('/api/v1/books', (req, res) => {
            const bookData = req.body;
            console.log(bookData);

            const book = new Book(bookData);

            book.save((err, createdBook) => {
                if (err) {
                    return res.status(422).send(err);
                }
                return res.json(createdBook);
            });
        });

        server.get('/api/v1/books', (req, res) => {
            Book.find({}, (err, allBooks) => {
                if (err) {
                    return res.status(422).send(err);
                }
                return res.json(allBooks);
            })
        });

        server.patch('/api/v1/books/:id', (req, res) => {
            const bookId = req.params.id;
            const bookData = req.body;
             
            Book.findById(bookId, (err, foundBook) => {
                if (err) {
                    return res.status(422).send(err);
                }
                foundBook.set(bookData);
                foundBook.save((err, savedBook) => {
                    if (err) {
                        return res.status(422).send(err);
                    }
                    return res.json(foundBook);
                });                
            })
        })

        server.delete('/api/v1/books/:id', (req, res) => {
            const bookId = req.params.id;

            Book.deleteOne({ _id: bookId }, (err, deletedBook) => {
                if (err) {
                    return res.status(422).send(err);
                }

                return res.json({ status: 'Delited' });
            })
        });




        server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
            console.log('-------------consoling User----------------');
            // console.log(req.user);
            return res.json(secretData);
        })
        
        server.get('/api/v1/onlysiteowner', authService.checkJWT, authService.checkRole('siteOwner'), (req, res) => {
            // console.log('-------------consoling User----------------');
            // console.log(req.user);
            return res.json(secretData);
        })


        server.get('*', (req, res) => {
            // console.log('-------------serving all requests--------');
            return handle(req, res)
        })


        server.use(function (err, req, res, next) {
            if (err.name === 'UnauthorizedError') {
                res.status(401).send({title: 'unauthorized', detail: 'unauthorized access!'});
            }
        });

        server.use(handle).listen(3000, err => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch(ex => {
        console.error(ex.stack)
        process.exit(1)
    })