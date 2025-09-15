import styles from './MainLayout.module.css'
import { InstagramLogoIcon, LinkedinLogoIcon, WhatsappLogoIcon } from '@phosphor-icons/react'

export default function MainLayout({ children }) {
  return (
    <div className={styles.mainLayout}>
      {children}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div>
            <h3>Sobre a MentFlow</h3>
          </div>
          <div className={styles.links}>
            <a href='#'>Termos de Uso</a> |
            <a href='#'>Política de Privacidade</a>
          </div>
          <div className={styles.contact}>
            Contato:{' '}
            <a href='mailto:atendimento@mentflow.com.br'>
              atendimento@mentflow.com.br
            </a>
          </div>
          <div className={styles.socials}>
          
            <a href='#' aria-label='Instagram'>              
            <InstagramLogoIcon size={40} color='white' />
            </a>
            <a href='#' aria-label='LinkedIn'>
              <LinkedinLogoIcon size={40} color='white' />
            </a>
            <a href='#' aria-label='WhatsApp'>
              <WhatsappLogoIcon size={40} color='white' />
            </a>
          </div>
          <div className={styles.copyright}>
            © MentFlow 2025. Todos os direitos reservados.
            Desenvolvido por <a href='https://freelings.com.br' target='_blank' rel='noopener noreferrer'>Freelings Co</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
