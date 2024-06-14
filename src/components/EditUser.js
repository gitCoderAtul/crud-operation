import { upload } from '@testing-library/user-event/dist/upload'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import crudFunction from '../functions/crudFunction';

export default function EditUser() {
let navigate = useNavigate();
var x1 = useRef();
var x2 = useRef();

let {userid} = useParams();
var [record,setRecord] = useState({})

useEffect(()=>{
    crudFunction('/users/'+userid)
    .then((values)=>{
        console.log(values);
        setRecord(values)
    })
    .catch(err=>{
        console.log(err);
    })
},[userid])

var updateData= ()=>{
    var dataSet = {
        userName:x1.current.value,
        userAge:x2.current.value,
    }
    dataSet = JSON.stringify(dataSet);
    crudFunction('/users/'+userid, 'PUT', dataSet)
    .then((values)=>{
        console.log(values);
        navigate('/show-user')
    })
    .then(err=>{
        console.log(err);
    })
}

  return (
    <div className='container'>
        <h1> Edit User </h1>
        <input ref={x1} type='text' defaultValue={record.userName} /> <br/>
        <input ref={x2} type='text' defaultValue={record.userAge} /> <br/>
        <button onClick={()=>{updateData()}}> Update </button>
    </div>
  )
}
