import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './Avatar'

import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/104534303?v=4" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Robson</strong>
              <time title="15 de junho de 2022" dateTime="2022-06-15 15:43:38">Cerca de 1h atras</time>
            </div>
            <button title="Deletar comentário"><Trash size={24}/></button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button><ThumbsUp />Aplaudir <span>20</span></button>
        </footer>
      </div>
    </div>
  )
}