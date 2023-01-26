import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Sub_navbar.module.css';

const SubNavbar = (): React.ReactElement => {

  const navigate = useNavigate()

  return (
    <nav className={styles.navbar}>
      <img alt='arrowleft' src='./images/icons/ArrowLeft.png' className={styles.arrow}
        onClick={() => navigate(-1)} />
      <div className={styles.container}>
        <img alt='home' src='./images/icons/Home.png' className={styles.home}
          onClick={() => navigate('/')} />
        <img alt='list' src='./images/icons/List.png' className={styles.list} />
      </div>
    </nav>
  )
}

export default SubNavbar