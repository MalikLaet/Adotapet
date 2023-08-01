import React from 'react'
import styles from './ButtonLink.module.css'
import { Link } from 'react-router-dom'

export default function ButtonLink({url,children}) {
  return (
    <Link className={styles.button} to={url}>
            {children}
    </Link>
  )
}
