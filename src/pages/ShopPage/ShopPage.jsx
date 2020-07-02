import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverviewContainer';
import CollectionPageContainer from '../CollectionPage/CollectionPageContainer';

import './ShopPage.scss';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';


class ShopPage extends React.Component {

  componentDidMount() {
    this.props.fetchCollectionsStart();
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
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);
