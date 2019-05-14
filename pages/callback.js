import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/Basepage';

class Callback extends React.Component {
    render() {
        return (
            <BaseLayout>
                <BasePage className='about-page' >
                    <h1> This is Callback page</h1>
                </BasePage>

            </BaseLayout>

        )
    }
}

export default Callback;