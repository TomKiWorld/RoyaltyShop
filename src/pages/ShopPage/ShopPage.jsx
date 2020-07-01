import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverviewContainer';
import CollectionPageContainer from '../CollectionPage/CollectionPageContainer';

import './ShopPage.scss';
import { requestCollectionsStartAsync } from '../../redux/shop/shop.actions';


class ShopPage extends React.Component {

  componentDidMount() {
    this.props.requestCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <section className='shop-page container'>
        <Route 
          exact 
          path={`${match.path}`} 
          component={CollectionsOverviewContainer} />
        <Route 
          exact 
          path={`${match.path}/:collectionId`} 
          component={CollectionPageContainer} />
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  requestCollectionsStartAsync: () => dispatch(requestCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);
