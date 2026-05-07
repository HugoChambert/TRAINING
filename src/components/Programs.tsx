import { ArrowRight, Check, Star } from 'lucide-react';
import './Programs.css';

const PROGRAMS = [
  {
    name: 'Starter',
    tagline: 'Single Session',
    price: '70',
    period: '/session',
    description: 'Try it out with a single 1-on-1 session. Great for those who want to experience coaching before committing to a plan.',
    features: [
      '60-min 1-on-1 session',
      'Movement assessment',
      'Personalised exercise selection',
      'Form coaching & cues',
      'Post-session summary',
    ],
    cta: 'Book a Session',
    featured: false,
  },
  {
    name: 'Elite',
    tagline: 'Monthly Coaching',
    price: '300',
    period: '/mo',
    description: 'Full-spectrum monthly coaching for serious results. Structured programming, daily accountability, and everything you need to transform.',
    features: [
      '4x weekly 1-on-1 sessions',
      'Periodized monthly program',
      'Weekly accountability check-in',
      'Full nutrition coaching',
      'Priority scheduling',
      'Supplement guidance',
    ],
    cta: 'Go Elite',
    featured: true,
  },
  {
    name: 'Kickstart',
    tagline: '1-Week Intensive',
    price: '150',
    period: '/week',
    description: 'A focused one-week block to build momentum, establish good habits, and get a real taste of structured training.',
    features: [
      '3x sessions over 7 days',
      'Custom week plan',
      'Nutrition guidance',
      'Progress recap at end of week',
    ],
    cta: 'Start This Week',
    featured: false,
  },
];

export default function Programs() {
  return (
    <section className="programs section" id="programs">
      <div className="container">
        <div className="programs__header">
          <span className="section-label">Training Programs</span>
          <h2 className="section-title">
            CHOOSE YOUR<br /><span className="programs__title-red">PATH</span>
          </h2>
          <p className="programs__sub">
            Every plan is fully customized. Pick your starting point — we'll take it from there.
          </p>
        </div>

        <div className="programs__grid">
          {PROGRAMS.map((plan) => (
            <div
              key={plan.name}
              className={`programs__card glass-card${plan.featured ? ' programs__card--featured' : ''}`}
            >
              {plan.featured && (
                <div className="programs__badge">
                  <Star size={11} fill="currentColor" />
                  Most Popular
                </div>
              )}

              <div className="programs__card-top">
                <div className="programs__name">{plan.name}</div>
                <div className="programs__tagline">{plan.tagline}</div>
                <div className="programs__price">
                  <span className="programs__price-dollar">$</span>
                  <span className="programs__price-amount">{plan.price}</span>
                  <span className="programs__price-period">{plan.period}</span>
                </div>
                <p className="programs__desc">{plan.description}</p>
              </div>

              <ul className="programs__features">
                {plan.features.map((f) => (
                  <li key={f} className="programs__feature">
                    <Check size={13} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://buy.stripe.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`programs__cta${plan.featured ? ' programs__cta--featured' : ''}`}
              >
                {plan.cta}
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
