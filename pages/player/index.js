import React, { useEffect, useRef } from 'react';

import shelfBottom from '../../assets/images/shelfBottom.png';
import btnMute from '../../assets/images/playerButton/buttonMute.png';
import btnSound from '../../assets/images/playerButton/buttonSound.png';
import btnEject from '../../assets/images/playerButton/buttonEject.png';
import btnPause from '../../assets/images/playerButton/buttonPause.png';
import btnPlay from '../../assets/images/playerButton/buttonPlay.png';
import btnFFWD from '../../assets/images/playerButton/buttonFFWD.png';
import btnREW from '../../assets/images/playerButton/buttonREW.png';

import Header from '../../components/Header';
import styles from './styles.module.css';
import ReactPlayer from 'react-player/youtube';
import Link from 'next/link';

const player = ({ query }) => {

  const options = {
    youtube: {
      playerVars: {
        autoplay: 0,
        controls: 0
      }
    }
  }

  const $bgPlayer = useRef(null);
  const $buttonsPlayer = useRef(null);
  const $player = useRef(null);
  const $playButton = useRef(null);
  const $soundBar = useRef(null);
  const $muteButton = useRef(null);

  useEffect(() => {
    $bgPlayer.current.addEventListener('load', resizePlayer);
    window.addEventListener('load', resizePlayer);
    window.addEventListener('resize', resizePlayer);
  })
  function resizePlayer() {
    const $player = document.querySelector('#player');
    const bottomBtn = (($bgPlayer.current.height / 100) * 7) +
      ((window.innerHeight - $bgPlayer.current.height) / 2);
    $buttonsPlayer.current.style = `bottom: ${bottomBtn}px`;
    $player.style = `width:${($bgPlayer.current.width / 100) * 55}px;
     height:${($bgPlayer.current.height / 100) * 67}px;`;
  }

  function buttonsAction(command) {
    const actionsList = $player.current.player.player.player;
    
    const actions = {
      Play() {
        const btn = $playButton.current;
        if (btn.alt === "button Play") {
          actionsList.playVideo()
          btn.src = btnPause;
          return btn.alt = "button Pause";
        }
        actionsList.pauseVideo();
        btn.src = btnPlay;
        return $playButton.current.alt = "button Play";
      },
      REW() {
        const now = actionsList.getCurrentTime();
        actionsList.seekTo(now - 10);
      },
      FFWD() {
        const now = actionsList.getCurrentTime();
        actionsList.seekTo(now + 10);
      },
      Mute() {
        if (actionsList.isMuted() === false){
          $muteButton.current.src = btnMute;
          return actionsList.mute();
        }
        $muteButton.current.src = btnSound;   
        actionsList.unMute();
      },
      Volume() {
        const volume = $soundBar.current.value;
        actionsList.setVolume(volume);
        if(actionsList.isMuted() === false)
        return volume == 0 ? $muteButton.current.src = btnMute :
        $muteButton.current.src = btnSound;
      }
    }
    const action = actions[command];
    return action();
  }

  return (
    <>
      <Header />
      <main className={styles.containerPlayer}>
        <ReactPlayer
          ref={$player}
          id="player"
          className={styles.ReactPlayer}
          url={`https://www.youtube.com/watch?v=${query.id}`}
          config={options}
          onReady={()=>{buttonsAction("Volume")}}
        />
        <div ref={$buttonsPlayer} className={styles.buttonsPlayer}>
          <img ref={$playButton} onClick={() => { buttonsAction("Play") }} src={btnPlay} alt="button Play" />
          <img onClick={() => { buttonsAction("REW") }} src={btnREW} alt="button REW" />
          <img onClick={() => { buttonsAction("FFWD") }} src={btnFFWD} alt="button FFWD" />
          <Link href="/videos">
            <img src={btnEject} alt="button Eject" />
          </Link>
          <img ref={$muteButton} onClick={() => { buttonsAction("Mute") }} src={btnSound} alt="button Mute" />
          <input ref={$soundBar} onClick={()=>{ buttonsAction("Volume") }} type="range" min="0" max="100" defaultValue="100" />
        </div>
        <img src={shelfBottom} className={styles.bgPlayer} ref={$bgPlayer} alt="background player" />
      </main>
    </>
  )
}

player.getInitialProps = ({ query }) => {
  return { query };
}

export default player;