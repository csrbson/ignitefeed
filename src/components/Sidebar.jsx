import { PencilLine } from 'phosphor-react'

import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/104534303?v=4" />
        <strong>Robson</strong>
        <span>Web Developer</span>        
      </div>
      <footer>
        <a href=""><PencilLine size={20} /> Editar seu perfil</a>
      </footer>
    </aside>
  )
}