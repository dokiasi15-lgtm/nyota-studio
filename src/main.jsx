import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDown, ArrowRight, ArrowUpRight, Asterisk, Globe2, Menu, MoveUpRight, Sparkles, X } from 'lucide-react'
import './style.css'

const copy = {
  en: {
    nav: ['Services', 'Selected work', 'Contact'],
    eyebrow: 'Independent 3D web studio · DRC / Worldwide',
    title: <>Beyond the screen.<br /><span>Into a new dimension.</span></>,
    intro: 'We shape distinctive 3D web experiences for people, products and ideas ready to be seen differently.',
    cta: 'Explore selected work',
    scroll: 'Scroll to explore',
    ticker: '3D PERSONAL PORTFOLIOS · PRODUCT EXPERIENCES · IMMERSIVE WEBSITES ·',
    servicesTag: 'What we make', servicesTitle: <>A little more <i>dimension.</i></>,
    servicesIntro: 'Thoughtful digital spaces with 3D at the heart of the story.',
    services: [
      ['01', '3D Personal Portfolios', 'A personal world for your work, point of view and next opportunity.'],
      ['02', '3D Product Experiences', 'Bring a product closer with a considered, interactive 3D presentation.'],
      ['03', 'Immersive 3D Websites', 'Websites with a sense of depth, made to feel distinct and easy to explore.'],
    ],
    workTag: 'A first look', workTitle: <>Selected <i>work.</i></>, workIntro: 'Two self-initiated experiments exploring how 3D can shape a personal portfolio.',
    personal: 'Personal project', visit: 'Visit project', made: 'Objects modeled in Blender · exported as GLB · responsive websites',
    projects: [
      { name: 'Dolivin', category: 'Portfolio · 3D study', description: 'A personal portfolio experiment, with custom modeled 3D objects and an expressive visual point of view.', href: 'https://dokiasi15-lgtm.github.io/portfolio-dolivin/?v=11#projects', art: 'dolivin', index: '01' },
      { name: 'Portfolio 3D', category: 'Portfolio · 3D study', description: 'A second exploration of a portfolio shaped around modeled 3D objects and a responsive layout.', href: 'https://dokiasi15-lgtm.github.io/portfolio-3d/', art: 'orbit', index: '02' },
    ],
    contactTag: 'Have a project in mind?', contactTitle: <>Let’s make something<br /><i>with dimension.</i></>, contactCopy: 'Tell us what you are imagining. We’ll take it from there, one thoughtful step at a time.',
    contactButton: 'Contact details to be added', contactNote: 'Studio email / contact link — replace this placeholder before launch.', footer: 'Independent by nature. Curious by design.', location: 'DRC · Working worldwide', back: 'Back to top',
  },
  fr: {
    nav: ['Services', 'Projets choisis', 'Contact'],
    eyebrow: 'Studio web 3D indépendant · RDC / Monde',
    title: <>Au-delà de l’écran.<br /><span>Vers une nouvelle dimension.</span></>,
    intro: 'Nous créons des expériences web 3D singulières pour les personnes, les produits et les idées qui veulent se révéler autrement.',
    cta: 'Découvrir nos projets', scroll: 'Défiler pour explorer',
    ticker: 'PORTFOLIOS PERSONNELS 3D · EXPÉRIENCES PRODUIT · SITES WEB IMMERSIFS ·',
    servicesTag: 'Nos créations', servicesTitle: <>Un peu plus de <i>dimension.</i></>,
    servicesIntro: 'Des espaces numériques réfléchis, où la 3D donne du relief à chaque histoire.',
    services: [
      ['01', 'Portfolios personnels 3D', 'Un univers personnel pour présenter votre travail, votre regard et vos ambitions.'],
      ['02', 'Expériences produit 3D', 'Mettre un produit en lumière avec une présentation 3D interactive et soignée.'],
      ['03', 'Sites web 3D immersifs', 'Des sites qui prennent du relief, singuliers et agréables à explorer.'],
    ],
    workTag: 'Premiers aperçus', workTitle: <>Projets <i>choisis.</i></>, workIntro: 'Deux expérimentations personnelles autour de la place de la 3D dans un portfolio.',
    personal: 'Projet personnel', visit: 'Voir le projet', made: 'Objets modélisés dans Blender · exportés en GLB · sites responsives',
    projects: [
      { name: 'Dolivin', category: 'Portfolio · étude 3D', description: 'Une exploration de portfolio personnel, composée d’objets 3D modélisés et d’un parti pris visuel affirmé.', href: 'https://dokiasi15-lgtm.github.io/portfolio-dolivin/?v=11#projects', art: 'dolivin', index: '01' },
      { name: 'Portfolio 3D', category: 'Portfolio · étude 3D', description: 'Une seconde exploration de portfolio, construite autour d’objets 3D modélisés et d’une mise en page responsive.', href: 'https://dokiasi15-lgtm.github.io/portfolio-3d/', art: 'orbit', index: '02' },
    ],
    contactTag: 'Un projet en tête ?', contactTitle: <>Créons quelque chose<br /><i>qui a du relief.</i></>, contactCopy: 'Parlez-nous de votre idée. Nous avancerons ensemble, une étape réfléchie à la fois.',
    contactButton: 'Coordonnées à ajouter', contactNote: 'E-mail / lien de contact du studio — remplacez ce texte avant la mise en ligne.', footer: 'Indépendants par nature. Curieux par choix.', location: 'RDC · Disponible dans le monde entier', back: 'Haut de page',
  },
}

