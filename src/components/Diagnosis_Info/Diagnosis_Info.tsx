import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Diagnosis_Info.module.css';

const DiagnosisInfo = (): React.ReactElement => {

  const navigate = useNavigate();

  return (
    <section className={styles.section}>
      <img src='./images/banner/doctor.png' alt='doctor' className={styles.doctor} />
      <div className={styles.container}>
        <div className={styles.topCnt}>
          <h3 className={styles.leftText}>AI 피부문진 시작하기</h3>
          <h3 className={styles.rightText}>3분</h3>
        </div>
        <h1 className={styles.mainTitle}>정밀 피부진단과 <br />나에게 맞는 화장품까지</h1>
        <h1 className={styles.boldTitle}>액티바이옴 AI 피부문진</h1>
        <button className={styles.btn} onClick={() => navigate('/diagnosis-main')}>시작하기</button>
        <p className={styles.desc}>
          분당서울대병원 빅데이터와 총 50가지 정밀 문진으로 <br />
          <span style={{ fontWeight: 'bolder', color: 'black' }}>78,000,000</span> 가지로 세분화된 피부 솔루션.
          <br />정확한 결과로 맞춤형 화장품까지 확인해보세요.
        </p>
        <div className={styles.line}></div>
        <p className={styles.profileText} style={{ fontWeight: 'bolder' }} >스킨어드바이저</p>
        <p className={styles.profileText}>분당서울대병원 성형외과장 허찬영 (現 서울대학교 의과대학 교수)</p>
      </div>
    </section>
  )
}

export default DiagnosisInfo;