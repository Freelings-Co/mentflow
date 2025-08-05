import { useEffect, useState } from 'react'
import {
  Shield,
  Heart,
  Users,
  Clock,
  Star,
  CheckCircle,
  MessageSquare,
  Video,
  Globe,
  Award,
  Smartphone,
  ArrowRight,
  Play,
  Menu,
  X,
} from 'lucide-react'

import Reveal from '../components/Reveal'
import '../pages/Landing.css'
import Logo from '../assets/full-logo.webp'
import Design1 from '../assets/design1.webp'
import Banner from '../assets/banner1.webp'
import Service1 from '../assets/service1.webp'
import Service2 from '../assets/service2.webp'
import Design2 from '../assets/design2.webp'
import { ArrowRightIcon } from '@phosphor-icons/react'


const MentFlowLanding = () => {
  const [contato, setContato] = useState({ nome: '', email: '', telefone: '', mensagem: '' })
  const [contatoStatus, setContatoStatus] = useState('')

  // Gera link do WhatsApp com mensagem preenchida
  const whatsappLink = `https://wa.me/SEUNUMERO?text=${encodeURIComponent(
    `Nome: ${contato.nome}\nEmail: ${contato.email}\nTelefone: ${contato.telefone}\nMensagem: ${contato.mensagem}`
  )}`

  const handleContatoChange = (e) => {
    const { name, value } = e.target
    setContato((prev) => ({ ...prev, [name]: value }))
  }

  // Placeholder para lógica de envio por email (ex: EmailJS ou backend)
  const handleContatoSubmit = async (e) => {
    e.preventDefault()
    setContatoStatus('Enviando...')
    try {
      // Aqui você pode integrar com EmailJS, Formspree ou seu backend
      // Exemplo com EmailJS:
      // await emailjs.send(/* ... */)
      setTimeout(() => {
        setContatoStatus('Mensagem enviada com sucesso!')
        setContato({ nome: '', email: '', telefone: '', mensagem: '' })
      }, 1200)
    } catch (error) {
      setContatoStatus('Erro ao enviar. Tente novamente.')
    }
  }

  const [headerVisible, setHeaderVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setHeaderVisible(scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const steps = [
    {
      number: 1,
      title: '01. Cadastro Personalizado',
      description:
        'Conte sua história e preferências para encontrarmos o terapeuta ideal para você.',
    },
    {
      number: 2,
      title: '02. Match Inteligente',
      description:
        'Nossa plataforma conecta você ao profissional que melhor se alinha com suas necessidades.',
    },
    {
      number: 3,
      title: '03. Sessões Flexíveis',
      description:
        'Agende sessões no horário que funciona para você, com total flexibilidade.',
    },
  ]

  const benefits = [
    {
      icon: Shield,
      title: '100% Seguro',
      description: 'Plataforma segura e confidencial',
    },
    {
      icon: Clock,
      title: 'Horários Flexíveis',
      description: 'Agende conforme sua agenda',
    },
    {
      icon: Globe,
      title: 'Acesso Global',
      description: 'Atendimento em qualquer lugar',
    },
    {
      icon: Heart,
      title: 'Cuidado Humanizado',
      description: 'Profissionais dedicados',
    },
    {
      icon: Award,
      title: 'Profissionais Qualificados',
      description: 'Psicólogos certificados',
    },
    {
      icon: Smartphone,
      title: 'Fácil de Usar',
      description: 'Interface intuitiva',
    },
  ]

  const services = [
    {
      icon: MessageSquare,
      title: 'Terapia Online',
      description: 'Sessões de terapia por vídeo, áudio ou chat.',
      image: Service1
    },
    {
      icon: Video,
      title: 'Conteúdo Exclusivo',
      description: 'Acesso a workshops e materiais de autoconhecimento.',
      image: Service2
    },
    {
      icon: Users,
      title: 'Terapia em Grupo',
      description: 'Participe de sessões em grupo e compartilhe experiências.',
      image: Service1
    },
  ]

  const targetAudiences = [
    {
      icon: CheckCircle,
      text: 'Pessoas que querem cuidar da saúde mental com flexibilidade e segurança.',
    },
    {
      icon: CheckCircle,
      text: 'Quem busca um profissional qualificado que se encaixe em suas necessidades.',
    },
    {
      icon: CheckCircle,
      text: 'Indivíduos que preferem a conveniência de sessões online.',
    },
    {
      icon: CheckCircle,
      text: 'Quem valoriza um ambiente confidencial e acolhedor para o tratamento.',
    },
  ]

  const testimonials = [
    {
      author: 'Ana Silva',
      role: 'Cliente Satisfeita',
      content:
        'A MentFlow mudou minha vida. Encontrei um terapeuta incrível que realmente me entende. A plataforma é fácil de usar e as sessões online são muito convenientes.',
      stars: 5,
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      author: 'Carlos Souza',
      role: 'Cliente Satisfeito',
      content:
        'Estava cético no início, mas a experiência superou minhas expectativas. O processo de match foi rápido e eficiente, e meu terapeuta é excelente. Recomendo a todos!',
      stars: 5,
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    {
      author: 'Mariana Lima',
      role: 'Cliente Satisfeita',
      content:
        'Finalmente encontrei uma forma de cuidar da minha saúde mental que se encaixa na minha rotina. A flexibilidade de horários é um grande diferencial. Estou muito feliz!',
      stars: 5,
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
  ]

  return (
    <div className='landing-page'>
      {/* Header */}
      <header className={`header ${headerVisible ? 'visible' : ''}`}>
        <div className='container'>
          <div className='header-content'>
            <img src={Logo} className='logo' alt="" />
            {/* <a href='#' className='logo'>
              MentFlow
            </a> */}
            <nav className='desktop-nav'>
              <ul className='nav-menu'>
                <li>
                  <a href='#como-funciona' className='nav-link'>
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a href='#servicos' className='nav-link'>
                    Serviços
                  </a>
                </li>
                <li>
                  <a href='#depoimentos' className='nav-link'>
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href='#contato' className='nav-link'>
                    Contato
                  </a>
                </li>
              </ul>
            </nav>
            <div className='header-actions'>
              <a href='#agendar' className='cta-button'>
                Agendar Consulta
              </a>
              <button className='mobile-menu-toggle' onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <nav className='mobile-nav'>
            <ul className='mobile-nav-menu'>
              <li>
                <a
                  href='#como-funciona'
                  className='mobile-nav-link'
                  onClick={closeMobileMenu}
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href='#servicos'
                  className='mobile-nav-link'
                  onClick={closeMobileMenu}
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href='#depoimentos'
                  className='mobile-nav-link'
                  onClick={closeMobileMenu}
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href='#contato'
                  className='mobile-nav-link'
                  onClick={closeMobileMenu}
                >
                  Contato
                </a>
              </li>
            </ul>
            <a
              href='#agendar'
              className='mobile-cta-button'
              onClick={closeMobileMenu}
            >
              Agendar Consulta
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className='hero'>
        <img src={Banner} alt='' />

      </section>

      {/* Como Funciona */}
      <Reveal>
        <section className='section-how-it-works' id='como-funciona'>

          <div className='how-works-image-box'>
            <img src={Design1} alt="" />
          </div>
          <div className='container'>
            <div className='section-header' id='how-works-header'>
              <div className='section-badge'><h1>Como Funciona?</h1></div>
              <h2 className='section-title'>Simples, rápido e eficaz</h2>
              <p className='section-subtitle'>
                Em apenas 3 passos você está conectado ao profissional ideal
                para sua jornada
              </p>
            </div>
            <div className='steps-grid'>
              {steps.map((step, index) => (
                <Reveal key={index}>
                  <div className='step-card'>
                    {/* <div className='step-number'>{step.number}</div> */}
                    <div className='step-texts'>
                      <h3 className='step-title'>{step.title}</h3>
                      <p className='step-description'>{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Benefícios */}
      <Reveal>
        <section className='section-benefits'>
          <div className='section benefits'>
            <div className='section-header'>
              <div className='section-badge'><h1>Benefícios</h1></div>
              <h2 className='section-title'>Por que escolher a MentFlow?</h2>
              <p className='section-subtitle'>
                Oferecemos uma experiência única em terapia online
              </p>
            </div>
            <div className='benefits-grid'>
              {benefits.map((benefit, index) => (
                <Reveal key={index}>
                  <div className='benefit-card'>
                    <div className='benefit-icon'>
                      <benefit.icon size={24} />
                    </div>
                    <h3 className='benefit-title'>{benefit.title}</h3>
                    <p className='benefit-description'>{benefit.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Missão, Visão e Valores */}
      <Reveal>
        <section className='section-mvv'>
          <div className='container'>
            <div className='section-header'>
              <div className='section-badge'><h1>Missão, Visão e Valores</h1></div>
              <h2 className='section-title'>Nossa Essência</h2>
              <p className='section-subtitle'>Conheça o que nos move e orienta!</p>
            </div>
            <div className='mvv-grid'>
              <div className='mvv-card'>
                <h3 className='mvv-title'>Missão</h3>
                <p className='mvv-text'>Cuidar da saúde mental se torna “protagonista” para viver bem e ter qualidade de vida. O caminho que se torna dia após dia... diretamente no seu crescimento pessoal e profissional.<br/><br/>A busca por autoconhecimento e autoconsciência contribuem para percepção de desequilíbrios psíquicos, possibilitando equilíbrio emocional.<br/><br/>Na pirâmide da inteligência emocional, existem escalas a serem percorridas e, ao buscar ajuda profissional, o processo é facilitado sendo possível identificar bloqueios emocionais que o impede de evoluir no âmbito laboral e acadêmico.</p>
              </div>
              <div className='mvv-card'>
                <h3 className='mvv-title'>Visão</h3>
                <p className='mvv-text'>“Busca-se ser referência no cuidado com a saúde emocional, conectando pessoas a uma rede confiável com profissionais parceiros, especializados, competentes e humanizados.<br/><br/>Com base na dedicação, persistência e constância, acreditamos que até 2030 estaremos bem consolidados no mercado.”</p>
              </div>
              <div className='mvv-card'>
                <h3 className='mvv-title'>Valores</h3>
                <p className='mvv-text'>Ética e confidencialidade, acolhimento e excelência, empatia, respeito à diversidade, atuação baseada em evidências, compromisso com resultados e inovação, além de espírito investigativo, com equipe ética e motivada sempre.</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Serviços */}
      <Reveal>
        <section className='section services' id='servicos'>
          <div className='container'>
            <div className='section-header'>
              <div className='section-badge'><h1>Serviços</h1></div>
              <h2 className='section-title'>Nossos serviços especializados</h2>
              <p className='section-subtitle'>
                Diferentes modalidades para atender suas necessidades
                específicas
              </p>
            </div>
            <div className='services-grid'>
              {services.map((service, index) => (
                <Reveal key={index}>
                  <div className='service-card'>
                    <div className='service-card-title'>
                      <div className='service-icon'>
                        <service.icon size={24} />
                      </div>
                      <h3 className='service-title'>{service.title}</h3>
                    </div>
                    <img src={service.image} className='service-image' alt="" />
                    <p className='service-description'>{service.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Para Quem */}
      <Reveal>
        <section className='section target-audience'>
          <div className='container'>
            <div className='audience-grid'>
              <div className='audience-content'>
                <div className='section-badge'><h1 className='audience-badge'>Para Quem?</h1></div>
                <h2 className='section-title' id='audience-title'>Ideal para você que busca:</h2>
                <ul className='audience-list'>
                  {targetAudiences.map((audience, index) => (
                    <Reveal key={index}>
                      <li className='audience-item'>
                        <div className='audience-icon'>
                          <audience.icon size={20} />
                        </div>
                        <span className='audience-text'>{audience.text}</span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
              <Reveal>
                <div className='audience-image'>
                  <img
                    src={Design2}
                    alt='Pessoa em terapia'
                    className='audience-image-main'
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Depoimentos */}
      <Reveal>
        <section className='section testimonials' id='depoimentos'>
          <div className='container'>
            <div className='section-header'>
              <div className='section-badge'><h1>Depoimentos</h1></div>
              <h2 className='section-title'>O que nossos pacientes dizem</h2>
              <p className='section-subtitle'>
                Histórias reais de transformação e crescimento
              </p>
            </div>
            <div className='testimonials-grid'>
              {testimonials.map((testimonial, index) => (
                <Reveal key={index}>
                  <div className='testimonial-card'>
                    <p className='testimonial-content'>{testimonial.content}</p>
                    <div className='testimonial-author'>
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className='testimonial-avatar'
                      />
                      <div className='testimonial-info'>
                        <div className='testimonial-name'>
                          {testimonial.author}
                        </div>
                        <div className='testimonial-role'>
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Contato */}
      <Reveal>
        <section className='section contato' id='contato'>
          <div className='container'>
            <div className='section-header'>
              <div className='section-badge'><h1>Contato</h1></div>
              <h2 className='section-title'>Fale conosco</h2>
              <p className='section-subtitle'>Tire suas dúvidas, envie sugestões ou solicite informações.</p>
            </div>
            <form className='contato-form' onSubmit={handleContatoSubmit}>
              <div className='form-group'>
                <label htmlFor='nome'>Nome</label>
                <input type='text' id='nome' name='nome' value={contato.nome} onChange={handleContatoChange} required />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' value={contato.email} onChange={handleContatoChange} required />
              </div>
              <div className='form-group'>
                <label htmlFor='telefone'>Telefone</label>
                <input type='tel' id='telefone' name='telefone' value={contato.telefone} onChange={handleContatoChange} />
              </div>
              <div className='form-group'>
                <label htmlFor='mensagem'>Dúvida ou Sugestão</label>
                <textarea id='mensagem' name='mensagem' value={contato.mensagem} onChange={handleContatoChange} required />
              </div>
              <div className='contato-actions'>
                <button type='submit' className='cta-button'>Enviar por Email</button>
                <a href={whatsappLink} target='_blank' rel='noopener noreferrer' className='cta-button whatsapp-btn'>Enviar pelo WhatsApp</a>
              </div>
              {contatoStatus && <div className='contato-status'>{contatoStatus}</div>}
            </form>
          </div>
        </section>
      </Reveal>

      {/* CTA Final */}
      <Reveal>
        <section className='cta-final'>
          <div className='container'>
            <div className='cta-content'>
              <h2 className='cta-title'>Pronto para começar sua jornada?</h2>
              <p className='cta-subtitle'>
                Não espere mais. Sua saúde mental merece cuidado profissional e
                personalizado.
              </p>
              <a href='#agendar' className='cta-button-large'>
                Agendar Primeira Consulta
                <ArrowRightIcon size={32} weight='bold' />
              </a>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  )
}

export default MentFlowLanding
