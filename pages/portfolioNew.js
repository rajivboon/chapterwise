
import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/Basepage';
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm';

import { Row, Col } from 'reactstrap';

import { createPortfolio } from '../actions';

import withAuth from '../components/hoc/withAuth';


class PortfolioNew extends React.Component {

    constructor(props) {
        super();
        this.savePortfolio = this.savePortfolio.bind(this);
    }

    savePortfolio(portfolioData) {
        // alert(JSON.stringify(portfolioData, null, 2));
        createPortfolio(portfolioData)
            .then((portfolio) => {
                debugger;
            console.log(portfolio);
            })
            .catch((err) => { console.error(err) }) 
    }

    render() {
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage title="Create New PortfolioNew " className="portfolio-create-page" >
                   
                    <Row>
                        <Col md="6">
                            <PortfolioCreateForm onSubmit={this.savePortfolio} />
                        </Col>
                    </Row>   
                </BasePage>
            </BaseLayout>

        )
    }
}

export default withAuth('siteOwner') (PortfolioNew);