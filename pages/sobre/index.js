import React from 'react';

import Logo from '../../assets/images/logoJamesDoido.png';
import backIcon from '../../assets/images/back.png';

import styles from './styles.module.css';
import Link from 'next/link';

const Sobre = () => {

  return (
    <div className={styles.mainContainer}>
      <header>
        <Link href="/">
          <img src={backIcon} className={styles.back} alt="back to home" />
        </Link>
      </header>
      <main>
        <div>
          <img src="https://i.ibb.co/1J7SYYx/Perfil-Kayuan.png" alt="Kayuan Brigante" />
          <h2>Kayuan Brigante</h2>
        </div>
        <img className={styles.jamesLogo} src={Logo} alt="Logo James Doido" />
        <div>
          <img src="https://i.ibb.co/GHz7K8c/Perfil-Raul.png" alt="Raul Vilela" />
          <h2>Raul Vilela</h2>
        </div>
        <div>
          <img src="https://i.ibb.co/rb85qqw/perf-Il-Alan.png" alt="Alan Gonçalves" />
          <h2>Alan Gonçalves</h2>
        </div>
        <div>
          <img src="https://i.ibb.co/hY8Vj73/Perfil-Matheus.png" alt="Matheus Braz" />
          <h2>Matheus Braz</h2>
        </div>
        <div>
          <img src="https://i.ibb.co/jZssXpv/perf-Il-Bruno.png" alt="Bruno Lana" />
          <h2>Bruno Lana</h2>
        </div>
      </main>
      <p>Criada em 2019, a James Doido Produções é um projeto de 5 alunos de Multimídia que com uma câmera na mão e muita força de vontade querem contar histórias.</p>
    </div>
  )

}

export default Sobre;