import React from 'react';
import styles from './Home_main.module.css';

const HomeMain = () => {
  return (
    <section className={styles.section}>
      <div className={styles.middleCnt}>
        <h2 className={styles.topTitle}>국내 No 1. 퍼스널 스킨케어 브랜드</h2>
        <span className={styles.roundTitle}>60억가지&nbsp;</span>
        <span className={styles.mainTitle}>맞춤형 화장품</span>
        <br />
        <span className={styles.mainTitle}>효능배합&nbsp;</span>
        <span className={styles.roundTitle}>1억 가지</span>
        <br />
        <button className={styles.Btn}>맞춤형 화장품 처방받기 →</button>
      </div>

      {/* putter container */}
      <div className={styles.putterCnt}>
        <div className={styles.putterItem}>
          <img className={styles.putterItemIcon}
            src='./images/icons/UserCircle.png'
            alt='usercircle' />
          <h2>1억가지</h2>
          <h4>맞춤형 솔루션</h4>
        </div>
        <div className={styles.line}></div>
        <div className={styles.putterItem}>
          <img className={styles.putterItemIcon}
            src='./images/icons/CircleCheck.png'
            alt='CircleCheck' />
          <h2>3000명</h2>
          <h4>임상테스트 완료</h4>
        </div>
        <div className={styles.line}></div>
        <div className={styles.putterItem}>
          <img className={styles.putterItemIcon}
            src='./images/icons/TestTube.png'
            alt='TestTube' />
          <h2>100억원</h2>
          <h4>연구개발비</h4>
        </div>
      </div>
    </section>
  )
}

export default HomeMain;