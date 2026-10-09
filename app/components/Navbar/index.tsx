'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import { useScrolled } from '@/hooks/useScrolled';
import { useActiveSection } from '@/hooks/useActiveSection';
import { navItems } from '@/lib/data';

export default function Navbar() {
  const scrolled = useScrolled(60);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(['about', 'featured', 'brands']);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background 0.5s, border-color 0.5s',
          background: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(139,127,232,0.18)' : '1px solid transparent',
        }}
      >
        <div className="site-container">
          <nav
            style={{
              height: '72px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem',
            }}
          >
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-heading"
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#FFFFFF',
                textDecoration: 'none',
                flexShrink: 0,
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#8b7fe8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
            >
              Shuchir Suri
            </a>

            {/* Desktop Nav */}
            <ul
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2.5rem',
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}
              className="nav-desktop"
            >
              {navItems.map((item) => {
                const id = item.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <li key={item.href}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="font-body"
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        letterSpacing: '0.04em',
                        color: isActive ? '#8b7fe8' : '#c0c6cc',
                        padding: '0.25rem 0',
                        position: 'relative',
                        transition: 'color 0.3s',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) e.currentTarget.style.color = '#c0c6cc';
                      }}
                    >
                      {item.label}
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          height: '1px',
                          background: '#8b7fe8',
                          width: isActive ? '100%' : '0',
                          transition: 'width 0.3s',
                        }}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* CTA */}
            <button
              onClick={() => handleNavClick('#contact')}
              className="font-body nav-cta"
              style={{
                background: 'none',
                border: '1px solid rgba(139,127,232,0.4)',
                color: '#8b7fe8',
                fontSize: '0.8125rem',
                letterSpacing: '0.06em',
                padding: '0.625rem 1.5rem',
                cursor: 'pointer',
                flexShrink: 0,
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#8b7fe8';
                e.currentTarget.style.color = '#000000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'none';
                e.currentTarget.style.color = '#8b7fe8';
              }}
            >
              Get in Touch
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="nav-hamburger"
              style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: '0.25rem' }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
              background: '#000000',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
            }}
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 + 0.1 }}
                onClick={() => handleNavClick(item.href)}
                className="font-heading"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '2.5rem',
                  color: '#FFFFFF',
                  transition: 'color 0.3s',
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 767px) {
          .nav-desktop { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 768px) {
          .nav-hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
}
