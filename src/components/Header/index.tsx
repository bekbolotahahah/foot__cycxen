import React, {Dispatch, FC, SetStateAction, useState} from 'react'
import cls from './Header.module.scss'
import {ReactComponent as Logo} from '../../assets/images/CRYXXON.svg'
import cn from 'classnames'
import ModalWindow from "../ModalWindow"
import {FieldErrors, UseFormHandleSubmit, UseFormRegister, UseFormReset} from "react-hook-form"
import {IRequestForm} from "../../models/main.page.model";
import {requests} from "../../config";

interface IHeaderProp {
  isModalOpen: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  register: UseFormRegister<IRequestForm>
  reset: UseFormReset<IRequestForm>
  handleSubmit: UseFormHandleSubmit<IRequestForm>
  errors: FieldErrors<IRequestForm>
  isValid: boolean
}

const Header: FC<IHeaderProp> = (
  {
    isModalOpen,
    setIsModalOpen,
    handleSubmit,
    register,
    isValid,
    errors
  }) => {
  const [isDropdown, setIsDropdown] = useState(false)

  const submitRequestHandler = (
    {
      email,
      firstName,
      message,
      lastName,
      phone_number,
      interest_type
    }: IRequestForm) => {
        const newData = {email, first_name: firstName, last_name: lastName, type: interest_type, message, phone_number}


        requests.postRequest(newData).then(res => {
          console.log(res)
        })
  }


  return (
    <div className={cn(cls.root, {
      [cls.active]: isDropdown
    })}>
      <div className={cls.container}>
        <div
          className={cls.navigation}
          onMouseOver={() => setIsDropdown(true)}
          onMouseOut={() => setIsDropdown(false)}
        >
          <div className={cls.logo}>
            <Logo/>
          </div>
          <nav>
            <ul className={cls.navigationList}>
              <li>Company</li>
              <li>Services</li>
              <li>Industries</li>
              <li>Clients</li>
              <li>Insights</li>
            </ul>
          </nav>
        </div>
        <div className={cls.contact}>
          <button onClick={() => setIsModalOpen(true)}>Get in touch</button>
        </div>
      </div>

      <ModalWindow
        isOpen={isModalOpen}
        changeOpen={setIsModalOpen}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        isValid={isValid}
        submitRequestHandler={submitRequestHandler}
      />

    </div>
  )
}

export default Header
