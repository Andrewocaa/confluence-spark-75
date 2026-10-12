import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Brand() {
  return <Link to="/" className="brand" aria-label="Confluence Management Consulting home"><svg className="brand-mark" viewBox="0 0 40 44" fill="none" aria-hidden="true"><path d="M5 5L22 22L5 39M16 5L33 22L16 39" stroke="currentColor" strokeWidth="3.1"/><path d="M5 22H33" stroke="currentColor" strokeWidth="3.1"/></svg><div><div className="brand-name">confluence</div><div className="brand-subtitle">Management Consulting</div></div></Link>
}
const nav = [{ to: '/' as const, label: 'Home' }, { to: '/about' as const, label: 'About us' }, { to: '/services' as const, label: 'Our services' }, { to: '/contact' as const, label: 'Contact' }]
export function SiteHeader() {
  const [open,setOpen] = useState(false)
  return <header className="site-header"><div className="site-container header-inner"><Brand/><nav className="desktop-nav" aria-label="Main navigation">{nav.map(item=><Link key={item.to} to={item.to} className="nav-link" activeOptions={{ exact:true }}>{item.label}</Link>)}</nav><Button variant="brand" asChild className="header-cta"><Link to="/contact">Let’s talk <ArrowUpRight/></Link></Button><Button variant="ghost" size="icon" className="mobile-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</Button></div>{open&&<nav className="mobile-nav" aria-label="Mobile navigation">{nav.map(item=><Link key={item.to} to={item.to} className="nav-link" onClick={()=>setOpen(false)}>{item.label}</Link>)}</nav>}</header>
}
export function CallToAction() {
  return <section className="cta-band"><div className="site-container cta-inner"><div><h2>Your next project. Our shared ambition.</h2><p>Let’s connect the right people to your mission-critical project.</p></div><Button variant="secondary" asChild size="lg" className="cta-dark"><Link to="/contact">Start a conversation <ArrowUpRight/></Link></Button></div></section>
}
export function SiteFooter() {
  return <footer className="site-footer"><div className="site-container"><div className="footer-grid"><div className="footer-brand"><Brand/><p className="footer-description">Your mission-critical consultancy partner. Connecting projects with exceptional people across Europe.</p></div><div><div className="footer-title">Explore</div><div className="footer-links"><Link to="/about">About Confluence</Link><Link to="/services">Our services</Link><Link to="/contact">Get in touch</Link></div></div><div><div className="footer-title">Stay connected</div><div className="footer-links"><a href="https://www.linkedin.com/company/confluence-management-consulting" target="_blank" rel="noreferrer">LinkedIn ↗</a><span>Working across Europe</span></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Confluence Management Consulting. All rights reserved.</span><div className="footer-legal"><a href="https://www.confluencemanagementconsulting.com/whistleblowerpolicy" target="_blank" rel="noreferrer">Whistleblowing policy ↗</a><a href="https://assets.zyrosite.com/AMqnLQaZy6I4Ro3y/confluence-code-of-conduct-mv07l5zqjQhEyEQp.pdf" target="_blank" rel="noreferrer">Code of conduct ↗</a></div></div></div></footer>
}
