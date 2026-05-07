import { Shield, Award, Target, Zap } from 'lucide-react';
import { images } from '../images';
import './About.css';

const CERTS = [
  {
    badge: 'NASM',
    title: 'Certified Personal Trainer',
    body: 'National Academy of Sports Medicine — the gold standard in personal training certification, grounding every program in the OPT Model.',
  },
  {
    badge: 'CNC',
    title: 'Certified Nutrition Coach',
    body: 'NASM Certified Nutrition Coach — evidence-based nutrition coaching to build sustainable eating habits that support training and long-term results.',
  },
];

const VALUES = [
  { icon: Target, title: 'Goal-Driven', body: 'Every rep, set, and session serves your specific goal — no filler, no fluff.' },
  { icon: Shield, title: 'Science-Backed', body: 'Programming rooted in sports science and evidence-based practice.' },
  { icon: Zap, title: 'High Intensity', body: 'Workouts that challenge you without breaking you — sustainable progress.' },
  { icon: Award, title: 'Accountable', body: 'Check-ins, tracking, and consistent feedback to keep you on course.' },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__grid">
          {/* Left: image */}
          <div className="about__image-wrap">
            <div className="about__image-frame">
              <img
                src={images.trainerPortrait}
                alt="Personal trainer"
              />
              <div className="about__image-overlay" />
            </div>
          </div>

          {/* Right: content */}
          <div className="about__content">
            <span className="section-label">Who I Am</span>
            <h2 className="section-title">
              BUILT ON<br /><span className="about__title-red">RESULTS</span>
            </h2>
            <div className="red-line" />

            <p className="about__body">
              My approach combines NASM's proven Optimum Performance Training model with
              NASM's Certified Nutrition Coach framework — giving you a complete system that covers both
              training and the nutrition that makes it stick.
            </p>
            <p className="about__body" style={{ marginTop: '16px' }}>
              Whether you're starting from zero or breaking through a plateau, every program is built
              specifically for you — your body, your schedule, your goals.
            </p>

            {/* Certifications */}
            <div className="about__certs">
              {CERTS.map(({ badge, title, body }) => (
                <div key={badge} className="about__cert glass-card">
                  <div className="about__cert-badge">{badge}</div>
                  <div>
                    <div className="about__cert-title">{title}</div>
                    <p className="about__cert-body">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="about__values">
          {VALUES.map(({ icon: Icon, title, body }) => (
            <div key={title} className="about__value glass-card">
              <div className="about__value-icon">
                <Icon size={20} />
              </div>
              <div className="about__value-title">{title}</div>
              <p className="about__value-body">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
