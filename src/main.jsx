import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronDown, Globe2, Menu, X } from 'lucide-react'
import * as THREE from 'three'
import './style.css'

const EMAIL = 'dokiasi15@gmail.com'
const WHATSAPP = '243893905133'
const ASSET_ROOT = import.meta.env.BASE_URL + 'assets/'
const data = {
  en: {
    nav:['What we make','Selected work','Our approach'], order:'Start a project', eyebrow:'An independent 3D web studio · DRC / Worldwide',
    title:<>A little more <em>feeling.</em></>, tagline:'Beyond the Screen. Into a New Dimension.',
    intro:'We make thoughtful digital places for people, products and ideas that deserve to be experienced.',
    hint:'Move your pointer or touch the object.', explore:'Explore the services', serviceHead:<>Made to be <em>felt.</em></>, serviceIntro:'Choose a direction to see how your idea could take shape.', more:'Explore this service', less:'Close details', projectStart:'Start a project like this',
    services:[
      ['3D Personal Portfolios','A personal world for work with a point of view.','For artists, designers and makers who want their work to feel unmistakably theirs.',['A distinct visual direction','A custom 3D object or scene','A responsive portfolio for your story and work']],
      ['3D Product Experiences','Bring a product closer. Let curiosity do the rest.','For a product or collection that deserves more than another flat product page.',['A clear product story','A modeled or provided 3D asset','A focused interactive presentation']],
      ['Immersive 3D Websites','A website that feels like stepping somewhere new.','For a brand with a world to share and a reason to invite people in.',['Art direction and page structure','A tailored 3D web experience','A responsive site with a clear next step']],
    ],
    serviceFoot:'Every project starts with a conversation. Scope and budget are agreed together.',
    workHead:<>Made by <em>me.</em></>, workIntro:'Two personal explorations. Blender-modeled objects, exported as GLB, inside responsive websites.', personal:'Personal project', visit:'Visit the project',
    projects:[
      ['Dolivin','Personal portfolio','A bold typographic voice, a little lime spark, and a path through code, art and curiosity.',ASSET_ROOT+'dolivin-portfolio.png','Real screenshot of the Dolivin portfolio home page','https://dokiasi15-lgtm.github.io/portfolio-dolivin/?v=11#projects','A portrait in progress'],
      ['The 3D Portfolio','Personal 3D exploration','A small room to wander through. Work, objects and a sense of place brought together in 3D.',ASSET_ROOT+'portfolio-3d.png','Real screenshot of the 3D portfolio landing page','https://dokiasi15-lgtm.github.io/portfolio-3d/','Enter another space'],
    ],
    approachHead:<>From first thought<br/>to <em>something real.</em></>, approachIntro:'A clear, human process keeps the experience grounded in what you actually need.',
    approach:[['Listen first','We learn about your idea, who it is for, and what success should feel like.'],['Shape the world','We agree on the experience, visual direction, scope and next steps before building.'],['Bring it to life','You see progress, share feedback and receive a responsive experience ready to share.']],
    contactHead:<>Have a world<br/>in <em>mind?</em></>, contactIntro:'Tell us what you are imagining. The first step is simply a good conversation.', contactWA:'Chat on WhatsApp', contactEmail:'Write an email',
    form:{
      label:'A good place to begin',step:'Step',project:'The project',about:'About you',title1:'What are you imagining?',title2:'Who should we reply to?',
      intro1:'A few details help us understand the world you want to make. Share as much or as little as you like.',
      intro2:'Choose where you would like our reply. Your draft opens in the app you select.',
      service:'What would you like to make?', services:['3D Personal Portfolios','3D Product Experiences','Immersive 3D Websites','I’m not sure yet'],
      idea:'Tell us about the idea',ideaHint:'The idea, the feeling you want to create, who it is for, and anything you already have in mind…',
      refs:'Website or inspiration (optional)',refsHint:'Link to a site, moodboard or product',budget:'Budget range (optional)',budgets:['Not sure yet','Under $300','$300–$700','$700–$1,500','$1,500+'],timing:'When would you like to begin? (optional)',timings:['Flexible','Within a month','In 1–3 months','I have a date in mind'],
      name:'Your name',nameHint:'How should we address you?',channel:'Where should we reply?',wa:'WhatsApp',email:'Email',yourWa:'Your WhatsApp number',yourEmail:'Your email address',
      consent:'I agree to send these details to NYOTA STUDIO through the channel I selected so the team can respond to my project request.',
      next:'Continue',back:'Back',send:'Prepare my request',close:'Close',required:'Please fill in the required fields before continuing.',
      done:'Your next step is ready.',doneWA:'WhatsApp should open with your project details. Press Send there to submit your request.',doneEmail:'Your email app should open with the details. Press Send there to submit your request.',reply:'A member of the NYOTA team will reply as soon as possible.',again:'Open message again',
    },
    footer:'Small studio. Big sense of wonder.',location:'DRC · Working worldwide',top:'Back to top',
  },
  fr: {
    nav:['Nos créations','Projets choisis','Notre approche'],order:'Parler de mon projet',eyebrow:'Studio web 3D indépendant · RDC / Monde',
    title:<>Un peu plus de <em>frisson.</em></>,tagline:'Beyond the Screen. Into a New Dimension.',
    intro:'Nous créons des espaces numériques habités pour les personnes, les produits et les idées qui méritent d’être vécus.',
    hint:'Faites tourner l’objet avec votre doigt ou votre souris.',explore:'Découvrir nos services',serviceHead:<>Des créations à <em>ressentir.</em></>,serviceIntro:'Choisissez une piste pour découvrir comment votre idée pourrait prendre forme.',more:'Explorer ce service',less:'Réduire',projectStart:'Commencer un projet similaire',
    services:[
      ['Portfolios personnels 3D','Un univers personnel pour des créations singulières.','Pour les artistes, designers et créateurs qui veulent un portfolio à leur image.',['Une direction visuelle affirmée','Un objet ou une scène 3D sur mesure','Un portfolio responsive pour raconter votre parcours']],
      ['Expériences produit 3D','Approchez le produit. Laissez parler la curiosité.','Pour un produit ou une collection qui mérite mieux qu’une page produit classique.',['Une histoire claire autour du produit','Un modèle 3D fourni ou réalisé ensemble','Une présentation interactive et ciblée']],
      ['Sites web 3D immersifs','Un site qui donne la sensation d’entrer ailleurs.','Pour une marque qui a un univers à partager et envie d’y accueillir son public.',['Direction artistique et structure des pages','Une expérience web 3D adaptée au projet','Un site responsive avec une prochaine étape claire']],
    ],
    serviceFoot:'Chaque projet commence par un échange. Le périmètre et le budget sont définis ensemble.',
    workHead:<>Créés par <em>moi.</em></>,workIntro:'Deux explorations personnelles. Objets modélisés dans Blender, exportés en GLB, intégrés à des sites responsives.',personal:'Projet personnel',visit:'Voir le projet',
    projects:[
      ['Dolivin','Portfolio personnel','Un parti pris typographique, une pointe de vert et un parcours entre code, art et curiosité.',ASSET_ROOT+'dolivin-portfolio.png','Capture réelle de la page d’accueil du portfolio Dolivin','https://dokiasi15-lgtm.github.io/portfolio-dolivin/?v=11#projects','Un portrait en mouvement'],
      ['Portfolio 3D','Exploration 3D personnelle','Une petite pièce à explorer. Travaux, objets et atmosphère réunis dans un portfolio 3D.',ASSET_ROOT+'portfolio-3d.png','Capture réelle de la page d’accueil du portfolio 3D','https://dokiasi15-lgtm.github.io/portfolio-3d/','Entrer dans un autre espace'],
    ],
    approachHead:<>De la première idée<br/>à <em>quelque chose de concret.</em></>,approachIntro:'Un processus humain et clair pour ancrer l’expérience dans vos vrais besoins.',
    approach:[['On vous écoute','Nous découvrons votre idée, son public et ce que la réussite devrait vous apporter.'],['On imagine le monde','Nous nous accordons sur l’expérience, le style, le périmètre et la suite avant de construire.'],['On lui donne vie','Vous suivez les avancées, partagez vos retours et recevez une expérience responsive à partager.']],
    contactHead:<>Vous avez un univers<br/>en <em>tête ?</em></>,contactIntro:'Racontez-nous ce que vous imaginez. Tout commence par un échange.',contactWA:'Discuter sur WhatsApp',contactEmail:'Écrire un e-mail',
    form:{
      label:'Un bon point de départ',step:'Étape',project:'Le projet',about:'À votre sujet',title1:'Qu’imaginez-vous ?',title2:'À qui répond-on ?',
      intro1:'Quelques détails nous aident à comprendre l’univers que vous souhaitez créer. Dites-en autant que vous le souhaitez.',
      intro2:'Choisissez où recevoir notre réponse. Votre brouillon s’ouvrira dans l’application sélectionnée.',
      service:'Que souhaitez-vous créer ?',services:['Portfolios personnels 3D','Expériences produit 3D','Sites web 3D immersifs','Je ne sais pas encore'],
      idea:'Parlez-nous de votre idée',ideaHint:'L’idée, l’émotion à transmettre, le public, et tout ce que vous avez déjà en tête…',
      refs:'Site ou inspiration (facultatif)',refsHint:'Lien vers un site, une planche d’inspiration ou un produit',budget:'Budget envisagé (facultatif)',budgets:['Je ne sais pas encore','Moins de 300 $','300–700 $','700–1 500 $','1 500 $ et plus'],timing:'Quand souhaitez-vous commencer ? (facultatif)',timings:['Pas de date précise','Dans le mois','Dans 1 à 3 mois','J’ai une date en tête'],
      name:'Votre nom',nameHint:'Comment vous appeler ?',channel:'Où souhaitez-vous recevoir une réponse ?',wa:'WhatsApp',email:'E-mail',yourWa:'Votre numéro WhatsApp',yourEmail:'Votre adresse e-mail',
      consent:'J’accepte de transmettre ces informations à NYOTA STUDIO par le canal choisi afin que l’équipe puisse répondre à ma demande de projet.',
      next:'Continuer',back:'Retour',send:'Préparer ma demande',close:'Fermer',required:'Veuillez remplir les champs obligatoires avant de continuer.',
      done:'Votre prochaine étape est prête.',doneWA:'WhatsApp devrait s’ouvrir avec les détails du projet. Appuyez sur Envoyer pour transmettre votre demande.',doneEmail:'Votre messagerie devrait s’ouvrir avec les détails. Appuyez sur Envoyer pour transmettre votre demande.',reply:'Un membre de l’équipe NYOTA vous répondra dès que possible.',again:'Rouvrir le message',
    },
    footer:'Petit studio. Grand sens de l’émerveillement.',location:'RDC · Disponible dans le monde entier',top:'Haut de page',
  },
}

