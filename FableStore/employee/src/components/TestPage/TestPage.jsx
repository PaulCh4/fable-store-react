import axios from 'axios'
import React, { useEffect, useState } from 'react';
import styles from '../../styles/TestPageCRUD.module.css';
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import FilterTest from './FilterTest';


const TestPage = () => {

    const [data, setData] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();

    const dataQuery = searchParams.get('email') || ''
    const latestFilter = searchParams.has('latest')

    const startsFrom = latestFilter ? 4 : 1;



    useEffect(() => {
        axios.get('http://localhost:3001/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    console.log(data)





    console.log(useLocation())//moveState

    return <div>    
                {/* 
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <input type="search" name="search"/>
                    <label style={{padding:'0 1rem'}}>
                      <input type="checkbox" name="latest" />NewOnly
                    </label>
                    <input type="submit" value="Search" />
                </form> */}
                <FilterTest dataQuery={dataQuery} latestFilter={latestFilter} setSearchParams={setSearchParams}/>

                
                <div className={styles.container}>
                <h2>CRUD app with JSON SERVER</h2>
                <button>Create +</button>
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                        <th>+</th>
                      </tr>
                    </thead>
                    <tbody>
                              {
                              data.filter(
                                data => data.email.includes(dataQuery) && data.id >= startsFrom
                              ).map((data) =>{
                                  return <tr key={data.id}>
                                      <td>{data.id}</td>
                                      <td><Link to={`/constructor/${data.id}`}>{data.name} </Link></td>
                                      <td>{data.email}</td>
                                      <td>
                                          <button>Update</button>
                                          <button>Delete</button>
                                      </td>
                                  </tr>
                              })}
                    </tbody>
                  </table>
                </div>







                


        </div>
    }

export default TestPage;


