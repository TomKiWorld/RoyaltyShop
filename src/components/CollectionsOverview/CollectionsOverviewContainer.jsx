import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionPending } from '../../redux/shop/shop.selectors';
import { compose } from 'redux';

import WithPreloader from '../WithPreloader/WithPreloader';
import CollectionsOverview from './CollectionsOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionPending
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps), 
  WithPreloader
)(CollectionsOverview);

export default CollectionsOverviewContainer;
