import React from 'react';
import { IDiagnosisInput } from '../Diagnosis_ready/Diagnosis_ready';
import styles from './Diagnosis_input.module.css';



interface IInput {
  inputInfo: IDiagnosisInput
}

const DiagnosisInput = ({ inputInfo }: IInput): React.ReactElement => {

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{inputInfo.title}</h1>
      <div className={styles.container}>
        <input className={styles.input} placeholder='2~10자 한글과 숫자를 입력해주세요.'></input>
      </div>
    </section>
  )
}

export default DiagnosisInput;


