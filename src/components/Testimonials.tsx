import { Quote } from 'lucide-react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    name: 'Marcus T.',
    result: '-42 lbs in 5 months',
    program: 'Elite Plan',
    body: "I'd tried everything before this. What made the difference was the accountability and the fact that the program was actually designed for ME. Not some template. Real results, real fast.",
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    name: 'Sarah K.',
    result: 'First powerlifting meet',
    program: 'Elite Plan',
    body: 'Six months ago I couldn\'t deadlift my bodyweight. Now I placed top 3 at my first meet. The programming is next level and the coaching cues changed everything about my form.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    name: 'Derek M.',
    result: '+18 lbs lean muscle',
    program: 'Online Plan',
    body: 'Remote coaching that actually delivers. The app check-ins keep me honest and the programs are challenging without being reckless. Best investment I\'ve made in my fitness.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    name: 'Priya R.',
    result: 'Completed first half marathon',
    program: 'Starter Plan',
    body: 'Started as a complete beginner and ran a half marathon 4 months later. The plan was progressive, thoughtful, and the nutrition guidance was something no app could ever replicate.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <span className="section-label">Client Results</span>
          <h2 className="section-title">
            REAL PEOPLE<br /><span className="testimonials__title-red">REAL RESULTS</span>
          </h2>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="testimonials__card glass-card">
              <Quote className="testimonials__quote-icon" size={28} />
              <p className="testimonials__body">"{t.body}"</p>
              <div className="testimonials__footer">
                <img src={t.image} alt={t.name} className="testimonials__avatar" />
                <div>
                  <div className="testimonials__name">{t.name}</div>
                  <div className="testimonials__meta">
                    <span className="testimonials__result">{t.result}</span>
                    <span className="testimonials__divider">·</span>
                    <span className="testimonials__program">{t.program}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transform CTA band */}
      <div className="testimonials__band">
        <div className="container">
          <div className="testimonials__band-inner">
            <div className="testimonials__band-text">
              <span className="section-label" style={{ marginBottom: '8px' }}>Ready to start?</span>
              <div className="testimonials__band-headline">YOUR TRANSFORMATION STARTS NOW</div>
            </div>
            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
