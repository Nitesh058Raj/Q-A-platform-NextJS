import Link from 'next/link'
import styles from './header.module.css'

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.bars}></div>
      <ul className={styles.ultext}>
        
        <li>
        <div className={styles.Link}><Link href="/" > New Quetion</Link> </div>
        </li>
        <li>
        <div className={styles.Link}> <Link href="/contectus"> Contect Us</Link></div>
        </li>
  
      </ul>
    </nav>
  )
}