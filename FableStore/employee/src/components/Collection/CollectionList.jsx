import React from 'react';
import CollectionItem from './CollectionComponents/CollectionItem';
import { useSelector } from 'react-redux';

const CollectionList = ({ collectionQuery }) => {
  const collections = useSelector(state => state.collections);

  return (
    <div>
      {collections.map(collection =>
        collection.name.includes(collectionQuery) && <CollectionItem key={collection.id} collection={collection} />
      )}
    </div>
  );
};

export default CollectionList;
