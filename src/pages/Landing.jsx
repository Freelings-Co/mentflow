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
import BannerTest from '../assets/banner-test1.webp'

const MentFlowLanding = () => {
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
      title: 'Cadastro Personalizado',
      description:
        'Conte sua história e preferências para encontrarmos o terapeuta ideal para você.',
    },
    {
      number: 2,
      title: 'Match Inteligente',
      description:
        'Nossa plataforma conecta você ao profissional que melhor se alinha com suas necessidades.',
    },
    {
      number: 3,
      title: 'Sessões Flexíveis',
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
    },
    {
      icon: Video,
      title: 'Conteúdo Exclusivo',
      description: 'Acesso a workshops e materiais de autoconhecimento.',
    },
    {
      icon: Users,
      title: 'Terapia em Grupo',
      description: 'Participe de sessões em grupo e compartilhe experiências.',
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
            <a href='#' className='logo'>
              MentFlow
            </a>
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
        <div className='box-image'>
          <img src={BannerTest} alt='' />
        </div>

        {/* <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <div className="hero-badge">✨ Sua jornada de bem-estar começa aqui</div>
                            <h1 className="hero-title">
                                Conecte-se com o <span className="highlight">terapeuta ideal</span> para você
                            </h1>
                            <p className="hero-subtitle">
                                Plataforma que conecta você aos melhores profissionais de saúde mental, 
                                com flexibilidade total e cuidado personalizado para sua jornada de autoconhecimento.
                            </p>
                            <div className="hero-actions">
                                <a href="#agendar" className="cta-button-large">
                                    Começar Agora
                                    <ArrowRight size={20} />
                                </a>
                                <a href="#como-funciona" className="cta-button-secondary">
                                    <Play size={18} />
                                    Como Funciona
                                </a>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img 
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                alt="Pessoa em sessão de terapia online"
                                className="hero-image-main"
                            />
                        </div>
                    </div>
                </div> */}
      </section>

      {/* Como Funciona */}
      <Reveal>
        <section className='section how-it-works' id='como-funciona'>
          <div className='container'>
            <div className='section-header'>
              <div className='section-badge'><h1>Como Funciona</h1></div>
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
                    <div className='step-number'>{step.number}</div>
                    <h3 className='step-title'>{step.title}</h3>
                    <p className='step-description'>{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Benefícios */}
      <Reveal>
        <section className='section benefits'>
          <div className='container'>
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
                    <div className='service-icon'>
                      <service.icon size={24} />
                    </div>
                    <h3 className='service-title'>{service.title}</h3>
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
                <div className='section-badge'><h1>Para Quem?</h1></div>
                <h2 className='section-title'>Ideal para você que busca:</h2>
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
                    src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
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
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  )
}

export default MentFlowLanding
