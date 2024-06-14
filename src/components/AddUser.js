import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, Row } from 'react-bootstrap';
import crudFunction from '../functions/crudFunction';
import { useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            userName: '',
            userAge: '',
           
        },
        validationSchema: Yup.object({
            userName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
            userAge: Yup.number()
            .required('Required'),
           
        }),
        onSubmit: values => {
        //   alert(JSON.stringify(values, null, 2));
          console.log(values);
          crudFunction('/users', 'POST', JSON.stringify(values))
          .then((values)=>{
            console.log(values);
            navigate('/show-user')
          })
          .catch(err=>{
            console.log(err);
          })
        },
      });

  return (
    <Container>
        <Row> 
    <div className='col-md-3'>
         <form onSubmit={formik.handleSubmit}>
       <label htmlFor="userName">User Name</label>
       <input
       className='form-control'
         id="userName"
         name="userName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.userName}
       />
       {formik.touched.userName && formik.errors.userName ? (
         <div>{formik.errors.userName}</div>
       ) : null}
 
       <label htmlFor="lastName">User Age</label>
       <input
       className='form-control'
         id="userAge"
         name="userAge"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.userAge}
       />
       {formik.touched.userAge && formik.errors.userAge ? (
         <div>{formik.errors.userAge}</div>
       ) : null}

<button type="submit">Submit</button>
</form>

    </div>
    </Row>
    </Container>
  )
}
