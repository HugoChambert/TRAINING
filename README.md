# Personal Trainer Website

Built with React, Vite, TypeScript, and Supabase. Contact form submissions are saved to a database and emailed to you via Resend. Payments are handled by Stripe. Booking is handled by Cal.com.

---

## 1. Resend (Contact Form Emails)

Resend delivers contact form inquiries to your inbox.

### Setup

1. Go to [resend.com](https://resend.com) and create a free account.
2. In the Resend dashboard go to **API Keys** and create a new key with **Sending access**.
3. In your [Supabase dashboard](https://supabase.com/dashboard/project/ykcljkjbojskkeudkngu/settings/functions), click **Edge Functions** in the left sidebar, then **Manage secrets**, and add:

   | Name | Value |
   |---|---|
   | `RESEND_API_KEY` | `re_...` (your key from step 2) |

4. That's it. Every contact form submission will now be emailed to **cjcncc4@gmail.com**.

### Optional: Use your own domain

By default, emails are sent from `inquiries@resend.dev`. To send from your own domain (e.g., `hello@yourdomain.com`):

1. In the Resend dashboard go to **Domains** and add your domain.
2. Add the DNS records Resend provides to your domain registrar.
3. Once verified, update the `from` field in `supabase/functions/send-inquiry/index.ts`:

```ts
from: "hello@yourdomain.com",
```

4. Redeploy the function (the system does this automatically on next deploy).

---

## 2. Stripe (Payments)

Stripe handles payments for coaching programs and consultations.

### Setup

1. Create a [Stripe account](https://dashboard.stripe.com/register).
2. In the Stripe Dashboard go to **Developers > API Keys** and copy your **Secret key** (`sk_live_...`).
3. Add the following secrets in your [Supabase Edge Functions secrets](https://supabase.com/dashboard/project/ykcljkjbojskkeudkngu/settings/functions):

   | Name | Value |
   |---|---|
   | `STRIPE_SECRET_KEY` | `sk_live_...` |
   | `STRIPE_WEBHOOK_SECRET` | (see Webhooks section below) |

4. Add your **Publishable key** to `.env`:

```
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_...
```

5. In the Stripe Dashboard go to **Products** and create a product for each coaching package. Copy each **Price ID** (e.g., `price_abc123`) and paste it into the corresponding card in `src/components/Programs.tsx`.

### Webhooks

To confirm payments and trigger follow-up actions (e.g., sending a receipt, unlocking content):

1. In the Stripe Dashboard go to **Developers > Webhooks > Add endpoint**.
2. Set the endpoint URL to:
   ```
   https://ykcljkjbojskkeudkngu.supabase.co/functions/v1/stripe-webhook
   ```
3. Select events — at minimum: `checkout.session.completed`.
4. Copy the **Webhook Signing Secret** and add it as `STRIPE_WEBHOOK_SECRET` in Supabase secrets (see step 3 above).

### Linking buy buttons

The **"Buy a Plan"** link in `src/components/Contact.tsx` currently points to a placeholder. Replace it with your Stripe Payment Link or Checkout URL:

```tsx
href="https://buy.stripe.com/your-payment-link"
```

---

## 3. Cal.com (Booking)

Cal.com handles scheduling for free consultations and coaching sessions.

### Setup

1. Create a [Cal.com account](https://cal.com) and set up your event types (e.g., "Free Consultation — 30 min").
2. Note your **username** and the **event slug** (visible in Cal.com under **Event Types**).
3. Update the **"Book a Free Call"** link in `src/components/Contact.tsx` with your real Cal.com URL:

```tsx
href="https://cal.com/your-username/free-consultation"
```

4. Do the same for the hero CTA in `src/components/Hero.tsx`.

### Optional: Embedded popup widget

Instead of linking out, you can open a Cal.com booking popup inline. Add the embed script to `index.html` inside `<head>`:

```html
<script type="text/javascript">
  (function (C, A, L) {
    let p = function (a, ar) { a.q.push(ar); };
    let d = C.document;
    C.Cal = C.Cal || function () {
      let cal = C.Cal; let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {}; cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () { p(api, arguments); };
        const namespace = ar[1];
        api.q = api.q || [];
        typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar);
        return;
      }
      p(cal, ar);
    };
  })(window, "https://app.cal.com/embed/embed.js", "init");
  Cal("init", { origin: "https://cal.com" });
</script>
```

Then replace any booking `<a>` tag with a button using the `data-cal-link` attribute:

```tsx
<button data-cal-link="your-username/free-consultation" className="btn btn--primary">
  Book Free Consultation
</button>
```

---

## Environment Variables

All variables go in the `.env` file at the project root.

| Variable | Description |
|---|---|
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon/public key |
| `VITE_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key (frontend) |

### Supabase Edge Function Secrets

Set these in the [Supabase dashboard](https://supabase.com/dashboard/project/ykcljkjbojskkeudkngu/settings/functions) under **Edge Functions > Manage secrets**. These are never exposed to the browser.

| Name | Description |
|---|---|
| `RESEND_API_KEY` | Resend API key for sending contact form emails |
| `STRIPE_SECRET_KEY` | Stripe secret key for server-side payment operations |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret for verifying events |
