import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import arrow from '../../assets/images/arrow.png';

const Gallery = ({ images, type }) => {

  const $containerImage = useRef(null);

  function scrollGallery(direction) {
    const container = $containerImage.current;
    if (direction === 0)
      return container.scrollBy({
        top: 0,
        left: container.clientWidth,
        behavior: 'smooth'
      });
      container.scrollBy({
      top: 0,
      left: -container.clientWidth,
      behavior: 'smooth'
    });
  }

  function resizeImage(id) {
    const imgSelected = document.getElementById(id);
    imgSelected.className = 
    imgSelected.className === styles[type] ? styles.fullImg : styles[type];
  }

  return (
    <div className={styles.containerGallery}>
      <img onClick={()=>{scrollGallery(1)}} className={styles.arrowLeft} src={arrow} alt="esquerda" />
      <div ref={$containerImage} className={styles.containerImages}>
        {
          images.map(image => (
            <LazyLoadImage onClick={()=>{return resizeImage(image.id)}} id={image.id} key={image.id} className={styles[type]} src={image.url} alt={image.name} />
          ))
        }
      </div>
      <img onClick={()=>{scrollGallery(0)}} className={styles.arrowRight} src={arrow} alt="direita" />
    </div>
  )
}

export default Gallery;