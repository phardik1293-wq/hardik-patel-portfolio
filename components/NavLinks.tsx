"use client";
import Link from "next/link";import {usePathname} from "next/navigation";
export default function NavLinks({items}:{items:string[][]}){const p=usePathname();
 return <>{items.map(([n,h])=>{const a=p===h;return <li key={h}><Link href={h} aria-current={a?"page":undefined} className={`relative py-1 transition-colors hover:text-fg after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-accent after:transition-transform ${a?"text-fg after:scale-x-100":"after:scale-x-0 hover:after:scale-x-100"}`}>{n}</Link></li>})}</>}
