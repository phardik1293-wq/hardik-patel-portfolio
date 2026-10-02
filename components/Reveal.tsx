"use client";
import {useEffect,useRef,useState} from "react";
export default function Reveal({children}:{children:React.ReactNode}){
 const r=useRef<HTMLDivElement>(null);const [s,setS]=useState("");
 useEffect(()=>{const el=r.current!;if(el.getBoundingClientRect().top<innerHeight*.9){setS("show");return}
  setS("hide");const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){setS("show");io.disconnect()}},{threshold:.12});io.observe(el);return()=>io.disconnect()},[]);
 return <div ref={r} className={`reveal ${s}`}>{children}</div>}
