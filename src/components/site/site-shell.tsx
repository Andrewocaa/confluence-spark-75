import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import originalLogo from '@/assets/confluence-original-logo.png'
import { EnquiryDialog } from '@/components/site/enquiry-dialog'

export function Brand() {
  return <Link to="/" className="brand" aria-label="Confluence Management Consulting home"><img className="brand-logo" src={originalLogo} alt="Confluence" width={241} height={252}/></Link>
}
const nav = [{ to: '/' as const, label: 'Home' }, { to: '/about' as const, label: 'About us' }, { to: '/services' as const, label: 'Our services' }, { to: '/podcast' as const, label: 'Podcast' }, { to: '/contact' as const, label: 'Contact' }]
export function SiteHeader() {
  const [open,setOpen] = useState(false)
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  return (
    <>
      <header className="site-header">
        <div className="site-container header-inner">
          <Brand/>
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map(item=><Link key={item.to} to={item.to} className="nav-link" activeOptions={{ exact:true }}>{item.label}</Link>)}
          </nav>
          <Button variant="brand" className="header-cta cursor-pointer gap-2" onClick={()=>setEnquiryOpen(true)}>
            Let’s talk <ArrowUpRight size={14}/>
          </Button>
          <Button variant="ghost" size="icon" className="mobile-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>
            {open?<X/>:<Menu/>}
          </Button>
        </div>
        {open&&(
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {nav.map(item=><Link key={item.to} to={item.to} className="nav-link" onClick={()=>setOpen(false)}>{item.label}</Link>)}
            <Button variant="brand" className="w-full mt-2 gap-2 cursor-pointer" onClick={()=>{setOpen(false); setEnquiryOpen(true);}}>
              Let’s talk <ArrowUpRight size={14}/>
            </Button>
          </nav>
        )}
      </header>
      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} />
    </>
  )
}
export function CallToAction() {
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  return (
    <>
      <section className="cta-band">
        <div className="site-container cta-inner">
          <div>
            <h2>Your next project. Our shared ambition.</h2>
            <p>Let’s connect the right people to your mission-critical project.</p>
          </div>
          <Button variant="secondary" size="lg" className="cta-dark cursor-pointer gap-2" onClick={()=>setEnquiryOpen(true)}>
            Start a conversation <ArrowUpRight size={16}/>
          </Button>
        </div>
      </section>
      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} />
    </>
  )
}
export function SiteFooter() {
  return <footer className="site-footer"><div className="site-container"><div className="footer-grid"><div className="footer-brand"><Brand/><p className="footer-description">Your mission-critical consultancy partner. Connecting projects with exceptional people across Europe.</p></div><div><div className="footer-title">Explore</div><div className="footer-links"><Link to="/about">About Confluence</Link><Link to="/services">Our services</Link><Link to="/podcast">Podcast</Link><Link to="/contact">Get in touch</Link></div></div><div><div className="footer-title">Stay connected</div><div className="footer-links"><a href="https://www.linkedin.com/company/confluence123" target="_blank" rel="noreferrer">LinkedIn ↗</a><span>Working across Europe</span></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Confluence Management Consulting. All rights reserved.</span><div className="footer-legal"><Link to="/whistleblowing-policy">Whistleblowing policy</Link><Link to="/code-of-conduct">Code of conduct</Link></div></div></div></footer>
}
