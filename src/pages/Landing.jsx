import React, { useState } from 'react'
import {
  Calendar,
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
  Menu,
  X,
} from 'lucide-react'

import '../pages/Landing.css'

const MentFlowLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
      title: 'Terapia Individual',
      description:
        'Sessões personalizadas focadas no seu desenvolvimento pessoal e bem-estar emocional.',
      features: [
        'Sessões 1:1',
        'Plano personalizado',
        'Acompanhamento contínuo',
      ],
    },
    {
      icon: Video,
      title: 'Terapia Online',
      description:
        'Atendimento por videochamada com a mesma qualidade da terapia presencial.',
      features: ['Plataforma segura', 'Gravação opcional', 'Qualidade HD'],
    },
    {
      icon: Users,
      title: 'Terapia em Grupo',
      description:
        'Sessões em grupo para compartilhar experiências e crescer junto com outros.',
      features: ['Grupos temáticos', 'Suporte mútuo', 'Custo reduzido'],
    },
  ]

  const testimonials = [
    {
      content:
        'A MentFlow mudou minha vida. Encontrei uma terapeuta incrível que realmente me entende.',
      author: 'Maria Silva',
      role: 'Designer',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b790?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    },
    {
      content:
        'Flexibilidade total para agendar as sessões. Perfeito para minha rotina corrida.',
      author: 'João Santos',
      role: 'Empresário',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    },
    {
      content:
        'Atendimento de qualidade internacional, mesmo morando fora do Brasil.',
      author: 'Ana Costa',
      role: 'Estudante',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    },
  ]

  const targetAudiences = [
    { icon: Users, text: 'Pessoas com ansiedade e estresse' },
    { icon: Heart, text: 'Quem busca autoconhecimento' },
    { icon: Globe, text: 'Brasileiros no exterior' },
    { icon: Calendar, text: 'Profissionais com agenda apertada' },
  ]

  return (
    <div className='landing-page'>
      {/* Header */}
      <header className='header'>
        <div className='container'>
          <div className='header-content'>
            <a href='#' className='logo'>
              MentFlow
            </a>
            <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
              <ul className='nav-menu'>
                <li>
                  <a
                    href='#como-funciona'
                    className='nav-link'
                    onClick={closeMobileMenu}
                  >
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a
                    href='#servicos'
                    className='nav-link'
                    onClick={closeMobileMenu}
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href='#depoimentos'
                    className='nav-link'
                    onClick={closeMobileMenu}
                  >
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a
                    href='#contato'
                    className='nav-link'
                    onClick={closeMobileMenu}
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </nav>
            <div className='header-actions'>
              <a href='#agendar' className='cta-button'>
                Agendar Consulta
              </a>
              <button
                className='mobile-menu-toggle'
                onClick={toggleMobileMenu}
                aria-label='Toggle menu'
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='hero'>
        <div className='container'>
          <div className='hero-grid'>
            <div className='hero-content'>
              <div className='hero-badge'>✨ Terapia Online de Qualidade</div>
              <h1 className='hero-title'>
                Cuide da sua <span className='highlight'>saúde mental</span> com
                profissionais qualificados
              </h1>
              <p className='hero-subtitle'>
                Conectamos você a psicólogos especialistas através de uma
                plataforma segura, flexível e personalizada para sua jornada de
                bem-estar.
              </p>
              <a href='#agendar' className='hero-cta'>
                Começar Agora
                <ArrowRight size={20} />
              </a>
              <div className='hero-stats'>
                <div className='stat-item'>
                  <span className='stat-number'>500+</span>
                  <span className='stat-label'>Pacientes Atendidos</span>
                </div>
                <div className='stat-item'>
                  <span className='stat-number'>50+</span>
                  <span className='stat-label'>Profissionais</span>
                </div>
                <div className='stat-item'>
                  <span className='stat-number'>4.9</span>
                  <span className='stat-label'>Avaliação</span>
                </div>
              </div>
            </div>
            <div className='hero-image'>
              <img
                src='https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                alt='Profissional de psicologia'
                className='hero-image-main'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className='section how-it-works' id='como-funciona'>
        <div className='container'>
          <div className='section-header'>
            <div className='section-badge'>Como Funciona</div>
            <h2 className='section-title'>Simples, rápido e eficaz</h2>
            <p className='section-subtitle'>
              Em apenas 3 passos você está conectado ao profissional ideal para
              sua jornada
            </p>
          </div>
          <div className='steps-grid'>
            {steps.map((step, index) => (
              <div key={index} className='step-card'>
                <div className='step-number'>{step.number}</div>
                <h3 className='step-title'>{step.title}</h3>
                <p className='step-description'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className='section benefits'>
        <div className='container'>
          <div className='section-header'>
            <div className='section-badge'>Benefícios</div>
            <h2 className='section-title'>Por que escolher a MentFlow?</h2>
            <p className='section-subtitle'>
              Oferecemos uma experiência única em terapia online
            </p>
          </div>
          <div className='benefits-grid'>
            {benefits.map((benefit, index) => (
              <div key={index} className='benefit-card'>
                <div className='benefit-icon'>
                  <benefit.icon size={24} />
                </div>
                <h3 className='benefit-title'>{benefit.title}</h3>
                <p className='benefit-description'>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className='section services' id='servicos'>
        <div className='container'>
          <div className='section-header'>
            <div className='section-badge'>Serviços</div>
            <h2 className='section-title'>Nossos serviços especializados</h2>
            <p className='section-subtitle'>
              Diferentes modalidades para atender suas necessidades específicas
            </p>
          </div>
          <div className='services-grid'>
            {services.map((service, index) => (
              <div key={index} className='service-card'>
                <div className='service-icon'>
                  <service.icon size={24} />
                </div>
                <h3 className='service-title'>{service.title}</h3>
                <p className='service-description'>{service.description}</p>
                <ul className='service-features'>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para Quem */}
      <section className='section target-audience'>
        <div className='container'>
          <div className='audience-grid'>
            <div className='audience-content'>
              <div className='section-badge'>Para Quem</div>
              <h2 className='section-title'>Ideal para você que busca:</h2>
              <ul className='audience-list'>
                {targetAudiences.map((audience, index) => (
                  <li key={index} className='audience-item'>
                    <div className='audience-icon'>
                      <audience.icon size={20} />
                    </div>
                    <span className='audience-text'>{audience.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='audience-image'>
              <img
                src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                alt='Pessoa em terapia'
                className='audience-image-main'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className='section testimonials' id='depoimentos'>
        <div className='container'>
          <div className='section-header'>
            <div className='section-badge'>Depoimentos</div>
            <h2 className='section-title'>O que nossos pacientes dizem</h2>
            <p className='section-subtitle'>
              Histórias reais de transformação e crescimento
            </p>
          </div>
          <div className='testimonials-grid'>
            {testimonials.map((testimonial, index) => (
              <div key={index} className='testimonial-card'>
                <p className='testimonial-content'>{testimonial.content}</p>
                <div className='testimonial-author'>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className='testimonial-avatar'
                  />
                  <div className='testimonial-info'>
                    <div className='testimonial-name'>{testimonial.author}</div>
                    <div className='testimonial-role'>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
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
    </div>
  )
}

export default MentFlowLanding
