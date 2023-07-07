import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",  //it is gonna fetch every req
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  }
}

const Blog = async () => {

  const data = await getData()

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
      <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
        <div  className={styles.imageContainer}>
          <Image
            src={item.img}
            alt=''
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.desc}>{item.desc}</div>
        </div>
      </Link>
      ))}
    </div>
  )
}

export default Blog