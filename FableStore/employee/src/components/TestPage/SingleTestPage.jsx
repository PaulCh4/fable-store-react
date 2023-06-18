import { useParams } from "react-router-dom";//:id
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

import { useNavigate } from "react-router-dom";//back
import { useLocation } from "react-router-dom";//moveState

const SingleTestPage = ()=>{
    console.log(useParams)
    const {id} = useParams();

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3001/users/${id}`)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [id])
    console.log("----> ", {data})


    const navigate = useNavigate();


    const goBack = () => navigate(-1)
    const goForward = () => navigate(1)

    const goHome = () => navigate('/', {replace: true})//false движение по истории


    const moveStateNavigate = () => navigate('/constructor', {state: 123})
    console.log(useLocation())


    return (
        <div>
            <button onClick={moveStateNavigate}>MoveState</button>
            <button onClick={goBack}>Back</button>
            {data && (
            <table>
                <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{id}</td>

                </tr>
            </table>)
            }
            <button><Link to={`/constructor/${id}/edit`}>Edit post</Link></button>
        </div>
    )
};

export default SingleTestPage;