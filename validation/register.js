const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  console.log("validate içerisinde");

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 3 characters";
    console.log("errore girdi");
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
