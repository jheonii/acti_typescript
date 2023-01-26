import React from 'react';
import DiagnosisAge from '../Diagnosis_age/Diagnosis_age';
import DiagnosisInput from '../Diagnosis_input/Diagnosis_input';
import DiagnosisOption from '../Diagnosis_option/Diagnosis_option';
import styles from './Diagnosis_ready.module.css';


export interface IDiagnosisOption {
  title: string,
  optionA: string,
  optionB: string
}

export interface IDiagnosisInput {
  title: string,
  placeholder: string
}

const DiagnosisReady = (): React.ReactElement => {

  const optionBasic: IDiagnosisOption = {
    title: '누구의 피부를 진단하나요?',
    optionA: '나',
    optionB: '타인'
  }

  const optionGender: IDiagnosisOption = {
    title: '성별을 설정해주세요.',
    optionA: '남성',
    optionB: '여성'
  }

  const optionNick: IDiagnosisInput = {
    title: '닉네임을 설정해주세요.',
    placeholder: '2~10자 한글과 숫자를 입력해주세요.'
  }


  return (
    <section className={styles.section}>
      <div className={styles.topCnt}>
        <h2 className={styles.category}>AI 피부문진</h2>
        <h2 className={styles.time}>3분</h2>
      </div>
      <h1 className={styles.mainTitle}>기초질문</h1>

      {/* components */}
      <div className={styles.container}>
        <div className={styles.leftCnt}>
          <DiagnosisOption optionInfo={optionBasic} />
          <DiagnosisInput inputInfo={optionNick} />
        </div>
        <div className={styles.rightCnt}>
          <DiagnosisOption optionInfo={optionGender} />
          <DiagnosisAge />
        </div>
      </div>

      {/* next button */}
      <button className={styles.next}>
        다음
      </button>

    </section>
  )
}

export default DiagnosisReady;