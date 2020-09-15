import React from 'react';

import styles from './styles.module.css';
import Header from '../../components/Header';

import Gallery from '../../components/Gallery';

const player = () => {
  const posters = [
    {
      id: 1,
      url: 'https://i.ibb.co/cvZXcFH/poster-frenesi.png',
      name: 'FRENESI'
    },
    {
      id: 2,
      url: 'https://i.ibb.co/fXFfbpG/poster-inercia.jpg',
      name: 'INERCIA'
    },
    {
      id: 3,
      url: 'https://i.ibb.co/Cvms82y/poster-mortale.png',
      name: 'MORTALE'
    },
    {
      id: 4,
      url: 'https://i.ibb.co/X2RcPqt/poster-sotaqueix.png',
      name: 'Sotaqueix'
    },
    {
      id: 5,
      url: 'https://i.ibb.co/Ln763tk/poster-given-up.png',
      name: 'Given Up'
    },
  ];
  return (
    <>
    <Header />
    <main className={styles.containerPosters}>
      <h1>POSTERS</h1>
      <Gallery images={posters} type="poster"/>
    </main>
    </>
  )
}

export default player;