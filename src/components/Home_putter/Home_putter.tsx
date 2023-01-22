import React from 'react';
import styles from './Home_putter.module.css';

const HomePutter = (): React.ReactElement => {


  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3>액티바이옴 주식회사</h3>
        <h4>(주)액티바이옴 주식회사 (대표이사 강신영) | 사업자등록번호 : XXX-XX-XXXXX <br />
      경기도 분당구 정자동 킨스타워 24층 (정자로 XXX-XX) | 대표 전화번호 : XXXX-XXXX | 대표 이메일 : actibiome@gmail.com <br />
      통신판매업신고번호 : 제 2021-서울강남-XXXX
      </h4>
        <h3>이용약관 &nbsp;&nbsp;| &nbsp;&nbsp; 개인정보처리방침</h3>
      </div>
    </section>
  )
}

export default HomePutter;