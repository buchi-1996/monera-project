class Errors {
  /**
   * Create a new Errors instance.
   */
  constructor () {
    this.errors = {}
  }

  /**
   * Determine if an error exists for the given field.
   *
   * @param {string} field
   */
  has (field) {
    if (this.errors.errors) {
      return Object.prototype.hasOwnProperty.call(this.errors.errors, field)
    } else {
      return false
    }
  }

  message () {
    return this.errors.message
  }

  /**
   * Determine if we have any errors.
   */
  any () {
    return Object.keys(this.errors).length > 0
  }

  all () {
    return this.errors.errors
  }

  /**
   * Retrieve the error message for a field.
   *
   * @param {string} field
   */
  get (field) {
    if (this.errors.errors[field]) {
      return this.errors.errors[field].toString()
    }
  }

  /**
   * Record the new errors.
   *
   * @param {object} errors
   */
  record (errors) {
    this.errors = errors
  }

  /**
   * Clear one or all error fields.
   *
   * @param {string|null} field
   */
  clear (field) {
    if (field) {
      delete this.errors[field]
      return
    }
    this.errors = {}
  }
}

export default Errors
