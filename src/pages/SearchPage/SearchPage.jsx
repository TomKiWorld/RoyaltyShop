import React, { useState,  useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import FilterButton from '../../components/FilterButton/FilterButton';
import ItemsList from '../../components/ItemsList/ItemsList';

import { setSearchField } from '../../redux/search/search.actions';
import { selectSearchField, selectFilteredItems } from '../../redux/search/search.selectors';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './SearchPage.scss';

const SearchPage = ({ setSearchField, searchField, sections, filteredItems }) => {
  const [orderedItems, setOrderedItems] = useState(filteredItems);
  const [orderBy, setOrderBy] = useState('name-a-z');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setOrderedItems(filteredItems);
  }, [filteredItems]);

  useEffect(() => {
    const getOrderedArray = value => {
      switch(value)  {
        case 'name-a-z':
          return filteredItems.sort((a, b) => (a.name > b.name) ? 1 : -1);
        case 'name-z-a':
          return filteredItems.sort((a, b) => (a.name < b.name) ? 1 : -1);
        case 'price-l-h':
          return filteredItems.sort((a, b) => (a.price > b.price) ? 1 : -1);
        case 'price-h-l':
          return filteredItems.sort((a, b) => (a.price < b.price) ? 1 : -1);
        default:
          return filteredItems;
      }
    }
    const newArray = getOrderedArray(orderBy);
    setOrderedItems([...newArray]);
  }, [orderBy, filteredItems]);
  
  return (
    <section className='search-page'>
      <HeaderBanner
        imageUrl={`https://images.unsplash.com/photo-1582147910714-93947818e1c4?auto=format&w=1200&q=80`}
      >
        <div className='search-blok'>
          <h1 className='search-title'>
            <label 
              htmlFor='search-input'>What are you looking for?
            </label>
          </h1>
          <input 
            className='search-input'
            type='text'
            name='search-input'
            id='search-input'
            onChange={(e) => setSearchField(e.target.value)}
            value={searchField}
          />
          <h2 className='search-title'>Filter collection</h2>
          <div className='search-filter'>
          {
            sections.map(section => (
              <FilterButton 
                key={section.id} 
                title={section.title} />
            ))
          }
          </div>
          <div>
            <h2 className='search-title'>
              <label 
                className='search-title' 
                htmlFor='orderby'>Order By:
              </label>
            </h2>
            <select 
              className='pointer'
              onChange={(e) => setOrderBy(e.target.value)}
              name='orderby' 
              id='orderby'>
              <option value="name-a-z">Name A - Z</option>
              <option value="name-z-a">Name Z - A</option>
              <option value="price-l-h">Price low - high</option>
              <option value="price-h-l">Price high - low</option>
            </select>
          </div>
        </div>
      </HeaderBanner>
      <section className='search-results container'>
        <ItemsList items={orderedItems} />
      </section>
  </section>
  );
};

const mapStateToProps = createStructuredSelector({
  searchField: selectSearchField,
  sections: selectDirectorySections,
  filteredItems: selectFilteredItems
});

const mapDispatchToProps = dispatch => ({
  setSearchField: text => dispatch(setSearchField(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
