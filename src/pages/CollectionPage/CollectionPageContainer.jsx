import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import { compose } from 'redux';

import WithPreloader from '../../components/WithPreloader/WithPreloader';
import CollectionPage from './CollectionPage';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps), 
  WithPreloader
)(CollectionPage);

export default CollectionPageContainer;
