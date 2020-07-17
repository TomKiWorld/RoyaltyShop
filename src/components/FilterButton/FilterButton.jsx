import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsFilter } from '../../redux/search/search.selectors';
import { setCollectionFilter } from '../../redux/search/search.actions';

const FilterButton = ({ title, collectionsFilter, setCollectionFilter }) => {
  const [active, setActive] = useState(false)

  return (
    <button 
      className={`search-filter-button${active ? ' active' : ''}`}
      onClick={(() => {
        setActive(!active);
        setCollectionFilter(title, collectionsFilter);
      })}>
      { title }
    </button>
  );
};

const mapStateToProps = createStructuredSelector({
  collectionsFilter: selectCollectionsFilter
});

const mapDispatchToProps = dispatch => ({
  setCollectionFilter: (collection, collectionsFilter) => dispatch(setCollectionFilter(collection, collectionsFilter))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);
