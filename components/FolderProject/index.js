import React from 'react';

import styles from './styles.module.css';


const FolderProject = ({ image, text, title }) => {
  return (
    <div className={styles.folderContainer}>
      <img src={image} alt={title} />
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default FolderProject;