import React, { useState, useEffect } from 'react';
import './Especialistas.css';

import {
    TrendingUp,
    Monitor,
    Clock,
    Heart,
    DollarSign,
    UserPlus,
    ChevronDown,
    CheckCircle,
    Headset,
    MapPin,
    Shield,
    Calendar,
    CreditCard,
    BarChart3,
    Megaphone,
    ArrowRight
} from 'lucide-react';

import Banner from '../assets/banner-especialistas.webp'
import CtaImage from '../assets/cta-image-especialistas.webp'
import Reveal from '../components/Reveal'

const Especialistas = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className="especialistas-page">
            {/* Header */}
            <header className={`header ${isHeaderVisible ? 'visible' : ''}`}>
                <div className="container">
                    <div className="header-content">
                        <img src="/src/assets/full-logo.webp" alt="MentFlow" className="logo" />

                        <nav className="desktop-nav">
                            <ul className="nav-menu">
                                {/* <li><a href="/" className="nav-link">Início</a></li>
                                <li><a href="#beneficios" className="nav-link">Benefícios</a></li>
                                <li><a href="#como-funciona" className="nav-link">Como Funciona</a></li>
                                <li><a href="#depoimento" className="nav-link">Depoimento</a></li> */}
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
                                        <a href="#beneficios" className="dropdown-link" onClick={() => setIsDropdownOpen(false)}>
                                            Benefícios
                                        </a>
                                        <a href="#como-funciona" className="dropdown-link" onClick={() => setIsDropdownOpen(false)}>
                                            Como Funciona
                                        </a>
                                        <a href="#depoimento" className="dropdown-link" onClick={() => setIsDropdownOpen(false)}>
                                            Depoimentos
                                        </a>
                                        <a href="#cadastro" className="dropdown-link" onClick={() => setIsDropdownOpen(false)}>
                                            Cadastrar
                                        </a>
                                    </div>
                                </li>

                                <li><a href="/" className="nav-link">Para Clientes</a></li>
                                <li><a href="/empresas" className="nav-link">Para Empresas</a></li>
                            </ul>
                        </nav>

                        <div className="header-actions">
                            <a href="#cadastro" className="cta-button">Cadastre-se</a>
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
                                            href="https://wa.me/351926599294?text=Ol%C3%A1%2C%20vim%20pelo%20site!"
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
                                href='#profissionais'
                                className='mobile-cta-button'
                                onClick={closeMobileMenu}
                            >
                                Agendar Consulta
                            </a>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main>

                {/* Hero Section */}
                <section className='hero-especialistas'>
                    <img src={Banner} alt='' />

                </section>

                {/* Por que atender na MentFlow */}
                <Reveal>
                    <section id="beneficios" className="section beneficios">
                        <div className="container">
                            <div className="section-header">
                                <div className="section-badge">
                                    <h1>Por que atender na MentFlow?</h1>
                                </div>
                            </div>

                            <div className="beneficios-grid">
                                <div className="beneficio-card">
                                    <div className="beneficio-icon"><TrendingUp size={48} /></div>
                                    <h3 className="beneficio-title">Mais alcance, menos barreiras</h3>
                                    <p className="beneficio-description">
                                        Seja encontrado por novos pacientes de qualquer lugar do Brasil, sem depender de indicações boca a boca.
                                    </p>
                                </div>

                                <div className="beneficio-card">
                                    <div className="beneficio-icon"><Monitor size={48} /></div>
                                    <h3 className="beneficio-title">Tecnologia que facilita o seu trabalho</h3>
                                    <p className="beneficio-description">
                                        Plataforma 100% online, segura e intuitiva, com agendamento automático e sistema de videochamadas integrado.
                                    </p>
                                </div>

                                <div className="beneficio-card">
                                    <div className="beneficio-icon"><Clock size={48} /></div>
                                    <h3 className="beneficio-title">Controle da sua agenda</h3>
                                    <p className="beneficio-description">
                                        Você define os dias e horários disponíveis e mantém total autonomia sobre sua rotina.
                                    </p>
                                </div>

                                <div className="beneficio-card">
                                    <div className="beneficio-icon"><Heart size={48} /></div>
                                    <h3 className="beneficio-title">Atendimento humanizado e ético</h3>
                                    <p className="beneficio-description">
                                        Nosso compromisso é oferecer um ambiente acolhedor e profissional, valorizando a relação terapeuta–paciente.
                                    </p>
                                </div>

                                <div className="beneficio-card">
                                    <div className="beneficio-icon"><DollarSign size={48} /></div>
                                    <h3 className="beneficio-title">Receba pelo que você ama fazer</h3>
                                    <p className="beneficio-description">
                                        Gestão simplificada de pagamentos, sem burocracia, para você focar no atendimento.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </Reveal>
                {/* Como Funciona */}
                <Reveal>
                    <section id="como-funciona" className="section como-funciona">
                        <div className="container">
                            <div className="section-header">
                                <div className="section-badge">
                                    <h1>Como Funciona para o Profissional</h1>
                                </div>
                            </div>

                            <div className="steps-grid">
                                <div className="step-card">
                                    <div className="step-number">1</div>
                                    <div className="step-content">
                                        <div className="step-title-with-icon">
                                            <UserPlus size={24} />
                                            <h3 className="step-title">Cadastre-se</h3>
                                        </div>
                                        <p className="step-description">
                                            Preencha seu perfil com suas informações profissionais, especializações e abordagem terapêutica.
                                        </p>
                                    </div>
                                </div>

                                <div className="step-card">
                                    <div className="step-number">2</div>
                                    <div className="step-content">
                                        <div className="step-title-with-icon">
                                            <CheckCircle size={24} />
                                            <h3 className="step-title">Seja Validado</h3>
                                        </div>
                                        <p className="step-description">
                                            Nossa equipe revisa suas credenciais e garante que apenas profissionais qualificados façam parte da plataforma.
                                        </p>
                                    </div>
                                </div>

                                <div className="step-card">
                                    <div className="step-number">3</div>
                                    <div className="step-content">
                                        <div className="step-title-with-icon">
                                            <Headset size={24} />
                                            <h3 className="step-title">Comece a Atender</h3>
                                        </div>
                                        <p className="step-description">
                                            Defina sua agenda, receba seus primeiros pacientes e acompanhe seus resultados pelo painel exclusivo para terapeutas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Reveal>

                {/* Benefícios Parceiro */}
                <Reveal>
                    <section className="section beneficios-parceiro">
                        <div className="container">
                            <div className="section-header">
                                <div className="section-badge">
                                    <h1>Benefícios de se Tornar Parceiro MentFlow</h1>
                                </div>
                            </div>

                            <div className="parceiro-grid">
                                <div className="parceiro-item">
                                    <div className="parceiro-icon"><MapPin size={28} /></div>
                                    <span className="parceiro-text">Atenda de onde estiver — home office ou consultório</span>
                                </div>

                                <div className="parceiro-item">
                                    <div className="parceiro-icon"><Shield size={28} /></div>
                                    <span className="parceiro-text">Segurança e sigilo para você e para o paciente</span>
                                </div>

                                <div className="parceiro-item">
                                    <div className="parceiro-icon"><Calendar size={28} /></div>
                                    <span className="parceiro-text">Agenda inteligente e sincronizada</span>
                                </div>

                                <div className="parceiro-item">
                                    <div className="parceiro-icon"><CreditCard size={28} /></div>
                                    <span className="parceiro-text">Pagamentos facilitados e transparentes</span>
                                </div>

                                <div className="parceiro-item">
                                    <div className="parceiro-icon"><BarChart3 size={28} /></div>
                                    <span className="parceiro-text">Relatórios de desempenho e evolução</span>
                                </div>

                                <div className="parceiro-item">
                                    <div className="parceiro-icon"><Megaphone size={28} /></div>
                                    <span className="parceiro-text">Mais visibilidade para seu trabalho</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </Reveal>

                {/* Depoimento */}
                <Reveal>
                    <section id="depoimento" className="section depoimento">
                        <div className="container">
                            <div className="section-header">
                                <div className="section-badge">
                                    <h1>Depoimento de Quem Já Atende</h1>
                                </div>
                            </div>

                            <div className="depoimento-card">
                                <div className="depoimento-content">
                                    <p className="depoimento-text">
                                        "Atender pela MentFlow foi um divisor de águas para minha prática clínica. Consigo organizar minha agenda,
                                        alcançar pacientes que antes não teria contato e ainda manter uma rotina equilibrada. É tecnologia que me
                                        aproxima das pessoas, não que me afasta."
                                    </p>
                                    <div className="depoimento-author">
                                        <div className="author-info">
                                            <h4 className="author-name">Dra. Carla Menezes</h4>
                                            <p className="author-role">Psicóloga Clínica</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Reveal>

                {/* CTA Final */}
                <Reveal>
                    <section id="cadastro" className="section cta-final">
                        <div className="container">
                            <div className="cta-content">
                                <div className="cta-image">
                                    <img src={CtaImage} className="cta-image-main" />
                                </div>
                                <div className="cta-text">
                                    <h2 className="cta-title">

                                        Faça Parte da Mudança
                                    </h2>
                                    <p className="cta-subtitle">
                                        Junte-se a outros profissionais que estão transformando a forma de cuidar da saúde mental no Brasil.
                                        Clique no botão abaixo e dê o próximo passo na sua jornada profissional.
                                    </p>
                                    <a href="#" className="cta-button-large">
                                        Quero Me Cadastrar
                                        <ArrowRight size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </Reveal>
            </main>
        </div>
    );
};

export default Especialistas;