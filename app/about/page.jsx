import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="https://images.pexels.com/photos/15385906/pexels-photo-15385906/free-photo-of-blurred-woman-face-reflection.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          fill={true}
          alt=''
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>JORDAN ROBSON - PELVIC TRANCE</h1>
          <h2 className={styles.imgDesc}>MIRROR TO THE WORLD, WESTWOOD WORLD</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>WHO WE ARE?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit mollitia repellendus itaque sapiente dicta dolorem asperiores nisi excepturi praesentium, aspernatur sint consectetur facere voluptate incidunt eos aperiam nam esse officiis? <br/> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim excepturi consectetur tenetur. Natus vitae perferendis asperiores temporibus necessitatibus quaerat, doloremque impedit inventore repellendus minus totam deserunt labore dignissimos nostrum sint?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ratione deserunt, dolor, doloremque iusto exercitationem perferendis deleniti quis asperiores ipsam veritatis ullam repellat assumenda velit repellendus. Sequi magnam odio atque.
            <br/>
            <br/> - Creative 
            <br/>
            <br/> - Fast and Mobile 
            <br/>
            <br/> - Dynamic Websites
          </p>
          <Button url='/contact' text="Contact"/>
        </div>
      </div>
    </div> 
  )
}

export default About