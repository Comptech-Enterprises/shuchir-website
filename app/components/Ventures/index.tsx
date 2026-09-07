'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { ventures } from '@/lib/data';

const ease = [0.22, 1, 0.36, 1] as const;

function VentureRow({
  venture,
  index,
}: {
  venture: (typeof ventures)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const isLink = venture.website && venture.website !== '#';
  const reversed = index % 2 === 1;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease }}
      className="venture-row"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(2.5rem, 5vw, 5rem)',
        alignItems: 'center',
        padding: 'clamp(2.5rem, 5vw, 3.5rem) 0',
        borderTop: '1px solid rgba(200,161,90,0.16)',
        direction: reversed ? 'rtl' : 'ltr',
      }}
    >
      {/* ── Mark panel ── */}
      <div
        style={{
          direction: 'ltr',
          aspectRatio: '16 / 11',
          background: 'linear-gradient(160deg, #161616 0%, #0f0f0f 100%)',
          border: '1px solid rgba(200,161,90,0.16)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <span style={{ position: 'absolute', top: 10, left: 10, width: 14, height: 14, borderTop: '1px solid #C8A15A', borderLeft: '1px solid #C8A15A', opacity: 0.6 }} />
        <span style={{ position: 'absolute', bottom: 10, right: 10, width: 14, height: 14, borderBottom: '1px solid #C8A15A', borderRight: '1px solid #C8A15A', opacity: 0.6 }} />

        {venture.logo ? (
          <Image
            src={venture.logo}
            alt={`${venture.name} logo`}
            width={200}
            height={140}
            style={{ maxWidth: '58%', maxHeight: '44%', width: 'auto', height: 'auto', objectFit: 'contain' }}
          />
        ) : (
          <span className="font-heading" style={{ fontSize: '2.6rem', fontWeight: 700, color: '#C8A15A' }}>
            {venture.monogram}
          </span>
        )}
      </div>

      {/* ── Copy ── */}
      <div style={{ direction: 'ltr' }}>
        <div
          className="font-body"
          style={{ fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6a6a6a', marginBottom: '1rem' }}
        >
          {venture.category} <span style={{ color: '#C8A15A' }}>·</span> {venture.year}
        </div>

        <h3
          className="font-heading"
          style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.15rem)', fontWeight: 700, letterSpacing: '-0.01em', margin: '0 0 0.9rem' }}
        >
          {venture.name}
        </h3>

        <div
          className="font-heading"
          style={{ fontStyle: 'italic', color: '#D4B87A', fontSize: '1rem', marginBottom: '1.1rem' }}
        >
          {venture.tagline}
        </div>

        <p className="font-body" style={{ color: '#A1A1A1', fontSize: '0.94rem', lineHeight: 1.8, maxWidth: '52ch', marginBottom: '1.4rem' }}>
          {venture.description}
        </p>

        <a
          href={venture.website}
          {...(isLink ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="font-body"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.78rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#C8A15A',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(200,161,90,0.35)',
            paddingBottom: '2px',
          }}
        >
          Visit site
          <RiArrowRightUpLine size={15} />
        </a>
      </div>
    </motion.article>
  );
}

export default function Ventures() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="ventures" ref={ref} style={{ background: '#0A0A0A', padding: '7rem 0', position: 'relative' }}>
      <div className="site-container">
        {/* ── Section header ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <span style={{ width: '2rem', height: '1px', background: '#C8A15A', flexShrink: 0 }} />
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="font-body"
            style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: '#C8A15A', textTransform: 'uppercase' }}
          >
            Ventures
          </motion.span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="font-heading"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, color: '#F5F5F5', letterSpacing: '-0.02em', lineHeight: 1.1, margin: '0 0 1rem', maxWidth: '20ch' }}
        >
          The brands I&apos;ve <span className="text-gradient">built</span>.
        </motion.h2>

        {/* ── Rows ── */}
        <div>
          {ventures.map((v, i) => (
            <VentureRow key={v.id} venture={v} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .venture-row { grid-template-columns: 1fr !important; direction: ltr !important; }
        }
      `}</style>
    </section>
  );
}
