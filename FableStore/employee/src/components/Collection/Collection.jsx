import React from 'react';
import axios from 'axios';

import CategoryList from './CategoryList';
import CollectionList from './CollectionList';

import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useDispatch} from 'react-redux'
import { setCollections } from '../../store/Slices/collectionsSlice';
import { setProducts } from '../../store/Slices/productsSlice';
import { setCategories } from '../../store/Slices/categoriesSlice';




const Collection = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        axios.get(`http://localhost:3001/collection`)
        .then(res =>{ 
            //console.log(res.data)
            dispatch(setCollections(res.data))})
        .catch(err => console.log(err))      

        axios.get(`http://localhost:3001/category`)
        .then(res => dispatch(setCategories(res.data)))
        .catch(err => console.log(err))  

        axios.get(`http://localhost:3001/product`)
        .then(res => dispatch(setProducts(res.data)))
        .catch(err => console.log(err))  
    },[])

    const [searchParams, setSearchParams] = useSearchParams();
    const collectionQuery = searchParams.get('collection') || ''
    const categoryQuery = searchParams.get('category') || ''

    //console.log(categoryQuery)


    if(categoryQuery === ''){
        return <CollectionList collectionQuery={collectionQuery}/>
    }
    else{
        return <CategoryList categoryQuery={categoryQuery}/>
    }
}

export default Collection