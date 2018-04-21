import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Page extends Component {
    static propTypes = {
        navigation: PropTypes.element,
        footer: PropTypes.element,
        content: PropTypes.element,
    };

    render() {
        return (
            <div>
                {this.props.navigation ? (
                        <div className="sub-c-navigation-placeholder"></div>
                    ) : null}
                {this.props.navigation}
                <div className="page-content">
                    {this.props.content}
                </div>
                {this.props.footer || null}
            </div>
        );
    }
}

export default Page;
