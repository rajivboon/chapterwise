
import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/Basepage';
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm';

import withAuth from '../components/hoc/withAuth';


class PortfolioNew extends React.Component {
    render() {
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage title="Create New PortfolioNew " className="portfolio-create-page" >
                    <PortfolioCreateForm onClick={(someVariables) => {console.log(someVariables)} } />
                </BasePage>
            </BaseLayout>

        )
    }
}

export default withAuth('siteOwner') (PortfolioNew);