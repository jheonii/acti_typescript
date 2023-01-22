import React from 'react';
import styles from './Home_partner.module.css';

const HomePartner = (): React.ReactElement => {


  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textCnt}>
          <h1 className={styles.subTitle}>국내 1위 맞춤형 화장품 회사를 위해</h1>
          <h1 className={styles.mainTitle}>지속적인 핵심 파트너와<br />함께 달려가고 있습니다.</h1>
          <div className={styles.category}>파트너스</div>
        </div>
        <img className={styles.partnerImg}
          src='./images/icons/Partners.png' alt='partners' />
      </div>
    </section>
  )
}

export default HomePartner;