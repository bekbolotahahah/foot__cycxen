import React, {FC} from 'react'
import cls from './FormInput.module.scss'
import {UseFormRegister} from "react-hook-form"
import {NewRules} from "../../helpers/formRules/options"

interface IFormInputProp {
  inputType: string
  placeholder: string
  register: UseFormRegister<any>
  registerName: string
  regexName: string
  error?: string
}

const FormInput: FC<IFormInputProp> = (
  {
    inputType,
    placeholder,
    register,
    registerName,
    regexName,
    error
  }) => {

  return (
    <label className={cls.root}>
      <input
        type={inputType}
        placeholder={placeholder}
        {...register(registerName, NewRules[regexName])}
      />
      <span>{error}</span>
    </label>
  );
};

export default FormInput;