function Mark(){return <a className="wordmark" href="#home" aria-label="NYOTA STUDIO"><span className="wordmark-mark">N<i>✳</i></span><span>NYOTA <b>STUDIO</b></span></a>}

function ThreeScene({lang}){
  const host=useRef(null)
  useEffect(()=>{
    const el=host.current;if(!el)return
    let renderer,frame,observer
    let tx=0,ty=0,px=0,py=0
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches
    try{
      const scene=new THREE.Scene()
      const camera=new THREE.PerspectiveCamera(34,1,.1,80);camera.position.z=window.innerWidth<680?6.1:5.35
      renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'})
      renderer.setPixelRatio(Math.min(devicePixelRatio||1,innerWidth<680?1.25:1.6));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping
      el.appendChild(renderer.domElement)
      const object=new THREE.Group();scene.add(object)
      const geo=new THREE.IcosahedronGeometry(1.05,5),pos=geo.attributes.position,v=new THREE.Vector3()
      for(let i=0;i<pos.count;i++){v.fromBufferAttribute(pos,i).normalize();const r=1+.13*Math.sin(v.x*5.2+v.z*2)*Math.cos(v.y*4.7-v.z*2.4)+.05*Math.sin((v.x+v.y)*9+v.z*3);pos.setXYZ(i,v.x*r,v.y*r,v.z*r)}
      geo.computeVertexNormals()
      const core=new THREE.Mesh(geo,new THREE.MeshPhysicalMaterial({color:0x9beed7,metalness:.55,roughness:.19,clearcoat:1,clearcoatRoughness:.12,emissive:0x261242,emissiveIntensity:.28}))
      object.add(core)
      const inner=new THREE.Mesh(new THREE.IcosahedronGeometry(.54,4),new THREE.MeshPhysicalMaterial({color:0xb7a4ff,metalness:.5,roughness:.22,clearcoat:1}))
      inner.scale.set(.9,1.08,.86);inner.rotation.set(.6,.25,-.4);object.add(inner)
      const ring1=new THREE.Mesh(new THREE.TorusGeometry(1.48,.009,8,160),new THREE.MeshBasicMaterial({color:0xd5ff65,transparent:true,opacity:.76}));ring1.rotation.set(.8,.25,.25);object.add(ring1)
      const ring2=new THREE.Mesh(new THREE.TorusGeometry(1.66,.005,8,160),new THREE.MeshBasicMaterial({color:0x9c8aff,transparent:true,opacity:.5}));ring2.rotation.set(-.72,.7,-.38);object.add(ring2)
      const count=innerWidth<680?72:140,arr=new Float32Array(count*3)
      for(let i=0;i<count;i++){const a=Math.random()*Math.PI*2,e=Math.acos(2*Math.random()-1),r=1.9+Math.random()*.58;arr[i*3]=r*Math.sin(e)*Math.cos(a);arr[i*3+1]=r*Math.cos(e);arr[i*3+2]=r*Math.sin(e)*Math.sin(a)}
      const starGeo=new THREE.BufferGeometry();starGeo.setAttribute('position',new THREE.BufferAttribute(arr,3))
      object.add(new THREE.Points(starGeo,new THREE.PointsMaterial({color:0xe0ffd3,size:.019,transparent:true,opacity:.72})))
      scene.add(new THREE.AmbientLight(0xbacbff,1.5))
      const light1=new THREE.PointLight(0xe4fff3,38,12);light1.position.set(-2.4,2.4,3);scene.add(light1)
      const light2=new THREE.PointLight(0x9170ff,30,10);light2.position.set(2.6,-1.2,2);scene.add(light2)
      const light3=new THREE.PointLight(0xcfff57,16,9);light3.position.set(-1.3,-2,-1);scene.add(light3)
      const resize=()=>{const w=el.clientWidth||1,h=el.clientHeight||1;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false);renderer.render(scene,camera)}
      observer=new ResizeObserver(resize);observer.observe(el);resize()
      const move=e=>{const b=el.getBoundingClientRect();tx=((e.clientX-b.left)/b.width-.5)*.7;ty=((e.clientY-b.top)/b.height-.5)*.48}
      const leave=()=>{tx=0;ty=0}
      el.addEventListener('pointermove',move,{passive:true});el.addEventListener('pointerleave',leave,{passive:true})
      const draw=time=>{frame=requestAnimationFrame(draw);px+=(tx-px)*.04;py+=(ty-py)*.04;const t=time*.00017;object.rotation.y=px+(reduced?0:t);object.rotation.x=py+(reduced?0:Math.sin(t*1.5)*.075);core.rotation.z=reduced?0:Math.sin(t)*.08;ring1.rotation.z=.25+t*.4;ring2.rotation.y=.7-t*.28;renderer.render(scene,camera)}
      frame=requestAnimationFrame(draw)
      return()=>{cancelAnimationFrame(frame);observer.disconnect();el.removeEventListener('pointermove',move);el.removeEventListener('pointerleave',leave);scene.traverse(o=>{o.geometry?.dispose();if(Array.isArray(o.material))o.material.forEach(m=>m.dispose());else o.material?.dispose()});renderer.dispose();renderer.domElement.remove()}
    }catch(error){console.warn('NYOTA scene unavailable',error);renderer?.dispose()}
  },[])
  return <div className="scene-wrap" aria-label={lang==='en'?'Interactive 3D sculpture. Move your pointer or finger to explore.':'Sculpture 3D interactive. Déplacez votre doigt ou souris pour explorer.'}><div className="scene-halo"/><div className="scene-canvas" ref={host}/><span className="scene-coord coord-top">NY—01 / FORM STUDY</span><span className="scene-coord coord-bottom">{lang==='en'?'MODELED IN CODE':'FORME GÉNÉRATIVE'} · 00:01</span><i className="scene-cross cross-one">✳</i><i className="scene-cross cross-two">+</i></div>
}

