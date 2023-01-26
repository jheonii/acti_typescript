import React, { useState } from 'react';
import styles from './Diagnosis_age.module.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


const DiagnosisAge = (): React.ReactElement => {

  const thisYear = parseInt(new Date().toISOString().substr(0, 4)) - 70;
  const years = Array(70).fill(0).map((value, index) => thisYear + 1 + index).sort((a, b) => { return b - a; })

  const [year, setYear] = useState<string>('예) 1999년생');
  const [yearClicked, setYearClicked] = useState(false);

  const yearChange = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const target = e.currentTarget as HTMLLIElement;
    setYear(target.innerHTML)
    setYearClicked(false);
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>태어난 년도를 선택해주세요.</h1>

      <div className={styles.container} onClick={() => !yearClicked ? setYearClicked(true) : setYearClicked(false)}>
        <div className={styles.yearCnt}>
          <div className={styles.yearValue}>{year === null ? "예) 1992" : year}</div>
        </div>
        <ul className={`${styles.yearList} ${yearClicked ? styles.visible : ''}`}>
          {years.map((year, index) => <div key={index}>
            <li onClick={(e) => yearChange(e)} className={styles.yearItem} value={year}>{year}년생</li>
            <div className={styles.line}></div>
          </div>)}
        </ul>
      </div>

    </section>
  )
}

export default DiagnosisAge;
