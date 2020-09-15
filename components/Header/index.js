import React from 'react';
import Link from 'next/link';

import Logo from '../../assets/images/logoJamesDoido.png';
import backIcon from '../../assets/images/back.png';

import styles from './styles.module.css';

const Header = () => {
  return(
    <header className={styles.head}>
      <Link href="/">
        <img src={backIcon} className={styles.back} alt="back to home"/>
      </Link>
      <img className={styles.logoHead} src={Logo} alt="logo"/>
    </header>
  )
};

export default Header;
