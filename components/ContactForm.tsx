"use client";
import {useState} from "react";
import {projectTypes} from "@/lib/validation";
const f="w-full rounded-xl border border-line bg-bg2 px-4 py-3 text-fg placeholder:text-muted";
export default function ContactForm(){
 const [st,setSt]=useState<"idle"|"loading"|"ok"|"err">("idle");const [errs,setErrs]=useState<Record<string,string>>({});const [msg,setMsg]=useState("");
 async function submit(ev:React.FormEvent<HTMLFormElement>){ev.preventDefault();setSt("loading");setErrs({});
  const data:Record<string,string>={};new FormData(ev.currentTarget).forEach((v,k)=>{data[k]=String(v)});
  try{const r=await fetch("/api/contact/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});const j=await r.json();
   if(j.success){setSt("ok");setMsg(j.message);(ev.target as HTMLFormElement).reset()}else{setSt("err");setErrs(j.errors||{});setMsg(j.message)}}
  catch{setSt("err");setMsg("Network error. Please try again.")}}
 const L=({id,label,opt}:{id:string;label:string;opt?:boolean})=><label htmlFor={id} className="mb-1 block text-sm text-muted">{label}{opt&&" (optional)"}</label>;
 const E=({k}:{k:string})=>errs[k]?<p id={k+"-e"} role="alert" className="mt-1 text-sm text-red-400">{errs[k]}</p>:null;
 return <form onSubmit={submit} noValidate className="grid gap-5" aria-busy={st==="loading"}>
  <div><L id="name" label="Name"/><input id="name" name="name" required autoComplete="name" className={f} aria-invalid={!!errs.name} aria-describedby="name-e"/><E k="name"/></div>
  <div><L id="email" label="Email"/><input id="email" name="email" type="email" required autoComplete="email" className={f} aria-invalid={!!errs.email} aria-describedby="email-e"/><E k="email"/></div>
  <div><L id="company" label="Company" opt/><input id="company" name="company" autoComplete="organization" className={f}/></div>
  <div><L id="projectType" label="Project type"/><select id="projectType" name="projectType" required defaultValue="" className={f} aria-describedby="projectType-e"><option value="" disabled>Select…</option>{projectTypes.map(p=><option key={p}>{p}</option>)}</select><E k="projectType"/></div>
  <div><L id="message" label="Message"/><textarea id="message" name="message" rows={5} required className={f} aria-invalid={!!errs.message} aria-describedby="message-e"/><E k="message"/></div>
  <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden"/>
  <button disabled={st==="loading"} className="rounded-full bg-accent px-6 py-3 font-medium text-black transition hover:brightness-110 disabled:opacity-60">{st==="loading"?"Sending…":"Let's Talk →"}</button>
  <p role="status" aria-live="polite" className={st==="ok"?"text-accent":"text-red-400"}>{st==="ok"||st==="err"?msg:""}</p>
 </form>}
