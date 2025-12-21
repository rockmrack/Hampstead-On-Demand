'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header')
      const backToTop = document.getElementById('backToTop')
      
      if (window.scrollY > 50) {
        header?.classList.add('scrolled')
      } else {
        header?.classList.remove('scrolled')
      }
      
      if (window.scrollY > 300) {
        backToTop?.classList.add('visible')
      } else {
        backToTop?.classList.remove('visible')
      }
    }

    const toggleMenu = () => {
      document.getElementById('navList')?.classList.toggle('active')
    }

    window.addEventListener('scroll', handleScroll)
    document.querySelector('.mobile-menu-btn')?.addEventListener('click', toggleMenu)
    document.getElementById('backToTop')?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const target = document.querySelector((anchor as HTMLAnchorElement).getAttribute('href') || '')
        if (target) {
          const offset = 200
          const targetPosition = (target as HTMLElement).offsetTop - offset
          window.scrollTo({ top: targetPosition, behavior: 'smooth' })
          document.getElementById('navList')?.classList.remove('active')
        }
      })
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <a href="#main" className="sr-only">Skip to main content</a>

      {/* Header */}
      <header className="header fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-[12px] shadow-[0_1px_0_rgba(0,0,0,0.05)] z-[1000] transition-all duration-300" id="header">
        <div className="max-w-[1400px] mx-auto px-6 py-3.5 flex justify-between items-center">
          <a href="/" className="flex flex-col">
            <span className="font-heading text-[1.375rem] font-bold text-primary tracking-[-0.02em]">Hampstead On-Demand</span>
            <span className="font-body text-[0.6875rem] font-semibold tracking-[0.15em] text-accent uppercase -mt-0.5">Property Maintenance</span>
          </a>
          
          <div className="flex items-center gap-6">
            <div className="hidden lg:block text-right pr-6 border-r border-light-grey">
              <div className="text-sm text-grey leading-tight"><strong className="text-primary">Unit 3, Palace Court</strong></div>
              <div className="text-sm text-grey leading-tight">250 Finchley Road, NW3 6DN</div>
              <span className="inline-block mt-1 px-2 py-0.5 bg-gradient-to-r from-[#8b7355] via-[#a0896d] to-[#8b7355] text-white text-[0.625rem] font-bold tracking-[0.1em] uppercase rounded-sm">Same-Day Service</span>
            </div>
            
            <a href="tel:07459345456" className="flex items-center gap-2 text-primary hover:text-accent font-semibold text-[0.9375rem] transition-colors">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              07459 345456
            </a>
            
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-semibold uppercase tracking-[0.05em] rounded transition-all hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(139,115,85,0.25)]">Book Now</a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="nav fixed top-[68px] left-0 right-0 z-[999] bg-primary shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
        <div className="max-w-full mx-auto p-0 bg-primary relative">
          <button className="mobile-menu-btn hidden lg:hidden absolute right-4 top-1/2 -translate-y-1/2 bg-transparent border-none text-white text-2xl p-2 cursor-pointer">☰</button>
          <ul className="nav-list flex justify-around list-none gap-0 w-full max-w-[1400px] mx-auto" id="navList">
            <li className="flex-1 text-center"><a href="/" className="nav-link block px-4 py-6 text-white/95 text-[0.9375rem] font-semibold tracking-[0.08em] uppercase relative transition-colors hover:text-white hover:bg-white/5">Renovations</a></li>
            <li className="flex-1 text-center"><a href="#services" className="nav-link block px-4 py-6 text-white/95 text-[0.9375rem] font-semibold tracking-[0.08em] uppercase relative transition-colors hover:text-white hover:bg-white/5">All Services</a></li>
            <li className="flex-1 text-center"><a href="#plumbing" className="nav-link block px-4 py-6 text-white/95 text-[0.9375rem] font-semibold tracking-[0.08em] uppercase relative transition-colors hover:text-white hover:bg-white/5">Plumbing</a></li>
            <li className="flex-1 text-center"><a href="#electrical" className="nav-link block px-4 py-6 text-white/95 text-[0.9375rem] font-semibold tracking-[0.08em] uppercase relative transition-colors hover:text-white hover:bg-white/5">Electrical</a></li>
            <li className="flex-1 text-center"><a href="#housekeeping" className="nav-link block px-4 py-6 text-white/95 text-[0.9375rem] font-semibold tracking-[0.08em] uppercase relative transition-colors hover:text-white hover:bg-white/5">Cleaning</a></li>
            <li className="flex-1 text-center"><a href="#gardens" className="nav-link block px-4 py-6 text-white/95 text-[0.9375rem] font-semibold tracking-[0.08em] uppercase relative transition-colors hover:text-white hover:bg-white/5">Gardens</a></li>
            <li className="flex-1 text-center"><a href="#contact" className="nav-link block px-4 py-6 text-white/95 text-[0.9375rem] font-semibold tracking-[0.08em] uppercase relative transition-colors hover:text-white hover:bg-white/5">Book Now</a></li>
          </ul>
        </div>
      </nav>

      <main id="main" className="pt-[136px]">
        {/* Hero Section */}
        <section className="hero px-6 py-[100px] md:py-[180px] bg-gradient-to-br from-primary to-primary-light relative overflow-hidden" id="home">
          <div className="absolute inset-0" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
          
          <div className="max-w-[1000px] mx-auto text-center relative z-10">
            <div className="hero-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-[10px] px-5 py-2 rounded-[30px] mb-6 text-accent-light text-[0.8125rem] font-semibold tracking-[0.1em] uppercase">
              <svg className="w-3.5 h-3.5 fill-accent-light" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              Same-Day Bookings Available
              <svg className="w-3.5 h-3.5 fill-accent-light" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            
            <h1 className="hero-title text-[clamp(2rem,5vw,3.25rem)] text-white mb-5 leading-[1.2] font-heading font-bold">Professional Property Maintenance On-Demand</h1>
            
            <p className="hero-subtitle text-lg text-white/90 max-w-[700px] mx-auto mb-8 leading-[1.8]">From emergency plumbing to deep cleaning, our trusted local tradespeople handle all your property maintenance needs. Fixed prices. Vetted professionals. No call-out fees.</p>
            
            <div className="hero-stats flex justify-center gap-12 flex-wrap mb-10">
              <div className="hero-stat text-center">
                <div className="hero-stat-number font-heading text-[2.5rem] font-bold text-accent-light leading-none">57</div>
                <div className="hero-stat-label mt-1 text-sm text-white/80 uppercase tracking-[0.05em]">Services</div>
              </div>
              <div className="hero-stat text-center">
                <div className="hero-stat-number font-heading text-[2.5rem] font-bold text-accent-light leading-none">16</div>
                <div className="hero-stat-label mt-1 text-sm text-white/80 uppercase tracking-[0.05em]">Categories</div>
              </div>
              <div className="hero-stat text-center">
                <div className="hero-stat-number font-heading text-[2.5rem] font-bold text-accent-light leading-none">2hr</div>
                <div className="hero-stat-label mt-1 text-sm text-white/80 uppercase tracking-[0.05em]">Response</div>
              </div>
              <div className="hero-stat text-center">
                <div className="hero-stat-number font-heading text-[2.5rem] font-bold text-accent-light leading-none">5★</div>
                <div className="hero-stat-label mt-1 text-sm text-white/80 uppercase tracking-[0.05em]">Rated</div>
              </div>
            </div>
            
            <div className="hero-actions flex flex-wrap justify-center gap-4">
              <a href="#services" className="btn btn-white btn-lg inline-flex items-center gap-2 px-8 py-4 bg-white text-primary text-[0.9375rem] font-semibold uppercase tracking-[0.05em] rounded transition-all hover:bg-light-grey hover:-translate-y-0.5">View All Services</a>
              <a href="tel:07459345456" className="btn btn-outline btn-lg inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white text-[0.9375rem] font-semibold uppercase tracking-[0.05em] rounded border-2 border-white/30 transition-all hover:bg-white hover:text-primary">Call Now</a>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="trust-bar bg-light-grey px-6 py-8">
          <div className="max-w-[1400px] mx-auto grid grid-cols-5 gap-4 text-center max-lg:grid-cols-3 max-sm:grid-cols-2">
            <div className="trust-stat p-3">
              <div className="trust-stat-icon w-10 h-10 mx-auto mb-2 bg-accent rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/></svg>
              </div>
              <div className="trust-stat-number font-heading text-2xl font-bold text-accent mb-1">DBS</div>
              <div className="trust-stat-label text-xs font-semibold text-primary uppercase tracking-[0.05em]">Checked Staff</div>
            </div>
            <div className="trust-stat p-3">
              <div className="trust-stat-icon w-10 h-10 mx-auto mb-2 bg-accent rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24z"/></svg>
              </div>
              <div className="trust-stat-number font-heading text-2xl font-bold text-accent mb-1">5.0</div>
              <div className="trust-stat-label text-xs font-semibold text-primary uppercase tracking-[0.05em]">Average Rating</div>
            </div>
            <div className="trust-stat p-3">
              <div className="trust-stat-icon w-10 h-10 mx-auto mb-2 bg-accent rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
              </div>
              <div className="trust-stat-number font-heading text-2xl font-bold text-accent mb-1">Fixed</div>
              <div className="trust-stat-label text-xs font-semibold text-primary uppercase tracking-[0.05em]">Pricing</div>
            </div>
            <div className="trust-stat p-3">
              <div className="trust-stat-icon w-10 h-10 mx-auto mb-2 bg-accent rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
              </div>
              <div className="trust-stat-number font-heading text-2xl font-bold text-accent mb-1">2hr</div>
              <div className="trust-stat-label text-xs font-semibold text-primary uppercase tracking-[0.05em]">Response Time</div>
            </div>
            <div className="trust-stat p-3">
              <div className="trust-stat-icon w-10 h-10 mx-auto mb-2 bg-accent rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
              </div>
              <div className="trust-stat-number font-heading text-2xl font-bold text-accent mb-1">£10M</div>
              <div className="trust-stat-label text-xs font-semibold text-primary uppercase tracking-[0.05em]">Insured</div>
            </div>
          </div>
        </section>

        {/* Services Coming Soon Placeholder - Full implementation would be very large */}
        <section className="section px-6 py-24" id="services">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-[700px] mx-auto mb-16">
              <span className="section-label inline-block text-xs font-bold tracking-[0.15em] uppercase text-accent mb-4 relative">
                <span className="before:content-[''] before:absolute before:top-1/2 before:right-[calc(100%+1rem)] before:w-10 before:h-px before:bg-accent after:content-[''] after:absolute after:top-1/2 after:left-[calc(100%+1rem)] after:w-10 after:h-px after:bg-accent">Our Services</span>
              </span>
              <h2 className="section-title text-[clamp(1.75rem,3vw,2.5rem)] mb-4 font-heading font-bold text-primary">57 Services Across 16 Categories</h2>
              <p className="section-description text-[1.0625rem] text-grey leading-[1.8]">From quick fixes to complete property maintenance packages. All prices include labour, materials, and our satisfaction guarantee.</p>
            </div>
            
            <div className="text-center py-20">
              <p className="text-2xl text-primary mb-6">Complete service listings coming soon!</p>
              <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold uppercase tracking-wide rounded transition-all hover:bg-accent-light hover:-translate-y-0.5">Book a Service Now</a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section px-6 py-24" id="contact">
          <div className="max-w-[1400px] mx-auto">
            <div className="contact-container max-w-[900px] mx-auto bg-gradient-to-br from-primary to-primary-light rounded-2xl p-16 text-center relative overflow-hidden">
              <div className="absolute top-[-50%] right-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(139,115,85,0.1)_0%,transparent_60%)] animate-[rotate_30s_linear_infinite]"></div>
              
              <div className="relative z-10">
                <h2 className="contact-title text-[clamp(1.5rem,3vw,2rem)] text-white mb-3 font-heading font-bold">Ready to Book?</h2>
                <p className="contact-subtitle text-[1.0625rem] text-white/90 mb-10">Get in touch for same-day service or schedule ahead. Our friendly team is here to help.</p>
                
                <div className="contact-options flex flex-wrap justify-center gap-4">
                  <a href="tel:07459345456" className="contact-option flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 rounded-lg text-white transition-all hover:bg-accent hover:border-accent hover:-translate-y-0.5">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                    <div className="text-left">
                      <div className="contact-option-label text-xs uppercase tracking-[0.05em] opacity-80">Call Us</div>
                      <div className="contact-option-value text-lg font-semibold">07459 345456</div>
                    </div>
                  </a>
                  <a href="https://wa.me/447459345456" className="contact-option flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 rounded-lg text-white transition-all hover:bg-accent hover:border-accent hover:-translate-y-0.5">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    <div className="text-left">
                      <div className="contact-option-label text-xs uppercase tracking-[0.05em] opacity-80">WhatsApp</div>
                      <div className="contact-option-value text-lg font-semibold">Message Us</div>
                    </div>
                  </a>
                  <a href="mailto:hello@hampsteadrenovations.co.uk" className="contact-option flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 rounded-lg text-white transition-all hover:bg-accent hover:border-accent hover:-translate-y-0.5">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    <div className="text-left">
                      <div className="contact-option-label text-xs uppercase tracking-[0.05em] opacity-80">Email</div>
                      <div className="contact-option-value text-lg font-semibold">Get a Quote</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer bg-dark text-white px-6 py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="footer-grid grid grid-cols-4 gap-12 mb-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <div className="footer-column">
              <h3 className="text-[1.0625rem] font-bold text-accent-light mb-5">Hampstead On-Demand</h3>
              <address className="not-italic text-white/70 leading-[1.7] text-[0.9375rem]">
                Office & Showroom:<br />
                Unit 3, Palace Court<br />
                250 Finchley Road<br />
                Hampstead, London NW3 6DN
              </address>
              <div className="footer-info mt-4 text-white/70 text-sm leading-[1.8]">
                <strong className="text-white/90">Booking Hours:</strong><br />
                Mon-Fri: 7am - 9pm<br />
                Saturday: 8am - 6pm<br />
                Sunday: 9am - 5pm
              </div>
            </div>
            
            <div className="footer-column">
              <h3 className="text-[1.0625rem] font-bold text-accent-light mb-5">Popular Services</h3>
              <div className="footer-links flex flex-col gap-2.5">
                <a href="#plumbing" className="footer-link text-white/70 text-[0.9375rem] transition-all hover:text-accent-light hover:translate-x-1">Plumbing & Heating</a>
                <a href="#electrical" className="footer-link text-white/70 text-[0.9375rem] transition-all hover:text-accent-light hover:translate-x-1">Electrical</a>
                <a href="#handyman" className="footer-link text-white/70 text-[0.9375rem] transition-all hover:text-accent-light hover:translate-x-1">Handyman</a>
                <a href="#housekeeping" className="footer-link text-white/70 text-[0.9375rem] transition-all hover:text-accent-light hover:translate-x-1">Housekeeping</a>
              </div>
            </div>
            
            <div className="footer-column">
              <h3 className="text-[1.0625rem] font-bold text-accent-light mb-5">Specialist Services</h3>
              <div className="footer-links flex flex-col gap-2.5">
                <a href="#carpentry" className="footer-link text-white/70 text-[0.9375rem] transition-all hover:text-accent-light hover:translate-x-1">Carpentry</a>
                <a href="#painting" className="footer-link text-white/70 text-[0.9375rem] transition-all hover:text-accent-light hover:translate-x-1">Painting & Decorating</a>
                <a href="#roofing" className="footer-link text-white/70 text-[0.9375rem] transition-all hover:text-accent-light hover:translate-x-1">Roofing & Gutters</a>
              </div>
            </div>
            
            <div className="footer-column">
              <h3 className="text-[1.0625rem] font-bold text-accent-light mb-5">Contact Us</h3>
              <div className="footer-links flex flex-col gap-2.5">
                <a href="tel:07459345456" className="footer-link text-white/70 text-[0.9375rem] transition-all hover:text-accent-light hover:translate-x-1">07459 345456</a>
                <a href="https://wa.me/447459345456" className="footer-link text-white/70 text-[0.9375rem] transition-all hover:text-accent-light hover:translate-x-1">WhatsApp</a>
              </div>
              <div className="footer-certifications flex flex-wrap gap-2.5 mt-4">
                <span className="cert-badge px-3.5 py-1.5 bg-accent/20 border border-accent rounded text-accent-light text-xs font-semibold">DBS Checked</span>
                <span className="cert-badge px-3.5 py-1.5 bg-accent/20 border border-accent rounded text-accent-light text-xs font-semibold">Gas Safe</span>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom pt-10 border-t border-white/10 text-center text-white/50 text-[0.8125rem]">
            <p>© 2024 Hampstead Renovations Ltd. All rights reserved. | Property Maintenance Since 2009</p>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <button 
        className="back-to-top fixed bottom-8 right-8 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-xl shadow-[0_4px_15px_rgba(139,115,85,0.3)] opacity-0 invisible transition-all z-[990] cursor-pointer border-none hover:bg-accent-light hover:-translate-y-1" 
        id="backToTop" 
        aria-label="Back to top"
      >
        ↑
      </button>

      <style jsx>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }
        
        .header.scrolled {
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 3px;
          background: var(--accent);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .nav-link:hover::after {
          width: 60%;
        }
        
        .back-to-top.visible {
          opacity: 1;
          visibility: visible;
        }
        
        @media (max-width: 1024px) {
          .nav {
            position: relative;
            top: 0;
          }
          
          .mobile-menu-btn {
            display: block !important;
          }
          
          .nav-list {
            flex-direction: column;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }
          
          .nav-list.active {
            max-height: 500px;
          }
          
          .nav-link {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
          }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
