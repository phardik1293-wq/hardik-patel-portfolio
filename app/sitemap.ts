import type {MetadataRoute} from "next";
import {services} from "@/data/services";
import {posts} from "@/lib/blog";
import {generateCanonicalUrl as c,isProd} from "@/lib/seo";
export default function sitemap():MetadataRoute.Sitemap{if(!isProd)return[];return[...["/","/about/","/experience/","/work/","/contact/","/blog/",...services.map(s=>`/${s.slug}/`)].map(p=>({url:c(p),lastModified:new Date()})),...posts.map(p=>({url:c(`/blog/${p.slug}/`),lastModified:new Date(p.updated||p.published)}))]}
