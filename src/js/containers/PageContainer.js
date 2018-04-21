import {connect} from 'react-redux';
import Page from '../components/Page';

const mapStateToProps = (state, ownProps) => {
    return {
        navigation: ownProps.navigation,
        footer: ownProps.footer,
        content: ownProps.content,
    };
};

const PageContainer = connect(mapStateToProps)(Page);

export default PageContainer;
