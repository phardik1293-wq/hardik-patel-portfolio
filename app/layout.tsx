import "./globals.css";
import type {Metadata,Viewport} from "next";
import Link from "next/link";
import {Inter} from "next/font/google";
import {profile} from "@/data/profile";
import {services} from "@/data/services";
import {isProd,siteUrl,generatePersonSchema,generateWebsiteSchema} from "@/lib/seo";
import {JsonLd} from "@/components/ui";
import NavLinks from "@/components/NavLinks";
const inter=Inter({subsets:["latin"],variable:"--font-inter",display:"swap"});
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:{default:`${profile.name} | ${profile.title}`,template:`%s | ${profile.name}`},description:"Hardik Patel is a WordPress & Shopify developer with 3+ years of professional experience in website development, eCommerce, optimization, SEO and email marketing.",keywords:["WordPress Developer","Shopify Developer","WooCommerce Developer","WordPress Development","Shopify Development","Website Optimization","Technical SEO","Email Marketing"],authors:[{name:profile.name}],robots:isProd?{index:true,follow:true,googleBot:{index:true,follow:true}}:{index:false,follow:false,googleBot:{index:false,follow:false}},openGraph:{siteName:profile.name,locale:"en_IN",type:"website"}};
export const viewport:Viewport={themeColor:"#0A0A0A"};
const nav=[["WordPress Development","/wordpress-development/"],["Shopify Development","/shopify-development/"],["Experience","/experience/"],["Work","/work/"],["Blog","/blog/"],["Contact","/contact/"]];
const mobileNav=[["About","/about/"],...nav];
export default function Layout({children}:{children:React.ReactNode}){
 return <html lang="en" className={inter.variable}><body className="font-sans">
  <JsonLd data={generatePersonSchema()}/><JsonLd data={generateWebsiteSchema()}/>
  <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:p-2 focus:text-black">Skip to content</a>
  <nav aria-label="Main" className="fixed inset-x-0 top-0 z-40 border-b border-line bg-bg/80 backdrop-blur">
   <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
    <Link href="/" className="font-semibold">{profile.name}</Link>
    <ul className="hidden gap-7 text-sm text-muted lg:flex"><NavLinks items={nav}/></ul>
    <details className="relative lg:hidden"><summary aria-label="Toggle menu" className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-line [&::-webkit-details-marker]:hidden"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg></summary>
     <ul className="absolute right-0 mt-3 w-56 rounded-xl border border-line bg-card p-3 text-sm">{mobileNav.map(([n,h])=><li key={h}><Link className="block p-2" href={h}>{n}</Link></li>)}</ul></details>
   </div></nav>
  <main id="main" className="page-in">{children}</main>
  <footer className="border-t border-line"><div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 text-sm text-muted md:grid-cols-3">
   <div><p className="font-medium text-fg">{profile.name}</p><p>{profile.title}</p><p>{profile.company}</p><p>{profile.location}</p></div>
   <ul className="space-y-1">{services.map(s=><li key={s.slug}><Link className="hover:text-fg" href={`/${s.slug}/`}>{s.title}</Link></li>)}</ul>
   <ul className="space-y-1">{profile.socials.map(x=><li key={x.label}><a rel="me noopener" className="hover:text-fg" href={x.url}>{x.label}</a></li>)}<li><Link href="/contact/" className="hover:text-fg">Contact</Link></li></ul>
  </div></footer></body></html>}
