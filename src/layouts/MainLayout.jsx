import styles from './MainLayout.module.css'
import { InstagramLogoIcon, LinkedinLogoIcon, WhatsappLogoIcon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export default function MainLayout({ children }) {
  return (
    <div className={styles.mainLayout}>
      <div className={styles.pageContent}>
        {children}
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div>
            <h3>Sobre a MentFlow</h3>
          </div>
          <div className={styles.links}>
            <Link to='/termos-de-uso'>Termos de Uso</Link> |
            <Link to='/politica-de-privacidade'>Política de Privacidade</Link>
          </div>
          <div className={styles.contact}>
            Contato:{' '}
            <a href='mailto:atendimento@mentflow.com.br'>
              atendimento@mentflow.com.br
            </a>
          </div>
          <div className={styles.socials}>
          
            <a href='https://instagram.com/mentflow' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>              
              <InstagramLogoIcon size={40} color='white' />
            </a>
            <a href='https://linkedin.com/company/mentflow' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
              <LinkedinLogoIcon size={40} color='white' />
            </a>
            <a href='https://wa.me/558588947255' target='_blank' rel='noopener noreferrer' aria-label='WhatsApp'>
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
