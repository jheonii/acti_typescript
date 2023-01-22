import React from 'react';
import styles from './Home_ingred.module.css';

const HomeIngred = (): React.ReactElement => {
  return (
    <section className={styles.section}>
      <h1 className={styles.mainTitle}>액티바이옴은 이런 서비스도 개발하고 있어요!</h1>
      <h3 className={styles.subTitle}>액티바이옴은 9,341개의 화장품 성분 데이터를 기반으로 <br />
      스킨케어 제품의 추천 피부타입, 비추천 피부타입, 부작용 유발 성분들을 10초안에 분석해드리고 있어요.</h3>

      {/* container */}
      <div className={styles.container}>
        <div className={styles.mainBtn}>
          <img src='./images/icons/Brain.png'
            alt='icon' className={styles.mainIcon} />
          <h4>화장품 궁합 분석</h4>
        </div>
        <div className={styles.figureCnt}>
          <img src='./images/icons/Group.png'
            alt='group icon' className={styles.grouper} />
          <div className={styles.subBtnCnt}>
            <div className={styles.subBtn}>
              <img src='./images/icons/HardDrives.png'
                alt='icon' className={styles.subIcon} />
              <h4>9,341개 성분</h4>
            </div>
            <div className={styles.subBtn}>
              <img src='./images/icons/Eyedropper.png'
                alt='icon' className={styles.subIcon} />
              <h4>내 화장품</h4>
            </div>
            <div className={styles.subBtn}>
              <img src='./images/icons/Smiley.png'
                alt='icon' className={styles.subIcon} />
              <h4>내 피부상태</h4>
            </div>
          </div>
        </div>

        {/* putter */}
        <div className={styles.putter}>
          <h3>출시 준비중이에요!</h3>
        </div>
      </div>


    </section>
  )
}

export default HomeIngred;