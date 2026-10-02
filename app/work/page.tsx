import {work} from "@/data/work";
import {PageHead,Section,Card,Tag,JsonLd} from "@/components/ui";
import {generateMetadata as gm,generateBreadcrumbSchema} from "@/lib/seo";
export const metadata=gm("Selected Work Experience","Selected work Hardik Patel contributed to as part of the development team at TechForbs Services Pvt. Ltd.","/work/");
export default function W(){return <><JsonLd data={generateBreadcrumbSchema([["Work","/work/"]])}/>
<PageHead h1="Selected Work Experience" lead="Professional contributions made as part of the development team at TechForbs Services Pvt. Ltd."/>
<Section title="Contributions"><div className="grid gap-4 md:grid-cols-2">{work.map(w=><Card key={w.name}><p className="text-xs text-accent">{w.type}</p><h2 className="text-xl font-semibold">{w.name}</h2><p className="mt-2 text-sm text-muted">{w.contribution}</p><div className="mt-4 flex flex-wrap gap-2">{w.tech.map(t=><Tag key={t}>{t}</Tag>)}</div></Card>)}</div></Section></>}
