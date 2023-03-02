// constants
export const emptyErrors = {
  name: { isEmpty: "", invalidLength: "" },
  image: { isEmpty: "" },
  hp: { isEmpty: "", isNumber: "", invalidRange: "" },
  attack: { isEmpty: "", isNumber: "", invalidRange: "" },
  defense: { isEmpty: "", isNumber: "", invalidRange: "" },
  speed: { isNumber: "", invalidRange: "" },
  height: { isNumber: "", invalidRange: "" },
  weight: { isNumber: "", invalidRange: "" },
  types: { emptyArray: "" },
};
export const validRanges = {
  hp: { min: 5, max: 255 },
  attack: { min: 5, max: 255 },
  defense: { min: 5, max: 255 },
  speed: { min: 5, max: 255 },
  height: { min: 1, max: 100 },
  weight: { min: 10, max: 5000 },
};
export const validNameLength = 30;

export const isValid = (errorsArray) => {
  // if there are no errors to be found, return true
  return JSON.stringify(errorsArray) === JSON.stringify(emptyErrors);
};

export const validate = (form, setErrors) => {
  const errors = {
    name: { isEmpty: "", invalidLength: "" },
    image: { isEmpty: "" },
    hp: { isEmpty: "", isNumber: "", invalidRange: "" },
    attack: { isEmpty: "", isNumber: "", invalidRange: "" },
    defense: { isEmpty: "", isNumber: "", invalidRange: "" },
    speed: { isNumber: "", invalidRange: "" },
    height: { isNumber: "", invalidRange: "" },
    weight: { isNumber: "", invalidRange: "" },
    types: { emptyArray: "" },
  };

  // isEmpty
  for (const field in errors) {
    if (errors[field].hasOwnProperty("isEmpty") && !form[field]) {
      errors[field].isEmpty = `${field} cannot be empty`;
    }
  }

  // isNumber
  for (const field in errors) {
    if (
      errors[field].hasOwnProperty("isNumber") &&
      !Number(form[field]) &&
      form[field]
    ) {
      errors[field].isNumber = `${field} must be a number`;
    }
  }

  // invalidRange
  for (const field in errors) {
    if (errors[field].hasOwnProperty("invalidRange") && Number(form[field])) {
      const min = validRanges[field].min;
      const max = validRanges[field].max;
      const value = Number(form[field]);
      if (!(value >= min && value <= max)) {
        errors[
          field
        ].invalidRange = `${field} must be within ${min} and ${max}`;
      }
    }
  }

  // invalidLength
  if (form.name.length > validNameLength)
    errors.name.invalidLength = `name cannot exceed ${validNameLength} characters`;

  // emptyArray
  if (!form.types.length)
    errors.types.emptyArray = `pokémon must have at least one type`;

  setErrors({ ...errors });

  return isValid(errors);
};
