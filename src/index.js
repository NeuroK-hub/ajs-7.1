class Validator {
  constructor(inputName) {
    this.inputName = inputName;
  }

  validateUsername() {
    if (new RegExp('^([a-z])([a-z0-9-_]+)([a-z]$)', 'igm').test(this.inputName) && !(new RegExp('[0-9]{4,}', 'gm').test(this.inputName))) {
      return true;
    } else {
      return false;
    }
  }
}

export default Validator;
