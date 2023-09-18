import Image from 'next/image'
import './homeWeather/homeWeather.css'
import HomeWeather from './homeWeather/page'
import styles from './page.module.css'
import Loading from './homeWeather/loading'
import { Suspense } from 'react'


export default function Home() {
  return (
    <div className={styles.home}>
        <div className={styles.dome}></div>
        <div className={styles.tower}>
          <div className={styles.clockback}>
            <div className={styles.clock}>
              <div className={styles.clockFace2}>---&#62;</div>
              <div className={styles.clockFace1}>---&#62;</div>
            </div>
          </div>
        </div>
        <div className={styles.roof}>
          <div className={styles.window1}></div>
          <div className={styles.window2}></div>
          <div className={styles.window3}></div>
        </div>
        <div className={styles.building}></div>
        <Suspense fallback={<Loading/>}>
          <HomeWeather/>
        </Suspense>
      </div>
  )
}
