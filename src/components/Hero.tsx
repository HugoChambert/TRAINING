import { ArrowRight, ChevronDown } from 'lucide-react';
import { images } from '../images';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background image */}
      <div className="hero__bg">
        <img
          src={images.hero}
          alt="Training background"
        />
        <div className="hero__overlay" />
        <div className="hero__gradient" />
      </div>

      {/* Decorative red stripe */}
      <div className="hero__stripe" />

      <div className="hero__content container">
        <div className="hero__tag">
          <span className="hero__tag-dot" />
          NASM CPT &amp; CNC Certified
        </div>

        <h1 className="hero__headline">
          <span className="hero__headline-line">FORGE</span>
          <span className="hero__headline-line hero__headline-line--red">YOUR</span>
          <span className="hero__headline-line">LIMITS</span>
        </h1>

        <p className="hero__sub">
          Elite personal training designed around you. Science-backed programming,
          relentless accountability, and real results — starting day one.
        </p>

        <div className="hero__ctas">
          <a
            href="https://cal.com/hugo-chambert-lhv2ko/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book Free Consultation
            <ArrowRight size={16} />
          </a>
          <a href="#programs" className="btn-outline">
            View Programs
          </a>
        </div>

      </div>

      <a href="#about" className="hero__scroll">
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
