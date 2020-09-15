import React, { useEffect } from 'react';
import Link  from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import bgTapes from '../../assets/images/shelftop.png';

import Header from '../../components/Header';
import styles from './styles.module.css';


const tapes = [
  {
    id: 1,
    name: "Frenesi",
    src: "https://i.ibb.co/mHqdrkL/tape-Frenesi.png",
    videoId: "G84OFihFe60",
  },
  {
    id: 2,
    name: "Inercia",
    src: "https://i.ibb.co/kG5tszL/tape-Inercia.png",
    videoId: "vaX9kvKFlNg",
  },
  {
    id: 3,
    name: "Mortale",
    src: "https://i.ibb.co/0jNnvXT/tape-Mortale.png",
    videoId: "FT3z0WBIH2U",
  },
]

const videos = () => {
  return (
    <>
    <Header />
    <main className={styles.containerTapes}>
      {
        tapes.map(tape => (
          <Link key={tape.id} href={{ pathname: 'player', query: { id: tape.videoId }}}>
            <LazyLoadImage className={styles.tape} src={tape.src} alt={tape.name}/>
          </Link>
        ))
      }
      <img className={styles.bgTapes} src={bgTapes} alt="background Tapes"/>
    </main>
    </>
  )
}
export default videos;