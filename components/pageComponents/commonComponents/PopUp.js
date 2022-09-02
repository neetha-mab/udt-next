import React, { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import router, { useRouter } from 'next/router'
import styles from './popup.module.scss';

const PopUp = ({ show, closePopup, children }) => {

  const handleClose = () => {
    document.querySelector('body').classList.remove('remove_over_flow');
    closePopup(false);
  }

  return show ? (
    <div className={`${styles.overlayer} popup-up`}>
      <div className={styles.popup_wrapper}>
        <button className={styles.close_button} onClick={() => handleClose()}><GrClose /></button>
        {children}
      </div>
    </div>
  ) : null;
}

export default PopUp;
