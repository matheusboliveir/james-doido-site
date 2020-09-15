import React, { useRef } from 'react';
import Link from 'next/link';

import posters from '../../assets/images/posters.png';
import playerBG from '../../assets/images/playerBackground.png';
import logo from '../../assets/images/lousa.png';
import projetos from '../../assets/images/projetos.png';
import youtube from '../../assets/images/youtube.png';
import galeria from '../../assets/images/galeria.png';
import projetosAberto from '../../assets/images/projetosAberto.png';
import brick from '../../assets/images/tijolo.png'

import styles from './styles.module.css';

const Menu = () => {
  const $archive = useRef(null);
  function Archive() {
    if ($archive.current.alt == "portfólio da produtora fechado") {
      $archive.current.src = projetosAberto;
      $archive.current.alt = "portfólio da produtora aberto"
    } else {
      $archive.current.src = projetos;
      $archive.current.alt = "portfólio da produtora fechado";
    }
  }
  return (
    <header className={styles.containerHeader}>
      <main className={styles.containerMenu}>
        <Link href="/posters">
          <img className={styles.poster} src={posters} alt="posters dos curtas" />
        </Link>
        <Link href="/videos">
          <img className={styles.shelf} src={playerBG} alt="player para os curtas" />
        </Link>
        <div className={styles.logoDiv}>
          <Link href="/sobre">
            <img src={logo} className={styles.logo} alt="logo da James Doido Produções" />
          </Link>
          <Link href="/projetos">
            <img onMouseOut={Archive} onMouseOver={Archive} ref={$archive} src={projetos} className={styles.project} alt="portfólio da produtora fechado" />
          </Link>
        </div>
        <div className={styles.youtubeDiv}>
          <Link href="https://www.youtube.com/channel/UC35UVW6bLfhUaXsk0bCiO3A">
            <img src={youtube} className={styles.youtube} alt="canal do youtube" />
          </Link>
          <Link href="/galleryPhoto">
            <img src={galeria} className={styles.gallery} alt="galeria de fotos" />
          </Link>
        </div>
      </main>
      <img src={brick} className="brick" alt="bricks" />
    </header>
  )
};

export default Menu;