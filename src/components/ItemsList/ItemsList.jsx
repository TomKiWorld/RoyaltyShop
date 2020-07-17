import React from 'react';

import EmptyList from '../EmptyList/EmptyList';
import CollectionItem from '../CollectionItem/CollectionItem';

const ItemsList = ({ items }) => (
  !items || !items.length ?
  <EmptyList title={`No item watches your search`} />
  :
  <React.Fragment>
    <h2>Did you find what you were looking for?</h2>
    <div className='items-list'>
      {
      items.map(item => (
          <CollectionItem 
            key={item.id} 
            item={item} />
        ))
      }
    </div>
  </React.Fragment>
);

export default ItemsList;
