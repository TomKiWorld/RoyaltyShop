import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';
import SuspenseLoad from './components/SuspenseLoad/SuspenseLoad';

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.scss';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const CheckOutPage = lazy(() => import('./pages/CheckOutPage/CheckOutPage'));
const ComingSoonPage = lazy(() => import('./pages/ComingSoonPage/ComingSoonPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

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
          <ErrorBoundry>
            <SuspenseLoad>
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
                <Route path={['/contact', '/profile']} component={ComingSoonPage} />
                <Route component={NotFoundPage}/>
              </Switch>
            </SuspenseLoad>
          </ErrorBoundry>
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
