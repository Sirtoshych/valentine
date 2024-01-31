'use client' 
import Image from "next/image";
import styles from "./page.module.css";
import gif from './kiss.gif'

import localFont from 'next/font/local'
import { useState } from "react";
 
// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './honk.ttf' })

const states = [
  '',
  styles.rotate1,
  styles.rotate2,
  styles.rotate3,
  styles.slide1,
]
export default function Home() {
  const [state, setState] = useState(0);
  const [agreed, setAgreed] = useState(false);

  const handleAccept = () => {
    setAgreed(true)
  }

  const handleReject = () => {
    setState(prev => prev + 1)
  }
  return (
    <main className={`${styles.main} ${myFont.className}`}>
    
        {agreed &&<Image src={gif} alt="my gif" height={200} width={200} className={styles.image}/>}
        {!agreed && <h1 className={`${styles.title}`} style={{textAlign:'center'}}>Arina, {'\n'} Will you be my valentine?</h1>}
        {agreed && <h1 className={`${styles.title} ${styles.image}`} style={{textAlign:'center'}}>Yay, I love You!</h1>}
         <div className={styles.buttons}>
          <button onClick={handleAccept}  className={`${styles.button} ${myFont.className} ${agreed && styles.agreed}`}>
            Yes
          </button>
        {!agreed &&  <button id={'no'} style={{right: 0}} onClick={handleReject} className={`${styles.button} ${myFont.className} ${styles.no} ${states[state]}`}>
            No
          </button>
    }
        </div>
  
    </main>
  );
}
