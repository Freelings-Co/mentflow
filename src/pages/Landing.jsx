import { useEffect, useState } from 'react'
import {
  Shield,
  Heart,
  Users,
  Clock,
  CheckCircle,
  ChevronDown,
  MessageSquare,
  Video,
  Globe,
  Award,
  Smartphone,
  Menu,
  X,
  Star,
  Stethoscope,
  DollarSign,
  Calendar,
  ArrowLeft,
  User,
  GraduationCap
} from 'lucide-react'


import JanaRibas from '../assets/lgbtw.webp'
import CarlosSouza from '../assets/carlos-souza.webp'
import MarianaLima from '../assets/mariana-lima.webp'
import LiviaMoreira from '../assets/livia-moreira.webp'
import CarlosSantos from '../assets/carlos-santos.webp'
import MariaCosta from '../assets/maria-costa.webp'

import Reveal from '../components/Reveal'
import '../pages/Landing.css'
import '../styles/dropdown-menu.css'
import Logo from '../assets/full-logo.webp'
import Design1 from '../assets/design1.webp'
import Banner from '../assets/banner1.webp'
import Service1 from '../assets/service1.webp'
import Service2 from '../assets/service2.webp'
import Service3 from '../assets/service3.webp'
import Design2 from '../assets/design2.webp'
import { ArrowRightIcon, Target, Brain, Eye } from '@phosphor-icons/react'


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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setHeaderVisible(scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Adicione este useEffect após os outros useEffects existentes:

  // Adicione este useEffect após os outros useEffects existentes
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setIsDropdownOpen(false); // Também fecha o dropdown
  }
  const steps = [
    {
      number: 1,
      title: '01. Cadastro Personalizado',
      description:
        'Selecione o que faz sentido para você e encontre o profissional ideal.',
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
      image: Service3
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
      author: 'Jana Ribas',
      role: 'Designer gráfica',
      content: `" Sempre procurei um espaço onde eu pudesse ser ouvida de verdade, sem julgamentos. Aqui encontrei um terapeuta que me entende, me respeita e me ajuda a crescer como pessoa e profissional. A plataforma é prática, fácil de usar! "`,
      stars: 5,
      avatar: JanaRibas,
    },
    {
      author: 'Enzo Schulz',
      role: 'Consultor imobiliário',
      content:
        `" Confesso que estava bem cético no começo, mas a MentFlow superou minhas expectativas. O processo de match foi rápido, encontrei um terapeuta incrível e as sessões têm feito muita diferença pra mim. Hoje recomendo de olhos fechados. "`,
      stars: 5,
      avatar: CarlosSouza,
    },
    {
      author: 'Mariana Pedrozo',
      role: 'Gestora de RH',
      content:
        `" Finalmente encontrei uma forma prática e consistente de cuidar da minha saúde mental. A flexibilidade de horários fez toda a diferença para equilibrar minhas responsabilidades do dia a dia. Me sinto muito mais feliz e em equilíbrio desde que comecei. "`,
      stars: 5,
      avatar: MarianaLima,
    },
  ]

  return (
    <div className='landing-page'>
      {/* Header */}
      <header className={`header ${headerVisible ? 'visible' : ''}`}>
        <div className='container'>
          <div className='header-content'>
            <img src={Logo} className='logo' alt="" />

            <nav className='desktop-nav'>
              <ul className='nav-menu'>
                <li><a href="#" className="nav-link">Início</a></li>

                <li className="nav-dropdown">
                  <button
                    className="nav-link dropdown-trigger"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    Conhecer
                    <ChevronDown
                      size={16}
                      className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}
                    />
                  </button>

                  <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                    <a href="#como-funciona" className="dropdown-link" onClick={() => setIsDropdownOpen(false)}>
                      Como Funciona
                    </a>
                    <a href="#benefits-section" className="dropdown-link" onClick={() => setIsDropdownOpen(false)}>
                      Benefícios
                    </a>
                    <a href="#profissionais" className="dropdown-link" onClick={() => setIsDropdownOpen(false)}>
                      Especialistas
                    </a>
                    <a href="#section-mvv" className="dropdown-link" onClick={() => setIsDropdownOpen(false)}>
                      Nossa Essência
                    </a>
                    <a href="#servicos" className="dropdown-link" onClick={() => setIsDropdownOpen(false)}>
                      Serviços
                    </a>
                    <a href="#para-quem-section" className="dropdown-link" onClick={() => setIsDropdownOpen(false)}>
                      Para Quem
                    </a>
                    <a href="#depoimentos" className="dropdown-link" onClick={() => setIsDropdownOpen(false)}>
                      Depoimentos
                    </a>
                    <a href="#contato" className="dropdown-link" onClick={() => setIsDropdownOpen(false)}>
                      Contato
                    </a>
                  </div>
                </li>

                <li><a href="/especialistas" className="nav-link">Para Especialistas</a></li>
                <li><a href="/empresas" className="nav-link">Para Empresas</a></li>
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

              <li className="mobile-dropdown">
                <button
                  className="mobile-nav-link dropdown-trigger-mobile"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Conhecer
                  <ChevronDown
                    size={16}
                    className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}
                  />
                </button>
                <div className={`mobile-dropdown-content ${isDropdownOpen ? 'open' : ''}`}>
                  <a
                    href="#como-funciona"
                    className="mobile-dropdown-link"
                    onClick={(e) => {
                      closeMobileMenu();
                      setIsDropdownOpen(false);
                    }}
                  >
                    Como Funciona
                  </a>
                  <a
                    href="#benefits-section"
                    className="mobile-dropdown-link"
                    onClick={(e) => {
                      closeMobileMenu();
                      setIsDropdownOpen(false);
                    }}
                  >
                    Benefícios
                  </a>
                  <a
                    href="#profissionais"
                    className="mobile-dropdown-link"
                    onClick={(e) => {
                      closeMobileMenu();
                      setIsDropdownOpen(false);
                    }}
                  >
                    Nossos Especialistas
                  </a>

                  <a
                    href="#section-mvv"
                    className="mobile-dropdown-link"
                    onClick={(e) => {
                      closeMobileMenu();
                      setIsDropdownOpen(false);
                    }}
                  >
                    Nossa Essência
                  </a>

                  <a
                    href="#servicos"
                    className="mobile-dropdown-link"
                    onClick={(e) => {
                      closeMobileMenu();
                      setIsDropdownOpen(false);
                    }}
                  >
                    Serviços
                  </a>
                  <a
                    href="#para-quem-section"
                    className="mobile-dropdown-link"
                    onClick={(e) => {
                      closeMobileMenu();
                      setIsDropdownOpen(false);
                    }}
                  >
                    Para Quem
                  </a>

                  <a
                    href="#depoimentos"
                    className="mobile-dropdown-link"
                    onClick={(e) => {
                      closeMobileMenu();
                      setIsDropdownOpen(false);
                    }}
                  >
                    Depoimentos
                  </a>
                  <a
                    href="#contato"
                    className="mobile-dropdown-link"
                    onClick={(e) => {
                      closeMobileMenu();
                      setIsDropdownOpen(false);
                    }}
                  >
                    Contato
                  </a>
                </div>
              </li>
              <li>
                <a href="#" className="mobile-nav-link" onClick={closeMobileMenu}>
                  Início
                </a>
              </li>

              <li>
                <a href="/especialistas" className="mobile-nav-link" onClick={closeMobileMenu}>
                  Para Especialistas
                </a>
              </li>

              <li>
                <a href="/empresas" className="mobile-nav-link" onClick={closeMobileMenu}>
                  Para Empresas
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
        <section className='section-benefits' id='benefits-section'>
          <div className='section benefits'>
            <div className='section-header'>
              <div className='section-badge' id='title-benefits'><h1>Benefícios</h1></div>
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

      {/* Seção de Profissionais */}
      <section className="section profissionais" id="profissionais">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              {/* <h2>
                <span className="section-icon">
                  <Users className="icon" />
                </span>
                Nossos Especialistas
              </h2> */}
              <div className='section-badge'><h1>Nossos Especialistas</h1></div>
            </div>
            <p className="section-subtitle">
              Conecte-se com profissionais qualificados e transforme sua jornada de bem-estar mental
            </p>
          </div>

          <div className="profissionais-grid">
            {[
              {
                id: 1,
                nome: "Dra. Lívia Moreira",
                especialidade: "Psicóloga Clínica",
                imagem: LiviaMoreira,
                rating: 5.0,
                reviews: 127,
                valor: "R$ 120",
                status: "Seg à Sexta",
                badge: "Mais Procurada",
                linkAgendamento: "https://agendarconsulta.com/new/perfil/sr-livia-moreira-1757694224#location",
                descricao: "Especialista em terapia cognitivo-comportamental com mais de 7 anos de experiência. Atua principalmente com ansiedade, depressão e transtornos do humor, oferecendo um ambiente acolhedor e técnicas comprovadas para o desenvolvimento pessoal.",
                formacao: "CRP 1110799 • Pós graduação em Psicologia Aplicada - Universidade do Minho",
                especialidades: ["Ansiedade", "Depressão", "TCC", "Terapia de Casal"],
                metodologia: "Abordagem humanizada focada no autoconhecimento e desenvolvimento de estratégias práticas para o dia a dia.",
                experiencia: "7+ anos",
                sessoes: "500+ sessões"
              },
              {
                id: 2,
                nome: "Dr. Carlos Santos",
                especialidade: "Psiquiatra",
                imagem: CarlosSantos,
                rating: 4.8,
                reviews: 89,
                valor: "R$ 200",
                status: "Diariamente",
                badge: "Novo",
                descricao: "Médico psiquiatra com especialização em transtornos de ansiedade e medicina do sono. Combina tratamento medicamentoso com terapia, oferecendo uma abordagem integrada e personalizada para cada paciente.",
                formacao: "CRM 12345 • Residência em Psiquiatria UNIFESP",
                especialidades: ["Ansiedade", "Insônia", "Bipolaridade", "TDAH"],
                metodologia: "Tratamento integrado combinando medicação quando necessário com técnicas terapêuticas modernas.",
                experiencia: "8+ anos",
                sessoes: "300+ consultas"
              },
              {
                id: 3,
                nome: "Dra. Maria Costa",
                especialidade: "Terapeuta Familiar",
                imagem: MariaCosta,
                rating: 4.9,
                reviews: 156,
                valor: "R$ 150",
                status: "Seg à Sexta",
                badge: "",
                descricao: "Especialista em terapia familiar e de casal, com foco em comunicação e resolução de conflitos. Atendimento presencial e online, trabalhando com dinâmicas familiares e fortalecimento de vínculos.",
                formacao: "CRP 06/67890 • Especialização em Terapia Sistêmica",
                especialidades: ["Terapia Familiar", "Terapia de Casal", "Adolescentes", "Comunicação"],
                metodologia: "Abordagem sistêmica que trabalha as relações familiares de forma integrada e colaborativa.",
                experiencia: "12+ anos",
                sessoes: "800+ sessões"
              }
            ].map((profissional, index) => (
              <div key={profissional.id} className={`profissional-card reveal`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="card-container">
                  <div className="card-flipper" id={`card-${profissional.id}`}>
                    {/* Lado Frontal */}
                    <div className="card-front">
                      {profissional.badge && (
                        <div className="profissional-badge">
                          <Award className="badge-icon" />
                          {profissional.badge}
                        </div>
                      )}

                      <div className="profissional-image-container">
                        <img
                          src={profissional.imagem}
                          alt={profissional.nome}
                          className="profissional-image"
                        />
                        <div className="status-indicator">
                          <div className="status-dot"></div>
                        </div>
                        <div className="image-overlay">
                          <div className="rating-overlay">
                            <Star className="star-icon filled" />
                            <span>{profissional.rating}</span>
                          </div>
                        </div>
                      </div>

                      <div className="profissional-content">
                        <div className="profissional-header">
                          <h3 className="profissional-nome">{profissional.nome}</h3>
                          <p className="profissional-especialidade">
                            <Stethoscope className="especialidade-icon" />
                            {profissional.especialidade}
                          </p>
                        </div>

                        <div className="profissional-stats">
                          <div className="stat-item">
                            <DollarSign className="stat-icon" />
                            <span>{profissional.valor}/sessão</span>
                          </div>
                          <div className="stat-item status-available">
                            <Clock className="stat-icon" />
                            <span>{profissional.status}</span>
                          </div>
                        </div>

                        <div className="profissional-rating-full">
                          <div className="stars">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`star ${i < Math.floor(profissional.rating) ? 'filled' : ''}`} />
                            ))}
                          </div>
                          <span className="rating-text">({profissional.reviews} avaliações)</span>
                        </div>
                      </div>

                      <div className="profissional-actions">
                        <button className="btn-primary btn-agendar" onClick={() => window.open(profissional.linkAgendamento, '_blank')}>
                          <Calendar className="btn-icon" />
                          Marcar Consulta
                        </button>
                        <button
                          className="btn-secondary btn-ver-mais"
                          onClick={() => {
                            const flipper = document.getElementById(`card-${profissional.id}`);
                            flipper.classList.add('flipped');
                          }}
                        >
                          <Eye className="btn-icon" />
                          Ver Mais
                        </button>
                      </div>
                    </div>

                    {/* Lado Traseiro */}
                    <div className="card-back">
                      <div className="card-back-content">
                        <button
                          className="btn-voltar"
                          onClick={() => {
                            const flipper = document.getElementById(`card-${profissional.id}`);
                            flipper.classList.remove('flipped');
                          }}
                        >
                          <ArrowLeft className="btn-icon" />
                          Voltar
                        </button>

                        <div className="profissional-detalhes">
                          <div className="detalhe-header">
                            <img
                              src={profissional.imagem}
                              alt={profissional.nome}
                              className="avatar-small"
                            />
                            <div>
                              <h3>{profissional.nome}</h3>
                              <p>{profissional.especialidade}</p>
                            </div>
                          </div>

                          <div className="detalhe-section">
                            <h4>
                              <User className="section-icon" />
                              Sobre o Profissional
                            </h4>
                            <p>{profissional.descricao}</p>
                          </div>

                          <div className="detalhe-section">
                            <h4>
                              <GraduationCap className="section-icon" />
                              Formação
                            </h4>
                            <p>{profissional.formacao}</p>
                          </div>

                          <div className="detalhe-stats">
                            <div className="stat-card">
                              <Calendar className="stat-card-icon" />
                              <span>{profissional.experiencia}</span>
                              <small>Experiência</small>
                            </div>
                            <div className="stat-card">
                              <Users className="stat-card-icon" />
                              <span>{profissional.sessoes}</span>
                              <small>Realizadas</small>
                            </div>
                          </div>

                          <div className="detalhe-section">
                            <h4>
                              <Target className="section-icon" />
                              Especialidades
                            </h4>
                            <div className="especialidades-tags">
                              {profissional.especialidades.map((esp, i) => (
                                <span key={i} className="especialidade-tag">
                                  <CheckCircle className="tag-icon" />
                                  {esp}
                                </span>
                              ))}
                            </div>
                          </div>

                          <button className="btn-primary btn-agendar-back" onClick={() => window.open(profissional.linkAgendamento, '_blank')}>
                            <Calendar className="btn-icon" />
                            Agendar Consulta
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <Reveal>
        <section className='section-mvv' id='section-mvv'>
          <div className='container'>
            <div className='section-header'>
              <div className='section-badge'><h1>Missão, Visão e Valores</h1></div>
              <h2 className='section-title'>Nossa Essência</h2>
              <p className='section-subtitle'>Conheça o que nos move e orienta!</p>
            </div>
            <div className='mvv-grid'>
              <div className='mvv-card'>
                <div className='mvv-icon'><Target size={50} /></div>
                <h3 className='mvv-title'>Missão</h3>
                <input type="checkbox" id="mvv-missao-toggle" className="mvv-toggle" />
                <div className="mvv-text-wrapper">
                  <p className="mvv-text mvv-text-truncada">
                    Promover o equilíbrio emocional e o bem-estar, impulsionando o crescimento pessoal e profissional.

                  </p>

                </div>
              </div>
              <div className='mvv-card'>
                <div className='mvv-icon'><Eye size={36} /></div>
                <h3 className='mvv-title'>Visão</h3>
                <input type="checkbox" id="mvv-visao-toggle" className="mvv-toggle" />
                <div className="mvv-text-wrapper">
                  <p className="mvv-text mvv-text-truncada">
                    Ser referência no cuidado da saúde emocional, conectando pessoas a profissionais confiáveis, especializados e humanizados.


                  </p>

                </div>
              </div>
              <div className='mvv-card'>
                <div className='mvv-icon'><Brain size={36} /></div>
                <h3 className='mvv-title'>Valores</h3>
                <input type="checkbox" id="mvv-valores-toggle" className="mvv-toggle" />
                <div className="mvv-text-wrapper">
                  <p className="mvv-text mvv-text-truncada">
                    Ética e sigilo, acolhimento de verdade, respeito à diversidade, ciência que faz a diferença e inovação constante, tudo para transformar sua saúde emocional.

                  </p>

                </div>
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
        <section className='section target-audience' id='para-quem-section'>
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
      {/* <Reveal>
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
      </Reveal> */}
    </div>
  )
}

export default MentFlowLanding
