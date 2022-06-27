import { Formik, Form, Field, ErrorMessage } from 'formik'
import Checkbox from './components/CheckBox'
import TextInput from './components/TextInput'
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
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          lastname: '',
          email: ''
        }}
        validate={validate}
        onSubmit={values => console.log(values)}
      >
        <Form>
          <TextInput name='name' label='Nombre'/>
          <br />
          <TextInput name='lastname' label='Apellido'/>
          <br />
          <TextInput name='email' label='Correo'/>
          <Checkbox name='accept'>
            Aceptar terminos y condiciones
          </Checkbox>
          <button type='submit'>Enviar</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
