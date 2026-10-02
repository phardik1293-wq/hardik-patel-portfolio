import Link from "next/link";
import {notFound} from "next/navigation";
import {services} from "@/data/services";
import {PageHead,Section,Card,JsonLd,Btn} from "@/components/ui";
import {generateMetadata as gm,generateBreadcrumbSchema} from "@/lib/seo";
export const dynamicParams=false;
export const generateStaticParams=()=>services.map(s=>({service:s.slug}));
export function generateMetadata({params}:{params:{service:string}}){const s=services.find(x=>x.slug===params.service);return s?gm(s.title,s.desc,`/${s.slug}/`):{}}
export default function Page({params}:{params:{service:string}}){
 const s=services.find(x=>x.slug===params.service);if(!s)notFound();
 return <><JsonLd data={generateBreadcrumbSchema([[s.title,`/${s.slug}/`]])}/>
 <PageHead h1={s.title} lead={s.intro}/>
 <Section title="What this covers"><div className="grid gap-4 md:grid-cols-2">{s.points.map(p=><Card key={p}>{p}</Card>)}</div></Section>
 <Section title="Related"><div className="flex flex-wrap gap-4">{s.related.map(r=>{const x=services.find(y=>y.slug===r)!;return <Link key={r} className="text-accent underline-offset-4 hover:underline" href={`/${r}/`}>{x.title} →</Link>})}</div><div className="mt-8"><Btn primary href="/contact/">Let's Talk</Btn></div></Section></>}
