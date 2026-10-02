import Link from "next/link";
import {posts} from "@/lib/blog";
import {PageHead,Tag,JsonLd} from "@/components/ui";
import {generateMetadata as gm,generateBreadcrumbSchema} from "@/lib/seo";
export const metadata=gm("Blog | WordPress, Shopify & SEO Articles — Hardik Patel","Articles by Hardik Patel on WordPress, Shopify, WooCommerce, SEO, performance and email marketing.","/blog/");
export default function B(){return <><JsonLd data={generateBreadcrumbSchema([["Blog","/blog/"]])}/>
<PageHead h1="Blog" lead={posts.length?"Articles on WordPress, Shopify, SEO and performance.":"Articles are coming soon. Topics will follow the service clusters on this site."}/>
<div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-5 pb-8">{["WordPress","Shopify","WooCommerce","SEO","Performance","Email Marketing","Web Development"].map(c=><Tag key={c}>{c}</Tag>)}</div>{posts.length>0&&<ul className="mx-auto max-w-6xl space-y-3 px-5 pb-24">{posts.map(p=><li key={p.slug}><Link className="text-accent" href={`/blog/${p.slug}/`}>{p.title}</Link></li>)}</ul>}</>}
