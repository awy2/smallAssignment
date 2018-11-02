import React from 'react';
import { connect } from 'react-redux';
import { actions as utilsActions } from 'utils';
import PostDisplay from 'containers/PostDisplay';
import Header from 'containers/Header';
import './App.css';

class App extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(utilsActions.appStart());
    }

    render() {
        return (
            <div className="App">
                <Header />
                <PostDisplay />
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {};
};

export default connect(mapStateToProps)(App);
