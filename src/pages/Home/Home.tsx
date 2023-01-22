import React from 'react';
import HomeInfoBanner from '../../components/Home_infoBanner/HomeInfoBanner';
import HomeIngred from '../../components/Home_ingred/Home_ingred';
import HomeMain from '../../components/Home_main/Home_main';
import HomePartner from '../../components/Home_partner/Home_partner';
import HomePutter from '../../components/Home_putter/Home_putter';
import styles from './home.module.css';

export interface IhomeInfo {
  color: string,
  backgroundColor: string,
  url: string,
  subtitle: string,
  maintitle: string,
  title: string,
  desc: string[],
}

const Home = (): React.ReactElement => {

  const banner1Info: IhomeInfo = {
    color: '#f6f6f6',
    backgroundColor: 'white',
    url: './images/banner/banner1.png',
    subtitle: '피부진단',
    maintitle: '50가지 문진으로 피부분석',
    title: '의사가 만든 문진으로 병원에 가지 않고 내 피부를 진단해보세요',
    desc: ['병원에 가서 의사가 물어보는 간단한 질문을 문진으로 구현했습니다.',
      '대학병원 전문의와 박사 연구원들이 138개의 SCI의학 논문을 메타분석해서 만들었습니다.',
      '인공지능 머신러닝을 활용하여 피부진단 의료기기 수준의 측정 수준을 구현했습니다.']
  }

  const banner2Info: IhomeInfo = {
    color: 'white',
    backgroundColor: '#f6f6f6',
    url: './images/banner/banner2.png',
    subtitle: '맞춤형 화장품',
    maintitle: '3년간 100억원의 개발 비용',
    title: '12가지 피부 유익균을 기반으로 약 1억가지 맞춤형 솔루션을 개발했습니다.',
    desc: ['피부에 사는 유익한 미생물을 기반으로, 인체 친환경적인 성분만 사용했습니다.',
      '국내 최대규모 화장품 OEM 업체와 한국피부임상센터에서 3년동안 100억원을 들여 개발했습니다.',
      '12가지 효능을 가지고 있는 유익균 배양액을 기반으로, 피부에 맞춰서 1:1 배합을 진행합니다.']
  }

  return (
    <>
      <HomeMain />
      <HomeInfoBanner bannerInfo={banner1Info} />
      <HomeInfoBanner bannerInfo={banner2Info} />
      <HomeIngred />
      <HomePartner />
      <HomePutter />
    </>
  )
}

export default Home;