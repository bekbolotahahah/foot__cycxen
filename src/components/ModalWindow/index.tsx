import React, {Dispatch, FC, SetStateAction} from 'react'
import cls from './ModalWindow.module.scss'
import {Dialog} from "@headlessui/react"
import FormInput from "../FormInput"
import {FieldErrors, FieldValues, UseFormHandleSubmit, UseFormRegister} from "react-hook-form"
import {NewRules} from "../../helpers/formRules/options"
import {IRequestForm} from "../../models/main.page.model"


interface IModalWindowProp {
  isOpen: boolean
  changeOpen: Dispatch<SetStateAction<boolean>>
  handleSubmit: UseFormHandleSubmit<IRequestForm>
  submitRequestHandler: (data: IRequestForm) => void
  register: UseFormRegister<IRequestForm>
  isValid: boolean
  errors:  FieldErrors<IRequestForm>
}

const ModalWindow: FC<IModalWindowProp> = (
  {
    isOpen,
    changeOpen,
    handleSubmit,
    register,
    isValid,
    errors,
    submitRequestHandler
  }) => {

  return (
    <Dialog
      open={isOpen}
      onClose={() => changeOpen(false)}
    >
      <div className={cls.background}>

        <Dialog.Panel className={cls.popup}>
          <Dialog.Title className={cls.heading}>
            <strong>Contact with us</strong>
            <span onClick={() => changeOpen(false)}>&times;</span>
          </Dialog.Title>
          <div className={cls.form}>
            <form onSubmit={handleSubmit(submitRequestHandler)}>
              <div className={cls.header}>
                <span>Interested in</span>
                <select {...register('interest_type')}>
                  <option value="internship">Internship</option>
                  <option value="order project">Software Developing</option>
                  <option value="partner">Partnership</option>
                </select>
              </div>
              <div className={cls.body}>
                <div className={cls.names}>
                  <FormInput
                    inputType="text"
                    placeholder="First name"
                    registerName="firstName"
                    register={register}
                    regexName="first_nameAndLast_name"
                    error={errors?.firstName?.message}
                  />
                  <FormInput
                    inputType="text"
                    placeholder="Last name"
                    registerName="lastName"
                    register={register}
                    regexName="first_nameAndLast_name"
                    error={errors?.lastName?.message}
                  />
                </div>

                <div className={cls.contacts}>
                  <FormInput
                    inputType="text"
                    placeholder="Phone number"
                    registerName="phone_number"
                    register={register}
                    regexName="phone_number"
                    error={errors.phone_number?.message}
                  />
                  <FormInput
                    inputType="email"
                    placeholder="Email"
                    registerName="email"
                    register={register}
                    regexName="email"
                    error={errors.email?.message}
                  />
                </div>

                <div className={cls.message}>
                  <span>{errors.message?.message}</span>
                  <textarea
                    placeholder="Your message..."
                    {...register('message', NewRules['message'])}
                  />
                </div>
              </div>
              <div className={cls.footer}>
                <button onClick={() => changeOpen(false)}>Cancel</button>
                <button type="submit" disabled={!isValid}>Send</button>
              </div>
            </form>
          </div>
        </Dialog.Panel>
      </div>

    </Dialog>
  )
}

export default ModalWindow
