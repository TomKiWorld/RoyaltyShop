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
import { fetchCollectionsStart } from './redux/shop/shop.actions';

import './App.scss';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const CheckOutPage = lazy(() => import('./pages/CheckOutPage/CheckOutPage'));
const ComingSoonPage = lazy(() => import('./pages/ComingSoonPage/ComingSoonPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const AccountPage = lazy(() => import('./pages/AccountPage/AccountPage'));
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'));
const SearchPage = lazy(() => import('./pages/SearchPage/SearchPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));

const PUBLIC_URL = process.env.PUBLIC_URL;

class App extends React.Component {
  componentDidMount() {
    const { checkUserSession, fetchCollectionsStart } = this.props;
    checkUserSession();
    fetchCollectionsStart();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <ErrorBoundry>
          <SuspenseLoad>
            <Switch>
              <Route exact path={PUBLIC_URL} component={HomePage} />
              <Route path={`${PUBLIC_URL}/shop`} component={ShopPage} />
              <Route exact path={`${PUBLIC_URL}/signin`} 
                render={()=> this.props.currentUser ? 
                  <Redirect to={PUBLIC_URL} /> : 
                  <LoginPage />}/>
              <Route exact path={`${PUBLIC_URL}/checkout`} component={CheckOutPage} />
              <Route exact path={`${PUBLIC_URL}/account`} component={AccountPage} />
              <Route path={[`${PUBLIC_URL}/contact`]} component={ContactPage} />
              <Route path={[`${PUBLIC_URL}/search`]} component={SearchPage} />
              <Route path={[`${PUBLIC_URL}/coming-soon`]} component={ComingSoonPage} />
              <Route path={[`${PUBLIC_URL}/error`]} component={ErrorPage} />
              <Route component={NotFoundPage}/>
            </Switch>
          </SuspenseLoad>
        </ErrorBoundry>
        <Footer />
      </React.Fragment>    
    );
  }
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
