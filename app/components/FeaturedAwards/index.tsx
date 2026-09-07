'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const items = [
  'Travel + Leisure',
  'BUCS',
  'Shows of India',
  'WOW Awards Asia',
  'Condé Nast Traveller India',
  'The Hindu',
  'MensXP',
  "Harper's Bazaar India",
  'Elle India',
  'YourStory',
];

export default function FeaturedAwards() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="featured" ref={ref} className="fa-section">
      <div className="site-container">
        <motion.div
          className="fa-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease }}
        >
          <h2 className="font-heading fa-heading">
            Featured <span className="text-gradient">&</span> Awards
          </h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease, delay: 0.4 }}
      >
        <div className="fa-ticker-wrap">
          <div className="fa-fade fa-fade--left" />
          <div className="fa-fade fa-fade--right" />
          <div className="fa-track">
            {[...items, ...items, ...items].map((item, i) => (
              <span key={i} className="fa-group">
                <span className="fa-item">
                  <span className="fa-item-photo" aria-hidden="true" />
                  <span className="font-heading fa-item-name">{item}</span>
                </span>
                <span className="fa-item-dot" />
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <style>{`
        .fa-section {
          background: #0A0A0A;
          padding: clamp(5rem, 10vw, 8rem) 0 clamp(4rem, 8vw, 6rem);
          border-top: 1px solid rgba(200,161,90,0.08);
          overflow: hidden;
        }

        .fa-header {
          text-align: center;
          margin-bottom: clamp(2.5rem, 4vw, 3.5rem);
        }

        .fa-heading {
          font-size: clamp(2.4rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #F5F5F5;
          letter-spacing: -0.025em;
          line-height: 1.1;
          margin: 0;
        }

        .fa-ticker-wrap {
          position: relative;
          border-top: 1px solid rgba(200,161,90,0.12);
          border-bottom: 1px solid rgba(200,161,90,0.12);
          padding: 3rem 0;
        }

        .fa-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }

        .fa-fade--left {
          left: 0;
          background: linear-gradient(to right, #0A0A0A, transparent);
        }

        .fa-fade--right {
          right: 0;
          background: linear-gradient(to left, #0A0A0A, transparent);
        }

        @keyframes fa-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }

        .fa-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: fa-scroll-left 48s linear infinite;
        }

        .fa-track:hover {
          animation-play-state: paused;
        }

        .fa-group {
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
        }

        .fa-item {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          gap: 1.1rem;
          padding: 0 1.25rem;
        }

        .fa-item-photo {
          width: clamp(220px, 22vw, 320px);
          aspect-ratio: 4 / 3;
          border-radius: 12px;
          background: linear-gradient(135deg, #141414, #1c1c1c);
          border: 1px solid rgba(200,161,90,0.2);
          flex-shrink: 0;
          transition: border-color 0.3s;
        }

        .fa-item:hover .fa-item-photo {
          border-color: rgba(200,161,90,0.6);
        }

        .fa-item-name {
          font-size: clamp(1.1rem, 1.8vw, 1.4rem);
          font-weight: 600;
          color: #888;
          letter-spacing: 0.02em;
          white-space: nowrap;
          transition: color 0.3s;
        }

        .fa-item:hover .fa-item-name {
          color: #C8A15A;
        }

        .fa-item-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #C8A15A;
          display: inline-block;
          flex-shrink: 0;
          opacity: 0.3;
          align-self: center;
        }

        @media (max-width: 600px) {
          .fa-item {
            padding: 0 0.85rem;
          }
          .fa-fade {
            width: 50px;
          }
        }
      `}</style>
    </section>
  );
}
