import React from 'react'
import { useState } from 'react'




const FilterTest = ({dataQuery, latestFilter, setSearchParams}) => {

    const[search, setSearch] = useState(dataQuery)
    const [checked, setChecked] = useState(latestFilter)

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const form = e.target;
    
        const query = form.search.value;
        const isLatest = form.latest.checked;
    
        const params = {}
    
        if (query.length) params.email = query;
        if (isLatest) params.latest = true;
    
    
        setSearchParams(params)
      }
     //./constructor?post=dvd&letestFilter=true


  return (
    <div>
        <form autoComplete='off' onSubmit={handleSubmit}>
            <input type="search" name="search"     value={search} onChange={e => setSearch(e.target.value)}/>
            <label style={{padding:'0 1rem'}}>
                <input type="checkbox" name="latest"    checked={checked} onChange={e => setChecked(e.target.checked)}/>NewOnly
            </label>
            <input type="submit" value="Search" />
        </form>
    </div>
  )
}

export default FilterTest