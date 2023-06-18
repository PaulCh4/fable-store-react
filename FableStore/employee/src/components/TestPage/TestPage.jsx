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
                {/* неуправляемая форма
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












               {/* 
                <PrintButton />
                <Counter />

                <input type="text" />
                <button onClick={() => A("Dima")}></button>
                <br/>
                <br/>

                <ChangeType /> */}



// //-------------------------------------PROPS
// function PrintButton() {
              
//     function print(name, age){
//         console.log(`Name ${name}  Age: ${age}`);
//    }

//     return <div> 
//                 <button onClick={() => print("Bob", 23)}>Print Bob</button>
//                 <button onClick={() => print("Tom", 36)}>Print Tom</button>
//             </div>;
// }

// class Counter extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { count: 0 };
//     }
  
//     handleClick = () => {
//       this.setState({ count: this.state.count + 1 });
//     };
  
//     render() {
//       return (
//         <div>
//           <p>Count: {this.state.count}</p>
//           <button onClick={this.handleClick}>Increment</button>
//         </div>
//       );
//     }
//   }

// const A = (props) => {
//     console.log(`Say ${props}`)
// }



// //-------------------------------------USESTATE

// const ChangeType = () => {
//     const [type, SetType] = useState("пиджак")

//     const handleClick = () => {
//         SetType("пижмака");

//         console.log(type);
//     }

//     //console.log(type);

//     return <div>
//         <button onClick={handleClick}>ChangeType</button>
//     </div>
// }



// //-------------------------------------USEEFFECT
// // function Example() {
// //     const [count, setCount] = useState(0);
  
// //     useEffect(() => {
// //       console.log(`Count: ${count}`);
// //     });
  
// //     return (
// //       <div>
// //         <p>Вы кликнули {count} раз</p>
// //         <button onClick={() => setCount(count + 1)}>
// //           Нажми на меня
// //         </button>
// //       </div>
// //     );
// //   }
// // \
// // Хук useEffect может использоваться для отслеживания изменений как состояния, так и пропсов. Вы можете указать пропсы в качестве зависимостей для эффекта, и он будет вызываться каждый раз, когда пропсы изменятся.

// // Например, предположим, у нас есть компонент Child, который принимает проп name:

// // function Child(props) {
// //   useEffect(() => {
// //     console.log(`Name: ${props.name}`);
// //   }, [props.name]);

// //   return <p>Name: {props.name}</p>;
// // }

// // function Parent() {
// //   const [name, setName] = useState("Dima");

// //   return (
// //     <div>
// //       <Child name={name} />
// //       <button onClick={() => setName("Oleg")}>Change Name</button>
// //     </div>
// //   );
// // }

// // В React есть множество встроенных хуков, которые позволяют использовать различные возможности в функциональных компонентах. Вот краткое описание некоторых из наиболее часто используемых хуков:

// // useState - позволяет использовать состояние в функциональном компоненте. Он возвращает массив из двух элементов: текущее значение состояния и функцию для его обновления.
// // useEffect - позволяет выполнять побочные эффекты в функциональном компоненте, такие как запросы к серверу или подписки на события. Он принимает функцию, которая будет вызываться после каждого рендеринга компонента.
// // useContext - позволяет использовать значение контекста в функциональном компоненте. Он принимает объект контекста и возвращает текущее значение этого контекста.
// // useReducer - позволяет использовать редьюсер для управления состоянием компонента. Он работает аналогично useState, но предоставляет более гибкий способ обновления состояния.
// // useCallback - возвращает мемоизированную версию переданной функции, которая изменяется только при изменении зависимостей. Это может быть полезно для оптимизации производительности, когда передаваемая функция используется как зависимость других хуков или передается в дочерние компоненты.
// // useMemo - возвращает мемоизированное значение, которое вычисляется только при изменении зависимостей. Это может быть полезно для оптимизации производительности, когда вычисление значения является ресурсоемким.
// // Эти и другие хуки предоставляют мощные инструменты для работы с функциональными компонентами и позволяют использовать возможности React, которые раньше были доступны только в классовых компонентах.


// //------------------------------------- . . .





