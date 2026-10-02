import {notFound} from "next/navigation";
import {posts} from "@/lib/blog";
import {PageHead,JsonLd} from "@/components/ui";
import {generateMetadata as gm,generateBreadcrumbSchema,generateArticleSchema} from "@/lib/seo";
export const dynamicParams=false;
export const generateStaticParams=()=>posts.map(p=>({slug:p.slug}));
export function generateMetadata({params}:{params:{slug:string}}){const p=posts.find(x=>x.slug===params.slug);return p?gm(`${p.title} | Hardik Patel`,p.description,`/blog/${p.slug}/`,{type:"article",publishedTime:p.published,modifiedTime:p.updated||p.published,authors:["Hardik Patel"],...(p.image?{images:[p.image]}:{})}):{}}
export default function Post({params}:{params:{slug:string}}){const p=posts.find(x=>x.slug===params.slug);if(!p)notFound();
 return <article><JsonLd data={generateArticleSchema(p)}/><JsonLd data={generateBreadcrumbSchema([["Blog","/blog/"],[p.title,`/blog/${p.slug}/`]])}/>
 <PageHead h1={p.title} lead={p.description}/><div className="mx-auto max-w-3xl space-y-4 px-5 pb-24 text-muted"><p className="text-sm">By Hardik Patel · <time dateTime={p.published}>{p.published}</time>{p.updated&&<> · Updated <time dateTime={p.updated}>{p.updated}</time></>}</p>{p.body.map((t,i)=><p key={i}>{t}</p>)}</div></article>}
