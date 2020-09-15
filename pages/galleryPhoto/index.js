import React from 'react';

import Header from '../../components/Header';
import Gallery from '../../components/Gallery';

import styles from './styles.module.css';

const GalleryPhoto = () => {
  const imagesList = [
    {
      id: 1,
      name: "fotos13",
      url: "https://i.ibb.co/RgQV88r/fotos13.jpg"
    },
    {
      id: 2,
      name: "fotos12",
      url: "https://i.ibb.co/zZ8kykG/fotos12.jpg"
    },
    {
      id: 3,
      name: "fotos11",
      url: "https://i.ibb.co/rFzxQy8/fotos11.jpg"
    },
    {
      id: 4,
      name: "fotos10",
      url: "https://i.ibb.co/NNG8dp5/fotos10.jpg"
    },
    {
      id: 5,
      name: "fotos09",
      url: "https://i.ibb.co/QCbGGKm/fotos09.jpg"
    },
    {
      id: 6,
      name: "fotos08",
      url: "https://i.ibb.co/gZ19Rhg/fotos08.jpg"
    },
    {
      id: 7,
      name: "fotos07",
      url: "https://i.ibb.co/zJVLMgW/fotos07.jpg"
    },
    {
      id: 8,
      name: "fotos06",
      url: "https://i.ibb.co/wMjN33k/fotos06.jpg"
    },
    {
      id: 9,
      name: "fotos05",
      url: "https://i.ibb.co/vL4rmLt/fotos05.jpg"
    },
    {
      id: 10,
      name: "fotos04",
      url: "https://i.ibb.co/LnkGJkQ/fotos04.jpg"
    },
    {
      id: 11,
      name: "fotos03",
      url: "https://i.ibb.co/MndxpP4/fotos03.jpg"
    },
    {
      id: 12,
      name: "fotos01",
      url: "https://i.ibb.co/9cGxHnt/fotos01.jpg"
    },
    {
      id: 13,
      name: "fotos02",
      url: "https://i.ibb.co/9ZXWdRX/fotos02.jpg"
    },
    {
      id: 14,
      name: "fotos17",
      url: "https://i.ibb.co/16KZjvJ/fotos17.jpg"
    },
    {
      id: 15,
      name: "fotos16",
      url: "https://i.ibb.co/4Pc2Qqg/fotos16.jpg"
    },
    {
      id: 16,
      name: "fotos15",
      url: "https://i.ibb.co/2stCgvX/fotos15.jpg"
    },
    {
      id: 17,
      name: "fotos14",
      url: "https://i.ibb.co/Z65MZ85/fotos14.jpg"
    }
  ]
  return (
    <>
    <Header />
    <main className={styles.containerPhotos}>
      <h1>Galeria de Fotos</h1>
      <Gallery images={imagesList} type="photo"/>
    </main>
    </>
    )
}
export default GalleryPhoto;