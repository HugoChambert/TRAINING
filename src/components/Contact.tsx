import { Calendar, CreditCard } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__left">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            LET&apos;S<br /><span className="contact__title-red">TALK</span>
          </h2>
          <div className="red-line" />
          <p className="contact__body">
            Ready to commit? Have questions? Book a free consultation or jump straight into a plan.
          </p>
          <div className="contact__quick-links">
            
              href="https://cal.com/hugo-chambert-lhv2ko/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__quick-link"
            >
              <div className="contact__quick-icon">
                <Calendar size={18} />
              </div>
              <div>
                <div className="contact__quick-title">Book a Free Call</div>
                <div className="contact__quick-sub">30-min strategy session</div>
              </div>
              <span className="contact__quick-arrow">→</span>
            </a>
            
              href="https://buy.stripe.com/aFa4gygHAg7t2r57Sl7bW00"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__quick-link"
            >
              <div className="contact__quick-icon contact__quick-icon--red">
                <CreditCard size={18} />
              </div>
              <div>
                <div className="contact__quick-title">Buy a Plan</div>
                <div className="contact__quick-sub">Start training immediately</div>
              </div>
              <span className="contact__quick-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
