import {NextResponse} from "next/server";
import {validateContact} from "@/lib/validation";
import {sendContactEmail} from "@/lib/email";
export const runtime="nodejs";
const hits=new Map<string,number[]>(); // best-effort per-instance limit; use Upstash/Redis for production scale
export async function POST(req:Request){
 try{
  const ip=(req.headers.get("x-forwarded-for")||"unknown").split(",")[0];const now=Date.now();
  const recent=(hits.get(ip)||[]).filter(t=>now-t<600000);if(recent.length>=5)return NextResponse.json({success:false,message:"Too many requests. Please try later."},{status:429});
  hits.set(ip,[...recent,now]);
  const body=await req.json().catch(()=>null);
  if(!body||body.website)return NextResponse.json({success:true,message:"Your message has been received."}); // honeypot
  const {d,e}=validateContact(body);
  if(Object.keys(e).length)return NextResponse.json({success:false,message:"Please check the form.",errors:e},{status:400});
  await sendContactEmail(d);
  return NextResponse.json({success:true,message:"Your message has been received."});
 }catch(err){console.error(err);return NextResponse.json({success:false,message:"Something went wrong. Please try again."},{status:500})}
}
