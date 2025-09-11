import React, { useState, useEffect } from 'react';
import { Users, Shield, UserCheck, CircleCheckBig, Menu, X, ArrowRight, Building2, TrendingUp, Clock, BarChart3, Lock, Star } from 'lucide-react';
import '../pages/ParaEmpresas.css';
import logo from '../assets/full-logo.webp';

const ParaEmpresas = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="para-empresas-page">
      {/* Header */}
      <header className={`header ${isHeaderVisible ? 'visible' : ''}`}>
        <div className="container">
          <div className="header-content">
            <img src={logo} alt="MentFlow" className="logo" />
            
            <nav className="desktop-nav">
              <ul className="nav-menu">
                <li><a href="/" className="nav-link">Início</a></li>
                <li><a href="/especialistas" className="nav-link">Especialistas</a></li>
                <li><a href="/para-empresas" className="nav-link">Para Empresas</a></li>
                <li><a href="/sobre" className="nav-link">Sobre</a></li>
              </ul>
            </nav>

            <div className="header-actions">
              <a href="/cadastro" className="cta-button">Começar Agora</a>
              <button className="mobile-menu-toggle" onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <nav className="mobile-nav">
              <ul className="mobile-nav-menu">
                <li><a href="/" className="mobile-nav-link">Início</a></li>
                <li><a href="/especialistas" className="mobile-nav-link">Especialistas</a></li>
                <li><a href="/empresas" className="mobile-nav-link">Para Empresas</a></li>
                <li><a href="/sobre" className="mobile-nav-link">Sobre</a></li>
              </ul>
              <a href="/cadastro" className="mobile-cta-button">Começar Agora</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Por que levar a MentFlow */}
      <section className="section beneficios-empresas">
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
      <section className="section como-funciona-empresas">
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
      <section className="section beneficios-lista">
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
      <section className="section depoimento-empresa">
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
      <section className="section cta-empresas">
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
      </section>
    </div>
  );
};

export default ParaEmpresas;