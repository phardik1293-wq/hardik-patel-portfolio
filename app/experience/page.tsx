import Link from "next/link";
import {experience} from "@/data/profile";
import {PageHead,Section,JsonLd} from "@/components/ui";
import {generateMetadata as gm,generateBreadcrumbSchema} from "@/lib/seo";
export const metadata=gm("Professional Experience","Hardik Patel's 3+ years of professional experience as a WordPress & Shopify developer at TechForbs Services Pvt. Ltd.","/experience/");
export default function X(){return <><JsonLd data={generateBreadcrumbSchema([["Experience","/experience/"]])}/>
<PageHead h1="Professional Experience" lead={`${experience.role} · ${experience.company} · ${experience.period}`}/>
<Section title="What I work on"><ul className="max-w-3xl list-disc space-y-2 pl-5 text-muted">{experience.points.map(p=><li key={p}>{p}</li>)}</ul><p className="mt-8 text-muted">See the full <Link className="text-accent" href="/about/">technology stack</Link> or <Link className="text-accent" href="/work/">selected work experience</Link>.</p></Section></>}
