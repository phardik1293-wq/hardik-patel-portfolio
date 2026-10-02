import {PageHead,Tag,JsonLd} from "@/components/ui";
import {generateMetadata as gm,generateBreadcrumbSchema} from "@/lib/seo";
export const metadata=gm("Blog","Articles by Hardik Patel on WordPress, Shopify, WooCommerce, SEO, performance and email marketing.","/blog/");
export default function B(){return <><JsonLd data={generateBreadcrumbSchema([["Blog","/blog/"]])}/>
<PageHead h1="Blog" lead="Articles are coming soon. Topics will follow the service clusters on this site."/>
<div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-5 pb-24">{["WordPress","Shopify","WooCommerce","SEO","Performance","Email Marketing","Web Development"].map(c=><Tag key={c}>{c}</Tag>)}</div></>}
