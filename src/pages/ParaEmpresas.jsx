import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Shield, UserCheck, CircleCheckBig, Menu, X, ArrowRight, Building2, TrendingUp, Clock, BarChart3, Lock, Star, ChevronDown } from 'lucide-react';
import '../pages/ParaEmpresas.css';
import Logo from '../assets/full-logo.webp';
import Banner from '../assets/banner-empresas.webp'
import { WhatsappLogoIcon } from '@phosphor-icons/react';

const ParaEmpresas = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    empresaNome: '',
    empresaCnpj: '',
    empresaSegmento: '',
    numColaboradores: '',
    empresaCidade: '',
    empresaEstado: '',
    contatoNome: '',
    contatoCargo: '',
    contatoEmail: '',
    contatoTelefone: ''
  });

  const [formStatus, setFormStatus] = useState('');

  // Generate WhatsApp link with form data
  const whatsappLink = `https://wa.me/558588947255?text=${encodeURIComponent(
    `*Nova Solicitação de Proposta*\n\n` +
    `*Dados da Empresa*\n` +
    `Nome: ${formData.empresaNome || 'Não informado'}\n` +
    `CNPJ: ${formData.empresaCnpj || 'Não informado'}\n` +
    `Segmento: ${formData.empresaSegmento || 'Não informado'}\n` +
    `Número de Colaboradores: ${formData.numColaboradores || 'Não informado'}\n` +
    `Cidade/Estado: ${formData.empresaCidade || 'Não informado'}/${formData.empresaEstado || 'Não informado'}\n\n` +
    `*Dados do Responsável*\n` +
    `Nome: ${formData.contatoNome || 'Não informado'}\n` +
    `Cargo: ${formData.contatoCargo || 'Não informado'}\n` +
    `E-mail: ${formData.contatoEmail || 'Não informado'}\n` +
    `Telefone: ${formData.contatoTelefone || 'Não informado'}`
  )}`;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the email body
    const subject = `Nova Solicitação de Empresa - ${formData.empresaNome || 'Sem nome'}`;
    let body = 'Nova solicitação de empresa:\n\n';
    
    // Add all form fields to the email body
    Object.entries(formData).forEach(([key, value]) => {
      if (value && typeof value !== 'object') {
        const label = key
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, str => str.toUpperCase())
          .replace(/Cnpj/g, 'CNPJ')
          .replace(/Qtd/g, 'Quantidade');
        body += `${label}: ${value}\n`;
      } else if (Array.isArray(value)) {
        body += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value.join(', ')}\n`;
      }
    });
    
    // Create mailto link
    const mailtoLink = `mailto:atendimento@mentflow.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Abrindo seu cliente de email... Por favor, envie o formulário preenchido.');
    setFormStatus('Solicitação enviada com sucesso! Entraremos em contato em breve.');
    // Reset form after submission
    setFormData({
      empresaNome: '',
      empresaCnpj: '',
      empresaSegmento: '',
      numColaboradores: '',
      empresaCidade: '',
      empresaEstado: '',
      contatoNome: '',
      contatoCargo: '',
      contatoEmail: '',
      contatoTelefone: ''
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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


  return (
    <div className="para-empresas-page">
      {/* Header */}
      <header className={`header ${isHeaderVisible ? 'visible' : ''}`}>
        <div className="container">
          <div className="header-content">
            <img src={Logo} alt="MentFlow" className="logo" />

            <nav className="desktop-nav">
              <ul className="nav-menu">
                {/* <li><a href="/" className="nav-link">Início</a></li>
                                <li><a href="#beneficios" className="nav-link">Benefícios</a></li>
                                <li><a href="#como-funciona" className="nav-link">Como Funciona</a></li>
                                <li><a href="#depoimento" className="nav-link">Depoimento</a></li> */}
                <li><Link to="/" className="nav-link">Início</Link></li>

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
                    <a href="#sobre" className="dropdown-link" onClick={() => setIsDropdownOpen(false)}>
                      Sobre
                    </a>
                    <a href="#como-funciona" className="dropdown-link" onClick={() => setIsDropdownOpen(false)}>
                      Como Funciona
                    </a>
                    <a href="#benefits-section" className="dropdown-link" onClick={() => setIsDropdownOpen(false)}>
                      Benefícios
                    </a>
                    <a href="#depoimento-section" className="dropdown-link" onClick={() => setIsDropdownOpen(false)}>
                      Depoimentos
                    </a>
                    <a href="#contato-empresas" className="dropdown-link" onClick={() => setIsDropdownOpen(false)}>
                      Contato
                    </a>
                  </div>
                </li>

                <li><Link to="/" className="nav-link">Para Clientes</Link></li>
                <li><Link to="/especialistas" className="nav-link">Para Especialistas</Link></li>
              </ul>
            </nav>

            <div className="header-actions">
              <Link to="#contato-empresas" className="cta-button">Entrar em Contato</Link>
              <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                ☰
              </button>
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
                      href="#sobre"
                      className="mobile-dropdown-link"
                      onClick={(e) => {
                        closeMobileMenu();
                        setIsDropdownOpen(false);
                      }}
                    >
                      Sobre
                    </a>

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
                      href="#depoimento-section"
                      className="mobile-dropdown-link"
                      onClick={(e) => {
                        closeMobileMenu();
                        setIsDropdownOpen(false);
                      }}
                    >
                      Depoimento
                    </a>

                    <a
                      href="#contato-empresas"
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
                  <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
                    Início
                  </Link>
                </li>

                <li>
                  <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
                    Para Clientes
                  </Link>
                </li>

                <li>
                  <Link to="/especialistas" className="mobile-nav-link" onClick={closeMobileMenu}>
                    Para Especialistas
                  </Link>
                </li>
              </ul>
              <a
                href='#contato-empresas'
                className='mobile-cta-button'
                onClick={closeMobileMenu}
              >
                Entrar em Contato
              </a>
            </nav>
          </div>
        </div>
      </header>

      <section className='hero-empresas'>
        <img src={Banner} alt="" />
      </section>

      {/* Por que levar a MentFlow */}
      <section className="section beneficios-empresas" id='sobre'>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <h1>Por que levar a MentFlow para sua empresa?</h1>
            </div>
          </div>

          <div className="beneficios-empresas-grid">
            <div className="beneficio-empresa-card">
              <div className="beneficio-empresa-icon">
                <Users size={48} />
              </div>
              <h3 className="beneficio-empresa-title">Engajamento e Produtividade</h3>
              <p className="beneficio-empresa-description">
                Colaboradores emocionalmente saudáveis faltam menos, produzem mais e se tornam mais colaborativos.
              </p>
            </div>

            <div className="beneficio-empresa-card">
              <div className="beneficio-empresa-icon">
                <Shield size={48} />
              </div>
              <h3 className="beneficio-empresa-title">Cultura de Cuidado</h3>
              <p className="beneficio-empresa-description">
                Mostre que sua empresa valoriza as pessoas, criando um ambiente de confiança e acolhimento.
              </p>
            </div>

            <div className="beneficio-empresa-card">
              <div className="beneficio-empresa-icon">
                <UserCheck size={48} />
              </div>
              <h3 className="beneficio-empresa-title">Redução de Turnover</h3>
              <p className="beneficio-empresa-description">
                Investir em saúde mental reduz estresse, burnout e rotatividade de talentos.
              </p>
            </div>

            <div className="beneficio-empresa-card">
              <div className="beneficio-empresa-icon">
                <CircleCheckBig size={48} />
              </div>
              <h3 className="beneficio-empresa-title">Solução Pronta para Usar</h3>
              <p className="beneficio-empresa-description">
                Plataforma segura, 100% online e simples de implementar — sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona para Empresas */}
      <section className="section como-funciona-empresas" id='como-funciona'>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <h1>Como Funciona para Empresas</h1>
            </div>
          </div>

          <div className="timeline-container">
            <div className="timeline-step">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Adesão Simples</h3>
                <p className="timeline-description">
                  Sua empresa se cadastra na plataforma e escolhe o plano ideal para o tamanho da equipe.
                </p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Ativação Imediata</h3>
                <p className="timeline-description">
                  Cada colaborador recebe acesso exclusivo à MentFlow para agendar suas sessões.
                </p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Relatórios de Impacto</h3>
                <p className="timeline-description">
                  Acompanhe métricas de adesão e bem-estar (sempre com total sigilo e privacidade).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios para sua Empresa */}
      <section className="section beneficios-lista" id='benefits-section'>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <h1>Benefícios para sua Empresa</h1>
            </div>
          </div>

          <div className="beneficios-lista-container">
            <div className="beneficio-lista-item">
              <div className="beneficio-lista-icon">
                <Clock size={24} />
              </div>
              <span className="beneficio-lista-text">Redução de absenteísmo e afastamentos</span>
            </div>

            <div className="beneficio-lista-item">
              <div className="beneficio-lista-icon">
                <TrendingUp size={24} />
              </div>
              <span className="beneficio-lista-text">Mais criatividade e melhor tomada de decisão</span>
            </div>

            <div className="beneficio-lista-item">
              <div className="beneficio-lista-icon">
                <Building2 size={24} />
              </div>
              <span className="beneficio-lista-text">Ambiente de trabalho mais saudável</span>
            </div>

            <div className="beneficio-lista-item">
              <div className="beneficio-lista-icon">
                <BarChart3 size={24} />
              </div>
              <span className="beneficio-lista-text">Relatórios estratégicos para RH e liderança</span>
            </div>

            <div className="beneficio-lista-item">
              <div className="beneficio-lista-icon">
                <Lock size={24} />
              </div>
              <span className="beneficio-lista-text">Confidencialidade e LGPD garantida</span>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimento */}
      <section className="section depoimento-empresa" id='depoimento-section'>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <h1>Depoimento de Empresa Parceira</h1>
            </div>
          </div>

          <div className="depoimento-empresa-card">
            <div className="depoimento-empresa-content">
              <div className="depoimento-empresa-quote">
                <Star size={32} />
              </div>
              <p className="depoimento-empresa-text">
                "Depois que implementamos a MentFlow, percebemos uma queda no absenteísmo e um aumento significativo no engajamento dos times. É uma solução que mostra, na prática, que cuidar de pessoas traz resultados para o negócio."
              </p>
              <div className="depoimento-empresa-author">
                <div className="author-info">
                  <div className="author-name">Ana Rodrigues</div>
                  <div className="author-role">Diretora de RH</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      {/* <section className="section cta-empresas">
        <div className="container">
          <div className="cta-empresas-content">
            <div className="cta-empresas-text">
              <h2 className="cta-empresas-title">
                <Building2 className="cta-empresas-icon" size={48} />
                Transforme o Clima da Sua Empresa
              </h2>
              <p className="cta-empresas-subtitle">
                Ofereça aos seus colaboradores o cuidado que eles merecem.
                Clique no botão abaixo e fale com nossa equipe para conhecer os planos corporativos.
              </p>
              <a href="/contato-empresas" className="cta-empresas-button">
                Quero Conhecer os Planos
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Formulário de Contato para Empresas */}
      <section className='section contato-empresas' id='contato-empresas'>
        <div className='container'>
          <div className='section-header'>
            <div className='section-badge'><h1>Contato</h1></div>
            <h2 className='section-title'>Solicite uma Proposta</h2>
            <p className='section-subtitle'>Preencha o formulário abaixo e nossa equipe entrará em contato para apresentar uma solução personalizada para sua empresa.</p>
          </div>

          <form className='contato-empresas-form' onSubmit={(e) => e.preventDefault()}>
            <fieldset className='form-fieldset'>
              <legend className='fieldset-legend'>
                <Building2 size={24} />
                <span>Dados da Empresa</span>
              </legend>

              <div className='form-group'>
                <label htmlFor='empresa-nome'>Nome da Empresa <span className='required'>*</span></label>
                <input
                  type='text'
                  id='empresa-nome'
                  name='empresaNome'
                  required
                  placeholder='Digite o nome da sua empresa'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='empresa-cnpj'>CNPJ <span className='required'>*</span></label>
                <input
                  type='text'
                  id='empresa-cnpj'
                  name='empresaCnpj'
                  required
                  placeholder='00.000.000/0000-00'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='empresa-segmento'>Segmento de Atuação <span className='required'>*</span></label>
                <input
                  type='text'
                  id='empresa-segmento'
                  name='empresaSegmento'
                  required
                  placeholder='Ex: Tecnologia, Varejo, Saúde, etc.'
                />
              </div>

              <div className='form-group'>
                <label>Número de Colaboradores <span className='required'>*</span></label>
                <div className='radio-group'>
                  {['1-10', '11-50', '51-200', '200+'].map((range) => (
                    <label key={range} className='radio-label'>
                      <input
                        type='radio'
                        name='numColaboradores'
                        value={range}
                        required
                      />
                      <span>{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor='empresa-cidade'>Cidade <span className='required'>*</span></label>
                  <input
                    type='text'
                    id='empresa-cidade'
                    name='empresaCidade'
                    required
                    placeholder='Sua cidade'
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='empresa-estado'>Estado <span className='required'>*</span></label>
                  <select
                    id='empresa-estado'
                    name='empresaEstado'
                    required
                    defaultValue=''
                  >
                    <option value='' disabled>Selecione o estado</option>
                    {[
                      'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
                      'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
                      'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
                    ].map((uf) => (
                      <option key={uf} value={uf}>{uf}</option>
                    ))}
                  </select>
                </div>
              </div>
            </fieldset>

            <fieldset className='form-fieldset'>
              <legend className='fieldset-legend'>
                <UserCheck size={24} />
                <span>Responsável pelo Contato</span>
              </legend>

              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor='contato-nome'>Nome Completo <span className='required'>*</span></label>
                  <input
                    type='text'
                    id='contato-nome'
                    name='contatoNome'
                    required
                    placeholder='Seu nome completo'
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='contato-cargo'>Cargo/Função <span className='required'>*</span></label>
                  <input
                    type='text'
                    id='contato-cargo'
                    name='contatoCargo'
                    required
                    placeholder='Ex: RH, CEO, Gestor de Pessoas'
                  />
                </div>
              </div>

              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor='contato-email'>E-mail Corporativo <span className='required'>*</span></label>
                  <input
                    type='email'
                    id='contato-email'
                    name='contatoEmail'
                    required
                    placeholder='seu.email@empresa.com'
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='contato-telefone'>Telefone/WhatsApp <span className='required'>*</span></label>
                  <input
                    type='tel'
                    id='contato-telefone'
                    name='contatoTelefone'
                    required
                    placeholder='(00) 00000-0000'
                  />
                </div>
              </div>
            </fieldset>

            <div className='form-actions'>
              <button type='submit' className='cta-button'>
                Enviar Solicitação
                <ArrowRight size={20} style={{ marginLeft: '8px' }} />
              </button>
              <a
                href={whatsappLink}
                target='_blank'
                rel='noopener noreferrer'
                className='cta-button whatsapp-btn'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  backgroundColor: '#25D366',
                  color: 'white',
                  textDecoration: 'none',
                  marginLeft: '1rem'
                }}
              >
                <WhatsappLogoIcon size={26} />
                Enviar pelo WhatsApp
              </a>
            </div>
          </form>
        </div>
      </section>


    </div>
  );
};

export default ParaEmpresas;