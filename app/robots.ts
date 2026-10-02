import type {MetadataRoute} from "next";
import {siteUrl,isProd} from "@/lib/seo";
export default function robots():MetadataRoute.Robots{return isProd?{rules:{userAgent:"*",allow:"/",disallow:"/api/"},sitemap:`${siteUrl}/sitemap.xml`}:{rules:{userAgent:"*",disallow:"/"}}}
