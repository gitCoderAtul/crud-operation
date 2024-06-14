import React, { useEffect, useState } from 'react'
import crudFunction from '../functions/crudFunction';
import { Link } from 'react-router-dom';

export default function ShowUser() {

    let [record, setRecord] = useState([]);
    useEffect(()=>{
        crudFunction('/users')
        .then((values)=>{
            console.log(values);
            setRecord(values)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])

    function deleteData(id,ev){
        console.log(id);
        crudFunction('/users/'+id, 'DELETE')
        .then((values)=>{
            console.log(values);
            ev.target.parentNode.parentNode.remove();
        })
        .catch(err=>{
            console.log(err);
        })
    }

  return (
    <div className='container'>
        <h1> Show user </h1>
        <div className='col-md-6'>
        <table className='table table-bordered table-hover'>
            <thead>
                <tr>
                    <th>User Name </th>
                    <th>User Age </th>
                    <th>Delete </th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                 {
                    record && record.map(({id,userName,userAge})=>
                    <tr>
                        <td>{userName}</td>
                        <td>{userAge}</td>
                        <td>
                            <button onClick={(ev)=>{deleteData(id,ev)}}> Delete </button>
                        </td>
                        <td>
                            <Link to={'/editData/'+id}>Edit</Link>
                        </td>
                    </tr>
                    )
                 }
            </tbody>
        </table>
        </div>
    </div>
  )
}
