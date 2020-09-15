import React from 'react';
import FolderProject from '../../components/FolderProject';

import Header from '../../components/Header';

import styles from './styles.module.css';

const projetos = () => {
  const projects = [
    {
      id: 1,
      image: 'https://i.ibb.co/sKDp2g1/cyberpatia.png',
      name: 'Cyberpatia',
      text: `Para início de uma jornada, nosso primeiro projeto foi a confecção de um “Autômato”, um boneco com base de arames, jornal e gesso, que representa uma figura humana projetando seus conflitos internos.
      De início, a nossa ideia, seria trabalharmos com o conceito de empatia. Como o boneco foi projetado para ficar sentado, um som de depoimentos relacionados a tristeza e solidão seria transmitido dele, assim o participante iria sentar ao lado, e com o sensor de presença, uma luz acenderia dentro dele, como se fosse o seu coração batendo novamente. Por motivos de estrutura essa ideia não foi possível ser executada. 
      Queríamos algo visual para o conceito do nosso “Autômato”, para chamar a atenção dos espectadores, e assim, eles teriam a vontade de interagir com o objeto. 
      Primeiramente pensamos em uma televisão, no lugar de sua cabeça, porém a estrutura do boneco não suportaria o peso dela, foi então que pensamos em usar o projetor como uma alternativa para esse aspecto visual que tanto queríamos. 
      O projetor revelou um conceito interessante, facilitou a ilustração dos pensamentos que as pessoas projetam nas suas vidas e como isso atinge as pessoas ao seu redor.`
    },
    {
      id: 2,
      image: 'https://i.ibb.co/Yb3Xn9y/sotaquex.png',
      name: 'Jogo dos Sotaques',
      text: `Nosso segundo projeto integrador, teve como tema “Brasilidade”, pensamos em abordar “o que é ser brasileiro”. Em primeiro momento, pensamos numa entrevista com os filhos de imigrantes, tendo como base o que é ser brasileiro na perspectiva de pessoas que são filhos de não brasileiros. As entrevistas seriam filmadas em formato de documentário, como iríamos usar o material filmado apenas online, e seguiríamos com o áudio na apresentação, foi sugerido um jogo para identificarmos apenas pelo áudio, de qual estado essa pessoa é, foi então que criamos o “Jogo dos Sotaques”.
      O conceito que abordamos foi, que mesmo conhecendo pessoas de todas as regiões do Brasil, é praticamente impossível identificarmos a origem das pessoas apenas pelo seus aspectos físicos, mesmo havendo muitos estereótipos. `
    },
    {
      id: 3,
      image: 'https://i.ibb.co/xmcPtdZ/intervencao-urbana.png',
      name: 'Intervenção Urbana',
      text: `Tivemos o desafio de elaborar uma intervenção urbana. Como vivemos em uma sociedade altamente conectada nas redes sociais, quisemos transmitir uma ideia de reflexão para os dias atuais. O projeto foi acordado em uma estátua com 2 lados, um feliz tirando uma selfie, e uma outra triste, representando nossa atitude nas redes, onde nem sempre estamos tão felizes quanto a imagem que publicamos. Isso também reflete nosso estado de espírito interior e a ansiedade que vivemos.
      A estátua foi projetada para ser cromada, assim o espectador poderá se ver refletido na nela, dessa forma se vinculado a mensagem que queremos abordar.  `
    }
  ]
  return (
    <>
    <Header />
    <main className={styles.ProjectsContainer}>
      {
        projects.map(project => (
          <FolderProject key={project.id} image={project.image} text={project.text} title={project.name} />
        ))
      }
    </main>
    </>
  )
}

export default projetos;