function OrderForm({lang,t,initialService,onClose}){
  const c=t.form,[step,setStep]=useState(1),[service,setService]=useState(initialService||''),[channel,setChannel]=useState('whatsapp'),[serviceIndex,setServiceIndex]=useState(initialService===''?-1:Number(initialService)),[err,setErr]=useState(''),[sent,setSent]=useState(''),[destination,setDestination]=useState(''),[fields,setFields]=useState({idea:'',refs:'',budget:'',timing:'',name:'',contact:'',consent:false})
  const update=(key,value)=>setFields(old=>({...old,[key]:value}))
  useEffect(()=>{document.body.classList.add('dialog-open');const esc=e=>{if(e.key==='Escape')onClose()};window.addEventListener('keydown',esc);return()=>{document.body.classList.remove('dialog-open');window.removeEventListener('keydown',esc)}},[])
  const handoff=e=>{
    e.preventDefault()
    if(!service||!fields.idea.trim()){setErr(c.required);setStep(1);return}
    if(!fields.name.trim()||!fields.contact.trim()||!fields.consent){setErr(c.required);setStep(2);return}
    const message=[lang==='en'?'Hello NYOTA STUDIO — I would like to talk about a project.':'Bonjour NYOTA STUDIO — je souhaite parler d’un projet.','',c.service+': '+c.services[serviceIndex>=0?serviceIndex:Number(service)],c.idea+': '+fields.idea.trim(),fields.refs&&c.refs+': '+fields.refs.trim(),fields.budget&&c.budget+': '+c.budgets[Number(fields.budget)],fields.timing&&c.timing+': '+c.timings[Number(fields.timing)],'',c.name+': '+fields.name.trim(),(channel==='whatsapp'?c.yourWa:c.yourEmail)+': '+fields.contact.trim()].filter(Boolean).join('\n')
    const url=channel==='whatsapp'?'https://wa.me/'+WHATSAPP+'?text='+encodeURIComponent(message):'mailto:'+EMAIL+'?subject='+encodeURIComponent(lang==='en'?'NYOTA STUDIO project request':'Demande de projet — NYOTA STUDIO')+'&body='+encodeURIComponent(message)
    if(channel==='whatsapp')window.open(url,'_blank','noopener,noreferrer');else window.location.href=url
    setDestination(url);setSent(channel);setStep(3);setErr('')
  }
  return <div className="order-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)onClose()}}><section className="order-dialog" role="dialog" aria-modal="true" aria-labelledby="order-title"><div className="dialog-top"><span className="dialog-kicker"><i/> {c.label}</span><button className="dialog-close" onClick={onClose} aria-label={c.close}><X size={19}/></button></div>
  {step<3&&<><div className="dialog-progress"><i className={step>=1?'active':''}/><i className={step>=2?'active':''}/></div><p className="dialog-step">{c.step} 0{step} / 02 <span>— {step===1?c.project:c.about}</span></p></>}
  {step===1&&<form onSubmit={e=>{e.preventDefault();if(!service||!fields.idea.trim()){setErr(c.required);return}setErr('');setStep(2)}}><h2 id="order-title">{c.title1}</h2><p className="dialog-intro">{c.intro1}</p><fieldset className="service-choice"><legend>{c.service} <b>*</b></legend>{c.services.map((name,i)=><button type="button" className={String(i)===service?'choice selected':'choice'} key={name} onClick={()=>{setService(String(i));setServiceIndex(i)}}><i/>{name}</button>)}</fieldset>
  <label className="field-label">{c.idea} <b>*</b><textarea rows="4" required value={fields.idea} onChange={e=>update('idea',e.target.value)} placeholder={c.ideaHint}/></label><label className="field-label">{c.refs}<input type="url" value={fields.refs} onChange={e=>update('refs',e.target.value)} placeholder={c.refsHint}/></label>
  <div className="field-pair"><label className="field-label">{c.budget}<span className="select-wrap"><select value={fields.budget} onChange={e=>update('budget',e.target.value)}><option value="">—</option>{c.budgets.map((x,i)=><option value={i} key={x}>{x}</option>)}</select><ChevronDown size={15}/></span></label><label className="field-label">{c.timing}<span className="select-wrap"><select value={fields.timing} onChange={e=>update('timing',e.target.value)}><option value="">—</option>{c.timings.map((x,i)=><option value={i} key={x}>{x}</option>)}</select><ChevronDown size={15}/></span></label></div>
  {err&&<p role="alert" className="form-error">{err}</p>}<div className="dialog-actions"><button type="button" className="plain-button" onClick={onClose}>{c.close}</button><button type="submit" className="submit-button">{c.next}<ArrowRight size={16}/></button></div></form>}
  {step===2&&<form onSubmit={handoff}><h2 id="order-title">{c.title2}</h2><p className="dialog-intro">{c.intro2}</p><label className="field-label">{c.name} <b>*</b><input required autoComplete="name" value={fields.name} onChange={e=>update('name',e.target.value)} placeholder={c.nameHint}/></label>
  <fieldset className="channel-choice"><legend>{c.channel}</legend><div className="channel-buttons"><button type="button" className={channel==='whatsapp'?'channel-option active':'channel-option'} onClick={()=>{setChannel('whatsapp');update('contact','')}}><i/>{c.wa}</button><button type="button" className={channel==='email'?'channel-option active':'channel-option'} onClick={()=>{setChannel('email');update('contact','')}}><i/>{c.email}</button></div></fieldset>
  <label className="field-label">{channel==='whatsapp'?c.yourWa:c.yourEmail} <b>*</b><input required autoComplete={channel==='whatsapp'?'tel':'email'} type={channel==='whatsapp'?'tel':'email'} value={fields.contact} onChange={e=>update('contact',e.target.value)} placeholder={channel==='whatsapp'?'+243 …':'name@example.com'}/></label>
  <label className="consent-line"><input type="checkbox" required checked={fields.consent} onChange={e=>update('consent',e.target.checked)}/><span>{c.consent}</span></label>{err&&<p role="alert" className="form-error">{err}</p>}
  <div className="dialog-actions"><button type="button" className="plain-button" onClick={()=>{setStep(1);setErr('')}}><ArrowLeft size={15}/>{c.back}</button><button type="submit" className="submit-button">{c.send}<ArrowUpRight size={16}/></button></div></form>}
  {step===3&&<div className="confirmation" aria-live="polite"><span className="confirmation-mark"><Check size={24}/></span><p className="section-tag">{c.label}</p><h2 id="order-title">{c.done}</h2><p className="dialog-intro">{sent==='whatsapp'?c.doneWA:c.doneEmail}</p><p className="reply-note">{c.reply}</p><div className="dialog-actions"><button className="plain-button" onClick={onClose}>{c.close}</button><a href={destination} target={sent==='whatsapp'?'_blank':undefined} rel="noreferrer" className="submit-button">{c.again}<ArrowUpRight size={16}/></a></div></div>}
  </section></div>
}

