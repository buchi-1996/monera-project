import Form from './FormHandler/Form'
import Errors from './FormHandler/Error'

export default ({ $axios, context }, inject) => {
  inject('form', data => new Form(data, $axios))
  inject('formError', () => new Errors())
}
