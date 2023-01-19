import React from 'react';
import HomeInfoBanner from '../../components/Home_infoBanner/HomeInfoBanner';
import HomeMain from '../../components/Home_main/Home_main';
import styles from './home.module.css';

const Home = (): React.ReactElement => {

  return (
    <>
      <HomeMain />
      <HomeInfoBanner />
    </>
  )
}

export default Home;