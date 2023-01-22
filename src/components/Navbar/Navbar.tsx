import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {


	return (
		<nav className={styles.section}>
			<img src='./logo.png' alt='actibiome logo' className={styles.logo} />
			<div className={styles.list}>
				<h4>내 맞춤형 화장품</h4>
				<h4>진단하기</h4>
				<h4>내 진단 기록</h4>
				<div className={styles.btnContainer}>
					<button className={styles.userBtn}>마이페이지</button>
					<button className={styles.logoutBtn}>로그아웃</button>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;