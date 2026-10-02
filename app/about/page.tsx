import {profile,stack} from "@/data/profile";
import {PageHead,Section,JsonLd,Tag} from "@/components/ui";
import {generateMetadata as gm,generateBreadcrumbSchema} from "@/lib/seo";
export const metadata=gm("About Hardik Patel","About Hardik Patel, a WordPress & Shopify developer in Mehsana, Gujarat, India with 3+ years of experience at TechForbs Services Pvt. Ltd.","/about/");
export default function About(){return <><JsonLd data={generateBreadcrumbSchema([["About","/about/"]])}/>
<PageHead h1="About Hardik Patel" lead={`${profile.title} based in ${profile.location}.`}/>
<Section title="Who I am"><div className="max-w-3xl space-y-4 text-muted"><p>I'm {profile.name}, a WordPress and Shopify developer with 3+ years of professional experience at {profile.company}. I work as part of a development team on websites and online stores.</p><p>My day-to-day covers WordPress, WooCommerce and Shopify development, responsive layouts, bug fixing and maintenance, plus technical SEO, schema, analytics (GA4, Google Tag Manager, Search Console), performance optimization and HTML email.</p></div>
<div className="mt-8 flex flex-wrap gap-2">{Object.values(stack).flat().map(t=><Tag key={t}>{t}</Tag>)}</div></Section></>}
