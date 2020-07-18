import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectSearchField } from '../../redux/search/search.selectors';
import { setSearchField } from '../../redux/search/search.actions';

const PUBLIC_URL = process.env.PUBLIC_URL;

const SearchBar = ({ setSearchField, searchField, history, handleClick }) => {
  const searchClick = () => {
    if (handleClick) {
      handleClick();
    }
    history.push(`${PUBLIC_URL}/search`);
  }

  return (
    <div className='search-nav'>
      <input 
        aria-label='search'
        className='search-nav-input'
        type='text'
        name='search-nav-input'
        id='search-nav-input'
        onChange={(e) => setSearchField(e.target.value)}
        value={searchField}
      />
      <button
        className='search-nav-button pointer'
        onClick={searchClick}
      >Search</button>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  searchField: selectSearchField
});

const mapDispatchToProps = dispatch => ({
  setSearchField: text => dispatch(setSearchField(text))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
