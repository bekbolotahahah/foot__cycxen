import React from 'react';
import cls from './Footer.module.scss'
import { ReactComponent as Logo } from '../../assets/images/CRYXXON.svg'
import { BsInstagram, BsWhatsapp, BsTelegram } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <div className={cls.conteyner}>
        <div className="section">
          <div className={cls.logo}>
            <Logo /> 
            <ul>
                <li>@2022 cryxen</li>
            <li>все права зашишены</li>
          </ul>

          </div>
          <div>
       
          </div>


        </div>
        <div className="section">
          <div className="nav__log">
            <nav>
              <ul className={cls.navigationList}>
                <li>Company</li>
                <li>Services</li>
                <li>Industries</li>
                <li>Clients</li>
                <li>Insights</li>
                <li>Industries</li>
                <li>Clients</li>
            
              </ul>
            </nav>
            <nav>
              <ul className={cls.navigationList_contact}>
                <li>+996 777 777 777</li>
                <li>cryxxen@gmail.com</li>
                <li>Industries</li>
                <li>Clients</li>
                <li>Insights</li>

              </ul>
            </nav>

          </div>
        </div>
        <div className="section">
        <div className="nav__log">
            <nav className={cls.bord}>
              <ul className={cls.navigationList}>
                <li><BsInstagram/></li>
                <li><BsWhatsapp/></li>
                <li><BsTelegram/></li>
             
              </ul>
            </nav>
           

          </div>
        </div>
        <div className="section"></div>
        <div className="section">
        <div className="nav__log">
            <nav className={cls.lust__part}>
              <ul className={cls.navigationList}>
                <li><BsInstagram/></li>
                <li><BsWhatsapp/></li>
                <li><BsTelegram/></li>
             
              </ul>
            </nav>
           

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
