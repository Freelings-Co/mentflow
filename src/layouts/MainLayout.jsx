import styles from './MainLayout.module.css'

export default function MainLayout({ children }) {
  return (
    <div className={styles.mainLayout}>
      {children}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div>
            <strong>Sobre a MentFlow</strong>
          </div>
          <div className={styles.links}>
            <a href='#'>Termos de Uso</a> |
            <a href='#'>Política de Privacidade</a>
          </div>
          <div className={styles.contact}>
            Contato:{' '}
            <a href='mailto:atendimento@mentflow.com'>
              atendimento@mentflow.com
            </a>
          </div>
          <div className={styles.socials}>
            <a href='#' aria-label='Instagram'>
              Instagram
            </a>{' '}
            |
            <a href='#' aria-label='LinkedIn'>
              LinkedIn
            </a>{' '}
            |
            <a href='#' aria-label='WhatsApp'>
              WhatsApp
            </a>
          </div>
          <div className={styles.copyright}>
            © MentFlow 2025. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
