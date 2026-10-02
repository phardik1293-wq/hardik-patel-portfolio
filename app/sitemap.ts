import type {MetadataRoute} from "next";
import {services} from "@/data/services";
import {generateCanonicalUrl as c} from "@/lib/seo";
export default function sitemap():MetadataRoute.Sitemap{return["/","/about/","/experience/","/work/","/contact/","/blog/",...services.map(s=>`/${s.slug}/`)].map(p=>({url:c(p),lastModified:new Date()}))}
