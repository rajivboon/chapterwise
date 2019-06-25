import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { getPortfolios } from '../actions';
import { Link } from '../routes'
import BasePage from '../components/Basepage';
import {
    Card, CardText, CardBody, CardHeader,
    CardTitle, Row, Col,
} from 'reactstrap';


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
    
    renderPortfolios(portfolios) {
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
                                    <div className="readMore"> </div>
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
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="portfolio-page" title="Portfolios">
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