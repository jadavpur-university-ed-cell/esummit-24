import { FunctionComponent } from 'react';

import * as React from 'react';
import styles from "./index.module.css";

export type RootType = {className?: string;};

const Root: FunctionComponent<RootType> = ({ className = "" }) => 
  {
  return (
    <div className={[styles.root, className].join(" ")}>
      <section className={styles.content} />
      <section className={styles.structure}>
        
        <div className={styles.layout}>

          <div className={styles.layoutInner}>
          <div className={styles.map}>
          <div className={styles.contact}>
          Contact Us
              </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.1411398944997!2d88.36883737468527!3d22.498887135669126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271237f28abe9%3A0xd047bab0c8bfb11c!2sJadavpur%20University!5e0!3m2!1sen!2sin!4v1723960607696!5m2!1sen!2sin" width="450" height="250" referrerPolicy="no-referrer-when-downgrade"></iframe>
           </div>

           
          
         </div>   
        </div>
      </section>
    </div>
  );
};

export default Root;