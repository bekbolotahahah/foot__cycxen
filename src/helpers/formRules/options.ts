import {emailRegExp} from "./regex";

const required = 'Required field'

export const Rules = {
  first_nameAndLast_name: {required},
  email: {
    required,
    pattern: {
      value: emailRegExp,
      message: 'Incorrect email'
    },
  },
  phone_number: {required},
  message: {required},
  interest_type: {required}
}

export const NewRules: Record<string, any> = Rules