import Link from 'next/link'
import styles from './button.module.css'
import React from 'react'

const Button = ({text, url}) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  )
}

export default Button