# Hardik Patel – Portfolio (Next.js 14, TypeScript, Tailwind)

```
npm install
cp .env.example .env.local   # fill in values
npm run dev                  # http://localhost:3000
npm run build && npm start
```

## Environment variables
- `NEXT_PUBLIC_SITE_URL` – final domain (canonicals, sitemap, schema)
- `NEXT_PUBLIC_LINKEDIN_URL`, `NEXT_PUBLIC_GITHUB_URL` – real profiles only; used for Person `sameAs` and social links
- `CONTACT_EMAIL`, `EMAIL_API_KEY`, `EMAIL_FROM` – used server-side by `lib/email.ts` (Resend by default; swap provider inside `sendContactEmail()`)

## Content
Edit `data/*.ts` (profile, services, work, faq). **Review `data/work.ts`** – only Wellversed's wording came from you; the others are neutral placeholders to replace with accurate details.

## Deploy (Vercel)
Import the repo, add the env vars above, deploy. Then submit `/sitemap.xml` in Google Search Console.

## Notes
- FAQPage schema is intentionally omitted (Google limits FAQ rich results); FAQ is visible content only.
- Contact rate limiting is per-instance in memory; use Redis/Upstash for stricter production limits.
- No ranking or AI-inclusion is guaranteed.
"# hardik-patel-portfolio" 
