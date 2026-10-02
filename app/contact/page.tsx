import {profile} from "@/data/profile";
import ContactForm from "@/components/ContactForm";
import {PageHead,JsonLd} from "@/components/ui";
import {generateMetadata as gm,generateBreadcrumbSchema} from "@/lib/seo";
export const metadata=gm("Contact Hardik Patel","Contact Hardik Patel, WordPress & Shopify developer in Mehsana, Gujarat, India, about WordPress, Shopify, WooCommerce, SEO or email marketing.","/contact/");
export default function C(){return <><JsonLd data={generateBreadcrumbSchema([["Contact","/contact/"]])}/>
<PageHead h1="Contact Hardik Patel" lead={`${profile.title} · ${profile.company} · ${profile.location}`}/>
<div className="mx-auto max-w-2xl px-5 pb-24"><ContactForm/></div></>}
