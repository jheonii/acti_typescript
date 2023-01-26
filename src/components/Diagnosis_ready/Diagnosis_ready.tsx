import React from 'react';
import DiagnosisOption from '../Diagnosis_option/Diagnosis_option';
import styles from './Diagnosis_ready.module.css';


const DiagnosisReady = (): React.ReactElement => {

  return (
    <section className={styles.section}>
      <div className={styles.topTitle}>
        <h2>AI 피부문진</h2>
        <h2>3분</h2>
      </div>
      <h1 className={styles.mainTitle}>기초질문</h1>

      <div className={styles.inputCnt}>
        <DiagnosisOption />
        <DiagnosisOption />
      </div>
    </section>
  )
}

export default DiagnosisReady;