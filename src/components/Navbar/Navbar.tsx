import React from 'react';
import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';
import SubNavbar from '../Sub_navbar/Sub_navbar';

const Navbar = () => {

	const navigate = useNavigate();

	const onNavigate = (url: string): void => {
		navigate(url)
	}

	return (
		<>
			<nav className={styles.section}>
				<div className={styles.container}>
					<img
						onClick={() => onNavigate('/')}
						src='./logo.png'
						alt='actibiome logo'
						className={styles.logo} />
					<div className={styles.list}>
						<h4 onClick={() => onNavigate('url')}>회사 소개</h4>
						<h4 onClick={() => onNavigate('url')}>스토어</h4>
						<h4 onClick={() => onNavigate('diagnosis')}>진단 홈</h4>
						<h4 onClick={() => onNavigate('url')}>진단 기록</h4>
						<div className={styles.btnContainer}>
							<button className={styles.userBtn}>마이페이지</button>
							<button className={styles.logoutBtn}>로그아웃</button>
						</div>
					</div>
				</div>
			</nav>
			<div className={styles.subnav}>
				<SubNavbar />
			</div>
		</>
	)
}

export default Navbar;