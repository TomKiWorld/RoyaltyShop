import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import SuspenseLoad from '../../components/SuspenseLoad/SuspenseLoad';

import './ShopPage.scss';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const CollectionsOverviewContainer = lazy(() => import('../../components/CollectionsOverview/CollectionsOverviewContainer'));
const CollectionPageContainer = lazy(() => import('../CollectionPage/CollectionPageContainer'));

class ShopPage extends React.Component {

  componentDidMount() {
    this.props.fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;

    return (
      <section className='shop-page container'>
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
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
