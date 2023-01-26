import React, { useState } from 'react';
import { IDiagnosisOption } from '../Diagnosis_ready/Diagnosis_ready';
import styles from './Diagnosis_option.module.css';


interface Ioption {
  optionInfo: IDiagnosisOption
}

const DiagnosisOption = ({ optionInfo }: Ioption): React.ReactElement => {

  const [selected, setSelected] = useState<string | undefined>('');
  const handleSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    setSelected(target.dataset.option)
  }

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{optionInfo.title}</h1>
      <div className={styles.container}>
        <div className={`${styles.optionA} ${selected === 'A' ? styles.selected : ''}`}
          data-option='A'
          onClick={(e) => handleSelect(e)}>{optionInfo.optionA}</div>
        <div className={`${styles.optionB} ${selected === 'B' ? styles.selected : ''}`}
          data-option='B'
          onClick={(e) => handleSelect(e)}>{optionInfo.optionB}</div>
      </div>
    </section>
  )
}

export default DiagnosisOption;