import React from 'react'

const CollectionItem = ({id, name}) => {
    console.log({id})

  return (
    <div>
        <p>{id} {name}</p>
    </div>
  )
}

export default CollectionItem