import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', goal: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const { error: dbError } = await supabase.from('contact_submissions').insert([form]);
    if (dbError) {
      setStatus('error');
      return;
    }

    const res = await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-emails`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(form),
      }
    );

    if (!res.ok) {
      setStatus('error');
    } else {
      setStatus('sent');
      setForm({ name: '', email: '', goal: '', message: '' });
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__form-wrap">
          <div className="glass-card contact__form-card">
            {status === 'sent' ? (
              <div className="contact__success">
                <div className="contact__success-icon">✓</div>
                <div className="contact__success-title">Message Received</div>
                <p className="contact__success-body">I'll get back to you within 24 hours. Talk soon.</p>
                <button className="btn-outline" onClick={() => setStatus('idle')}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact__form">
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label className="contact__label">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="contact__input"
                    />
                  </div>
                  <div className="contact__field">
                    <label className="contact__label">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@email.com"
                      className="contact__input"
                    />
                  </div>
                </div>

                <div className="contact__field">
                  <label className="contact__label">Primary Goal</label>
                  <select
                    name="goal"
                    value={form.goal}
                    onChange={handleChange}
                    required
                    className="contact__input contact__select"
                  >
                    <option value="">Select your goal</option>
                    <option>Lose weight / fat loss</option>
                    <option>Build muscle / bulk</option>
                    <option>Athletic performance</option>
                    <option>General fitness</option>
                    <option>Powerlifting / strength</option>
                    <option>Post-rehab / injury recovery</option>
                  </select>
                </div>

                <div className="contact__field">
                  <label className="contact__label">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell me about your current fitness level, schedule, and what you've tried before..."
                    className="contact__input contact__textarea"
                  />
                </div>

                {status === 'error' && (
                  <p className="contact__error">Something went wrong. Please try again.</p>
                )}

                <button type="submit" className="btn-primary contact__submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  {status !== 'sending' && <ArrowRight size={16} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
