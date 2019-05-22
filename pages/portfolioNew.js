
import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/Basepage';
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm';

import { Row, Col } from 'reactstrap';

import withAuth from '../components/hoc/withAuth';


class PortfolioNew extends React.Component {
    render() {
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage title="Create New PortfolioNew " className="portfolio-create-page" >
                   
                    <Row>
                        <Col md="6">
                            <PortfolioCreateForm />
                        </Col>
                    </Row>   
                </BasePage>
            </BaseLayout>

        )
    }
}

export default withAuth('siteOwner') (PortfolioNew);