export const createItemsFromCollections = collections => {
  let allItemsArray = [];
  collections.map(collection => {
    const {title, items} = collection;
    const transformedItemsArray = items.map(item => {
      return { ...item, collection: title}
    })

    return transformedItemsArray.map(itemArray=> {
      return allItemsArray.push(itemArray)
    })
  });

  return allItemsArray;
};

export const filterItems = (items, searchField, collectionsFilter) => {
  let filteredItems = [];
  const filterItemsBySearchField = items.filter(item => item.name.toLowerCase().includes(searchField.toLowerCase()))
  if (collectionsFilter.length <= 0 ) {
    return filterItemsBySearchField;
  }

  collectionsFilter.map(collection => {
    
    return filterItemsBySearchField.map(item => {
      if (item.collection.toLowerCase() === collection.toLowerCase()) {
        return filteredItems.push(item);
      }
      return filteredItems;
    })
  })

  return filteredItems
}

export const createCollectionFilter = (collection, collectionsFilter) => {
  let existingCollection = false;

  if (collectionsFilter.length > 0) {
    existingCollection = collectionsFilter.find(
      filter => filter === collection
    );
  }

  if (collectionsFilter.length > 0 && existingCollection) {
    return collectionsFilter.filter(filter => filter !== collection)
  }

  collectionsFilter.push(collection)

  return collectionsFilter;
}
