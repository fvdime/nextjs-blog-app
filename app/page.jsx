import Image from 'next/image'
import hero from 'public/hero.png'
import styles from './page.module.css'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea inti Reality. We bring together the teams from the global tech industry.
        </p>
        <Button url='/portfolio' text="See Our Works"/>
      </div>
      <div className={styles.item}>
        <Image src={hero} alt="" className={styles.image} />
      </div>
    </div>  
  )
}
