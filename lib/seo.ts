import type {Metadata} from "next";
import {profile} from "@/data/profile";
export const siteUrl=(process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000").replace(/\/$/,"");
export const generateCanonicalUrl=(p="/")=>p==="/"?`${siteUrl}/`:`${siteUrl}/${p.replace(/^\/|\/$/g,"")}/`;
export function generateMetadata(title:string,description:string,path:string):Metadata{const url=generateCanonicalUrl(path);return{title,description,alternates:{canonical:url},openGraph:{title,description,url,siteName:profile.name,type:"website"},twitter:{card:"summary_large_image",title,description}}}
export const generatePersonSchema=()=>({"@context":"https://schema.org","@type":"Person","@id":`${siteUrl}/#person`,name:profile.name,jobTitle:profile.title,url:siteUrl,worksFor:{"@type":"Organization",name:profile.company},address:{"@type":"PostalAddress",addressLocality:"Mehsana",addressRegion:"Gujarat",addressCountry:"IN"},...(profile.socials.length?{sameAs:profile.socials.map(x=>x.url)}:{})});
export const generateWebsiteSchema=()=>({"@context":"https://schema.org","@type":"WebSite",name:`${profile.name} | ${profile.title}`,url:siteUrl,publisher:{"@id":`${siteUrl}/#person`}});
export const generateBreadcrumbSchema=(items:[string,string][])=>({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[["Home","/"],...items].map(([n,p],i)=>({"@type":"ListItem",position:i+1,name:n,item:generateCanonicalUrl(p)}))});
