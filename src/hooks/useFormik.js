import { useFormik } from 'formik'


const validate = (values) => {
  const errors = {}

  if (!values.name) {
    errors.name = 'requerid'
  } else {
    if (values.name.length < 5) {
      errors.name = 'El nombre debe tener una longitud igual a 5'
    }
  }

  if (!values.lastname) {
    errors.lastname = 'requerid'
  } else {
    if (values.lastname.length < 5) {
      errors.lastname = 'El apellido debe tener una longitud mayor a 5'
    }
  }

  return errors;
}

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: ''
    },
    onSubmit: values => console.log(values),
    validate
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>Nombre</label>
        <input type='text' {...formik.getFieldProps('name')}/>
        { formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
        <br />
        <label>Apellido</label>
        <input type='text' {...formik.getFieldProps('lastname')}/>
        {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}
        <br/>
        <label>Email</label>
        <input type='text' {...formik.getFieldProps('email')}/>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}

export default App;
