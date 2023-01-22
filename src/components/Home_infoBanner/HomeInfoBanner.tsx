import React from 'react';
import { IhomeInfo } from '../../pages/Home/Home';
import styles from './HomeInfoBanner.module.css';



interface Ibanner {
  bannerInfo: IhomeInfo
}

const HomeInfoBanner = ({ bannerInfo }: Ibanner): React.ReactElement => {

  return (
    <section className={styles.section} style={{ backgroundColor: bannerInfo.backgroundColor }}>
      <div className={styles.imgCnt} style={{ backgroundColor: bannerInfo.color }}>
        <img className={styles.bannerImg} src={bannerInfo.url} alt='bannerImage' />
      </div>
      <div className={styles.infoSection}>
        <h3 className={styles.subTitle}>{bannerInfo.subtitle}</h3>
        <h1 className={styles.mainTitle}>{bannerInfo.maintitle}</h1>
        <h3 className={styles.title}>{bannerInfo.title}</h3>
        {bannerInfo.desc.map((item) => <h4 className={styles.desc}>✔️ {item}</h4>)}
      </div>
    </section>
  )
}

export default HomeInfoBanner;