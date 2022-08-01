export default function validateCountry(input) {
    let errors = {};

    if (!/^[a-zA-Z\s]+$/.test(input.country) && input.country) {
      errors.country = "Only letters";
    }

    return errors;
  }