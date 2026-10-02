import Link from "next/link";
import {profile,highlights,stack,experience,workflow} from "@/data/profile";
import {services} from "@/data/services";
import {work} from "@/data/work";
import {faq} from "@/data/faq";
import {Btn,Card,Section,Tag} from "@/components/ui";
import HeroBackground from "@/components/HeroBackground";
import Marquee from "@/components/Marquee";
const d=(n:number)=>({animationDelay:`${n}s`});
import {generateMetadata as gm} from "@/lib/seo";
export const metadata=gm("Hardik Patel | WordPress & Shopify Developer","Hardik Patel is a WordPress & Shopify developer with 3+ years of professional experience in website development, eCommerce, optimization, SEO and email marketing.","/");
export default function Home(){return <>
 <section className="relative overflow-hidden"><HeroBackground/>
  <div className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-40">
  <p className="rise mb-5 text-xs tracking-[.25em] text-accent">WORDPRESS & SHOPIFY DEVELOPER</p>
  <h1 className="rise max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl" style={d(.08)}>Building better websites for businesses.</h1>
  <p className="rise mt-6 max-w-2xl text-lg text-muted" style={d(.16)}>{profile.intro}</p>
  <div className="rise mt-9 flex flex-wrap gap-4" style={d(.24)}><Btn primary href="/experience/">View My Experience</Btn><Btn href="/contact/">Let's Talk</Btn></div>
  <div className="rise mt-8 flex gap-6 text-sm text-muted" style={d(.32)}>{profile.socials.map(x=><a key={x.label} rel="me noopener" className="hover:text-accent" href={x.url}>{x.label}</a>)}{profile.email&&<a className="hover:text-accent" href={`mailto:${profile.email}`}>Email</a>}</div>
  <ul className="rise mt-10 flex flex-wrap gap-2" style={d(.4)}>{["WordPress","Shopify","WooCommerce","PHP","Shopify Liquid","JavaScript","GA4","Technical SEO"].map(t=><li key={t}><Tag>{t}</Tag></li>)}</ul>
 </div></section>
 <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 md:grid-cols-6">{highlights.map(([a,b])=><div key={b} className="rounded-2xl border border-line bg-bg2 p-4"><p className="text-xl font-semibold">{a}</p><p className="text-xs text-muted">{b}</p></div>)}</div>
 <Section eyebrow="ABOUT" title="WordPress and Shopify, with an eye on performance and search.">
  <div className="grid gap-6 text-muted md:grid-cols-2"><p>{profile.name} is a WordPress and Shopify developer with 3+ years of professional experience at {profile.company}. He works with WordPress, Shopify, WooCommerce, PHP, JavaScript, Shopify Liquid, SEO, website optimization and email marketing.</p><p>Based in {profile.location}, Hardik specializes in WordPress development, Shopify development, WooCommerce, responsive web development, technical SEO and email marketing. <Link className="text-accent" href="/about/">Read more about Hardik Patel →</Link></p></div></Section>
 <Section eyebrow="EXPERTISE" title="Core expertise"><div className="grid gap-4 md:grid-cols-3">{services.map(s=><Link key={s.slug} href={`/${s.slug}/`}><Card><h3 className="font-semibold">{s.title}</h3><p className="mt-2 text-sm text-muted">{s.short}</p></Card></Link>)}</div></Section>
 <Section id="technology" eyebrow="TECHNOLOGY" title="Technology stack"><Marquee/><div className="grid gap-4 md:grid-cols-3">{Object.entries(stack).map(([g,t])=><Card key={g}><h3 className="mb-3 text-sm text-muted">{g}</h3><div className="flex flex-wrap gap-2">{t.map(x=><Tag key={x}>{x}</Tag>)}</div></Card>)}</div></Section>
 <Section eyebrow="EXPERIENCE" title={`${experience.role} at ${experience.company}`}><ul className="max-w-3xl list-disc space-y-2 pl-5 text-muted">{experience.points.map(p=><li key={p}>{p}</li>)}</ul></Section>
 <Section eyebrow="SELECTED WORK EXPERIENCE" title="Selected work experience"><div className="grid gap-4 md:grid-cols-2">{work.slice(0,4).map(w=><Card key={w.name}><p className="text-xs text-accent">{w.type}</p><h3 className="mt-1 text-xl font-semibold">{w.name}</h3><p className="mt-2 text-sm text-muted">{w.contribution}</p></Card>)}</div><div className="mt-8"><Btn href="/work/">View Work</Btn></div></Section>
 <Section eyebrow="PROCESS" title="Development process"><ol className="grid gap-4 md:grid-cols-4">{workflow.map(([a,b],i)=><li key={a}><Card><p className="text-accent">0{i+1}</p><h3 className="font-semibold">{a}</h3><p className="mt-1 text-sm text-muted">{b}</p></Card></li>)}</ol></Section>
 <Section eyebrow="SEO & PERFORMANCE" title="Performance and SEO as part of development"><p className="max-w-3xl text-muted">Core Web Vitals, structured data, metadata and analytics are handled alongside the build. See <Link className="text-accent" href="/website-optimization/">website optimization</Link> and <Link className="text-accent" href="/seo/">technical SEO</Link>.</p></Section>
 <Section eyebrow="FAQ" title="Quick answers"><div className="max-w-3xl divide-y divide-line">{faq.map(([q,a])=><details key={q} className="py-4"><summary className="cursor-pointer font-medium">{q}</summary><p className="mt-2 text-muted">{a}</p></details>)}</div></Section>
 <Section title="Have a website to build or improve?"><Btn primary href="/contact/">Let's Talk</Btn></Section>
</>}
