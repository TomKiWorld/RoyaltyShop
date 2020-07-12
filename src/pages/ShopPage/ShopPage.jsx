import React, { lazy, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import SuspenseLoad from '../../components/SuspenseLoad/SuspenseLoad';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import './ShopPage.scss';

const CollectionsOverviewContainer = lazy(() => import('../../components/CollectionsOverview/CollectionsOverviewContainer'));
const CollectionPageContainer = lazy(() => import('../CollectionPage/CollectionPageContainer'));

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='shop-page'>
      <SuspenseLoad>
        <Route 
          exact 
          path={`${match.path}`} 
          component={CollectionsOverviewContainer} />
        <Route 
          exact 
          path={`${match.path}/:collectionId`} 
          component={CollectionPageContainer} />
      </SuspenseLoad>
    </section>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
