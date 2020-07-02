import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import LoginPage from './pages/LoginPage/LoginPage';
import CheckOutPage from './pages/CheckOutPage/CheckOutPage';
import Footer from './components/Footer/Footer';

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.scss';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          {/* For GH pages */}
          <Route exact path='/RoyaltyShop' component={HomePage} /> 
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' 
            render={()=> this.props.currentUser ? 
              <Redirect to='/' /> : 
              <LoginPage />}/>
          <Route exact path='/checkout' component={CheckOutPage} />
        </Switch>
        <Footer />
      </React.Fragment>    
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
