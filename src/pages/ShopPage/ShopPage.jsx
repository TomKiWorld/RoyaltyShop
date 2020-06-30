import React from 'react';
import { Route } from 'react-router-dom';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';
import WithPreloader from '../../components/WithPreloader/WithPreloader';

import './ShopPage.scss';
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithPreloader = WithPreloader(CollectionsOverview);
const CollectionPageWithPreloader = WithPreloader(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading: false});
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <section className='shop-page container'>
        <Route 
          exact 
          path={`${match.path}`} 
          render={(props) => 
            <CollectionsOverviewWithPreloader 
              isLoading={loading} 
              {...props}/>} />
        <Route 
          exact 
          path={`${match.path}/:collectionId`} 
          render={(props) => 
            <CollectionPageWithPreloader 
              isLoading={loading} 
              {...props}/>} />
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)) 
})

export default connect(null, mapDispatchToProps)(ShopPage);
