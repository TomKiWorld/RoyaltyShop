import React, { lazy, useEffect } from 'react';
import { Route } from 'react-router-dom';

import SuspenseLoad from '../../components/SuspenseLoad/SuspenseLoad';

import './ShopPage.scss';

const CollectionsOverviewContainer = lazy(() => import('../../components/CollectionsOverview/CollectionsOverviewContainer'));
const CollectionPageContainer = lazy(() => import('../CollectionPage/CollectionPageContainer'));

const ShopPage = ({ match }) => {
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
};

export default ShopPage;