function Wordmark() { return <a className="wordmark" href="#home" aria-label="NYOTA STUDIO, home"><span className="mark">N<span>✳</span></span><span className="wordmark-type">NYOTA <b>STUDIO</b></span></a> }

function ProjectArtwork({ art }) {
  return <div className={`project-art ${art}`} aria-hidden="true">
    <div className="art-grain" />
    {art === 'dolivin' ? <><div className="portal portal-a" /><div className="portal portal-b" /><div className="orb orb-a" /><div className="orb orb-b" /><div className="artifact-caption">D / 001</div><div className="artifact-line" /></> : <><div className="orbit-ring ring-a" /><div className="orbit-ring ring-b" /><div className="orbit-ring ring-c" /><div className="orbit-core" /><div className="orbit-dot" /><span className="orbit-caption">FORM STUDY — 02</span></>}
    <span className="art-index">{art === 'dolivin' ? 'D—01' : 'P—02'}</span>
  </div>
}

function App() {
  const [lang, setLang] = useState('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = copy[lang]
  useEffect(() => { document.documentElement.lang = lang }, [lang])
  const links = ['#services', '#work', '#contact']
  return <>
    <header className="header"><Wordmark />
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>{t.nav.map((n, i) => <a key={n} href={links[i]} onClick={() => setMenuOpen(false)}>{n}</a>)}</nav>
      <div className="header-actions"><button className="lang" onClick={() => setLang(lang === 'en' ? 'fr' : 'en')} aria-label={lang === 'en' ? 'Passer en français' : 'Switch to English'}><Globe2 size={14} /> <span>{lang === 'en' ? 'EN' : 'FR'}</span><span className="lang-slash">/</span><span className="lang-muted">{lang === 'en' ? 'FR' : 'EN'}</span></button><a className="header-cta" href="#contact">{lang === 'en' ? 'Let’s talk' : 'Parlons-en'} <ArrowUpRight size={14} /></a></div>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>
    <main>
      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="hero-content"><p className="eyebrow"><span className="live-dot" />{t.eyebrow}</p><h1>{t.title}</h1><p className="hero-intro">{t.intro}</p><a className="text-link" href="#work">{t.cta}<span className="link-circle"><ArrowDown size={15} /></span></a></div>
        <div className="hero-object" aria-hidden="true"><div className="object-shadow"/><div className="glass-object"><div className="glass-facet facet-one"/><div className="glass-facet facet-two"/><div className="glass-facet facet-three"/><div className="glass-hole"/></div><div className="object-orbit orbit-one"/><div className="object-orbit orbit-two"/><span className="object-label label-top">STUDY / 001</span><span className="object-label label-bottom">BLENDER → GLB</span><span className="object-cross cross-a">+</span><span className="object-cross cross-b">✳</span></div>
        <div className="hero-foot"><span>{t.scroll}</span><span className="hero-foot-line"/><span>01 — 04</span></div>
        <div className="hero-side">NYOTA STUDIO <span>·</span> 3D</div>
      </section>
      <div className="ticker" aria-label={t.ticker}><div>{Array.from({length:4},(_,i)=><span key={i}>{t.ticker} <Asterisk size={17}/></span>)}</div></div>
      <section className="section services-section" id="services"><div className="section-head"><div><p className="section-tag"><span>01</span> / {t.servicesTag}</p><h2>{t.servicesTitle}</h2></div><p className="section-intro">{t.servicesIntro}</p></div><div className="services-list">{t.services.map(([n,title,desc],i)=><article className="service-row" key={n}><span className="service-number">{n}</span><div className={`service-glyph glyph-${i+1}`} aria-hidden="true"><span/><span/><span/></div><div className="service-copy"><h3>{title}</h3><p>{desc}</p></div><ArrowUpRight className="service-arrow" size={20}/></article>)}</div><div className="service-foot"><Sparkles size={15}/><span>{lang==='en'?'Made with care, modeled with intention.':'Créé avec soin, modélisé avec intention.'}</span></div></section>
      <section className="work-section" id="work"><div className="section work-head"><div><p className="section-tag"><span>02</span> / {t.workTag}</p><h2>{t.workTitle}</h2></div><p className="section-intro">{t.workIntro}</p></div><div className="projects-grid">{t.projects.map(project=><article className="project" key={project.name}><a className="project-visual-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`${t.visit}: ${project.name}`}><ProjectArtwork art={project.art}/><span className="project-open"><ArrowUpRight size={18}/></span></a><div className="project-meta"><span>{project.category}</span><span className="personal-label"><i/> {t.personal}</span></div><h3>{project.name}</h3><p className="project-desc">{project.description}</p><p className="project-made">{t.made}</p><a className="project-link" href={project.href} target="_blank" rel="noreferrer">{t.visit}<MoveUpRight size={14}/></a></article>)}</div></section>
      <section className="contact-section" id="contact"><div className="contact-deco" aria-hidden="true"><div/><span>✳</span></div><div className="contact-inner"><p className="section-tag"><span>03</span> / {t.contactTag}</p><h2>{t.contactTitle}</h2><p className="contact-copy">{t.contactCopy}</p><span className="contact-button" aria-disabled="true">{t.contactButton}<ArrowUpRight size={17}/></span><p className="contact-note">{t.contactNote}</p></div></section>
    </main>
    <footer className="footer"><Wordmark/><p>{t.footer}</p><span>{t.location}</span><a href="#home">{t.back} ↑</a><small>© NYOTA STUDIO · {new Date().getFullYear()}</small></footer>
  </>
}

createRoot(document.getElementById('root')).render(<App />)
