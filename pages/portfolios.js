import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { Link } from '../routes'
import BasePage from '../components/Basepage';
import {
    Card, CardText, CardBody, CardHeader,
    CardTitle, Row, Col, Button
} from 'reactstrap';
import { getPortfolios, deletePortfolio } from '../actions';
import { Router } from '../routes';


class Portfolios extends React.Component {

    static async getInitialProps() {
       

        let portfolios = [];

        try {
            portfolios = await getPortfolios();
        } catch (err) {
            console.error(err);
        }
        return { portfolios };

    }


    displayDeleteWarning(portfolioId) {
        const isConfirm = confirm('Are you sure you want to delete this portfolio ?');

        if (isConfirm) {
            // delete portfolio here
            this.deletePortfolio(portfolioId);
        }
    }

    deletePortfolio(portfolioId) {
        deletePortfolio(portfolioId)
            .then(() => {
                // Decide what to do next
                Router.pushRoute('/portfolios');
            })
            .catch(err => console.error(err));
    }
    
    renderPortfolios(portfolios) {
        const { isAuthenticated, isSiteOwner } = this.props.auth;
        return portfolios.map((portfolio, index) => {
            return (
                <Col key={index} md="4">
                    <React.Fragment >
                        <span>
                            <Card className="portfolio-card">
                                <CardHeader className="portfolio-card-header">{portfolio.position} </CardHeader>
                                <CardBody>
                                    <p className="portfolio-card-city"> {portfolio.location} </p>
                                    <CardTitle className="portfolio-card-title">{portfolio.title} </CardTitle>
                                    <CardText className="portfolio-card-text"> {portfolio.description} </CardText>
                                    <div className="readMore">
                                        {isAuthenticated && isSiteOwner &&
                                            <React.Fragment>

                                                <Button onClick={() => Router.pushRoute(`/portfolios/${portfolio._id}/edit`)} color="warning"  > Edit</Button> {'  '}
                                                <Button onClick={()=> this.displayDeleteWarning(portfolio._id) } color="danger"> Delete </Button>
                                            </React.Fragment>
                                    }
                                    </div>
                                </CardBody>
                            </Card>
                        </span>
                    </React.Fragment>
                </Col>

            )
        })
    }

    render() {
        const { portfolios } = this.props;
        const { isAuthenticated, isSiteOwner } = this.props.auth;

        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="portfolio-page" title="Portfolios">
                    {isAuthenticated && isSiteOwner &&

                        <Button onClick={() => Router.pushRoute('/portfolioNew')}
                        color="success"
                        className="create-port-btn">Create portfolio
                    </Button>
                    }
                    
                    <Row>
                    {this.renderPortfolios(portfolios)}
                    {/* {posts.map((post) => {
                        return (
                            <li>{post.title} </li>
                            )
                        })} */}
            </Row>
            </BasePage>
            </BaseLayout>
        )
    }
}

export default Portfolios;