function App(){
  const [lang,setLang]=useState('en'),[menu,setMenu]=useState(false),[open,setOpen]=useState(-1),[order,setOrder]=useState(false),[initial,setInitial]=useState('')
  const t=data[lang]
  const begin=(service='')=>{setInitial(service);setOrder(true);setMenu(false)}
  const toggleLang=()=>{setLang(x=>x==='en'?'fr':'en');setMenu(false)}
  useEffect(()=>{document.documentElement.lang=lang},[lang])
  return <>
    <header className="header"><Mark/><nav className={menu?'nav nav-open':'nav'} aria-label={lang==='en'?'Main navigation':'Navigation principale'}>{t.nav.map((x,i)=><a href={['#services','#work','#approach'][i]} key={x} onClick={()=>setMenu(false)}>{x}</a>)}<button className="mobile-lang" onClick={toggleLang}><Globe2 size={15}/>{lang==='en'?'FR · Français':'EN · English'}<ArrowUpRight size={14}/></button><button className="mobile-order" onClick={()=>begin()}>{t.order}<ArrowUpRight size={15}/></button></nav><div className="header-actions"><button className="lang desktop-lang" onClick={toggleLang} aria-label={lang==='en'?'Passer en français':'Switch to English'}><Globe2 size={14}/><span>{lang.toUpperCase()}</span><span className="lang-muted">/ {lang==='en'?'FR':'EN'}</span></button><button className="header-order" onClick={()=>begin()}>{t.order}<ArrowUpRight size={14}/></button></div><button className="menu-toggle" aria-expanded={menu} aria-label={menu?'Close menu':'Open menu'} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></header>
    <main><section className="hero" id="home"><div className="hero-grain"/><div className="hero-content"><p className="eyebrow"><i/>{t.eyebrow}</p><p className="hero-preface">{lang==='en'?'THE WEB, WITH A PULSE.':'LE WEB, AVEC DU SOUFFLE.'}</p><h1>{t.title}</h1><p className="hero-tagline">{t.tagline}</p><p className="hero-intro">{t.intro}</p><div className="hero-actions"><button className="primary-button" onClick={()=>begin()}>{t.order}<ArrowUpRight size={17}/></button><a className="text-link" href="#services">{t.explore}<ArrowDownRight size={16}/></a></div></div><div className="hero-scene"><ThreeScene lang={lang}/><div className="scene-legend"><span>{lang==='en'?'NYOTA — OBJECT STUDY':'NYOTA — ÉTUDE D’OBJET'}</span><span>{lang==='en'?'A small world, made to move.':'Un petit monde, fait pour bouger.'}</span></div><p className="scene-hint"><i/>{t.hint}</p></div><div className="hero-bottom"><span>01 — 04</span><span className="hero-bottom-line"/><a href="#services">{lang==='en'?'Scroll to explore':'Défiler pour explorer'}<ArrowDownRight size={14}/></a><span>NY—ST / 2026</span></div></section>
    <div className="manifesto"><span>01</span><p>{lang==="en" ? "Not another screen to scroll past." : "Un écran de plus à faire défiler."}<br/><span className="manifesto-emphasis">{lang==="en" ? "A place you want to stay in." : "Un lieu où vous avez envie de rester."}</span></p><span className="manifesto-star">✳</span></div>
    <section className="services-section section" id="services"><div className="section-head"><div><p className="section-tag"><span>01</span> / {t.nav[0]}</p><h2>{t.serviceHead}</h2></div><p className="section-intro">{t.serviceIntro}</p></div><div className="services-grid">{t.services.map((s,i)=><article className={open===i?'service-card expanded':'service-card'} key={s[0]}><div className="service-top"><span className="service-num">0{i+1} / 03</span><span className={'service-symbol symbol-'+i}><i/><i/><i/></span><button className="service-toggle" aria-expanded={open===i} onClick={()=>setOpen(open===i?-1:i)}>{open===i?t.less:t.more}<span>{open===i?<X size={16}/>:<ArrowUpRight size={16}/>}</span></button></div><button className="service-name" aria-expanded={open===i} onClick={()=>setOpen(open===i?-1:i)}><h3>{s[0]}</h3></button><p className="service-short">{s[1]}</p>{open===i&&<div className="service-detail"><p>{s[2]}</p><ul>{s[3].map(item=><li key={item}><Check size={14}/>{item}</li>)}</ul><button className="service-cta" onClick={()=>begin(String(i))}>{t.projectStart}<ArrowUpRight size={15}/></button></div>}</article>)}</div><p className="service-foot"><Sparkles size={15}/>{t.serviceFoot}</p></section>
    <section className="work-section section" id="work"><div className="section-head work-head"><div><p className="section-tag"><span>02</span> / {t.nav[1]}</p><h2>{t.workHead}</h2></div><p className="section-intro">{t.workIntro}</p></div><div className="projects-grid">{t.projects.map((p,i)=><article className={'project project-'+i} key={p[0]}><a className="project-image" href={p[5]} target="_blank" rel="noreferrer" aria-label={t.visit+': '+p[0]}><img src={p[3]} alt={p[4]} loading="lazy"/><span className="image-shade"/><span className="image-stamp">{p[6]}<i>↗</i></span><span className="project-number">0{i+1} / 02</span></a><div className="project-meta"><span>{p[1]}</span><span className="personal-label"><i/>{t.personal}</span></div><h3>{p[0]}</h3><p className="project-desc">{p[2]}</p><a className="project-link" href={p[5]} target="_blank" rel="noreferrer">{t.visit}<ArrowUpRight size={14}/></a></article>)}</div></section>
    <section className="approach-section section" id="approach"><div className="approach-intro"><p className="section-tag"><span>03</span> / {t.nav[2]}</p><h2>{t.approachHead}</h2><p className="section-intro">{t.approachIntro}</p></div><div className="approach-list">{t.approach.map((item,i)=><article key={item[0]}><span>0{i+1}</span><div><h3>{item[0]}</h3><p>{item[1]}</p></div><b>↗</b></article>)}</div></section>
    <section className="contact-section" id="contact"><div className="contact-orbit"><span/><i>✳</i></div><div className="contact-inner"><p className="section-tag"><span>04</span> / {lang==='en'?'THE FIRST HELLO':'LE PREMIER ÉCHANGE'}</p><h2>{t.contactHead}</h2><p className="contact-copy">{t.contactIntro}</p><div className="contact-actions"><button className="primary-button" onClick={()=>begin()}>{t.order}<ArrowUpRight size={17}/></button><a href={'https://wa.me/'+WHATSAPP+'?text='+encodeURIComponent(lang==='en'?'Hello NYOTA STUDIO, I would like to discuss a project.':'Bonjour NYOTA STUDIO, je souhaite parler d’un projet.')} target="_blank" rel="noreferrer" className="contact-direct"><span>↗</span>{t.contactWA}</a><a href={'mailto:'+EMAIL} className="contact-direct"><span>✉</span>{t.contactEmail}</a></div><p className="contact-address">+243 {WHATSAPP.slice(3)} <i>·</i> {EMAIL}</p></div></section></main>
    <footer className="footer"><Mark/><p>{t.footer}</p><span>{t.location}</span><a href="#home">{t.top} ↑</a><small>© NYOTA STUDIO · {new Date().getFullYear()}</small></footer>
    {order&&<OrderForm key={lang+'-'+initial} lang={lang} t={t} initialService={initial} onClose={()=>setOrder(false)}/>}
  </>
}
createRoot(document.getElementById('root')).render(<App/>)
