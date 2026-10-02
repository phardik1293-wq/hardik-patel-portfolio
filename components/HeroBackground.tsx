"use client";
import {useEffect,useRef} from "react";
export default function HeroBackground(){
 const cv=useRef<HTMLCanvasElement>(null),glow=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches,fine=matchMedia("(hover:hover) and (pointer:fine)").matches;
  const c=cv.current!,g=glow.current!,host=c.parentElement!,off:(()=>void)[]=[];
  if(fine&&!reduce){const mv=(e:MouseEvent)=>{const r=host.getBoundingClientRect();g.style.transform=`translate(${e.clientX-r.left-200}px,${e.clientY-r.top-200}px)`;g.style.opacity="1"};host.addEventListener("mousemove",mv);off.push(()=>host.removeEventListener("mousemove",mv))}
  if(!reduce&&(navigator.hardwareConcurrency||8)>2){
   const ctx=c.getContext("2d")!,dpr=Math.min(devicePixelRatio||1,1.5);let w=0,h=0,run=true,vis=true,raf=0,pts:{x:number;y:number;vx:number;vy:number}[]=[];
   const size=()=>{w=host.clientWidth;h=host.clientHeight;c.width=w*dpr;c.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);pts=Array.from({length:w<768?18:46},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25}))};
   const frame=()=>{if(run&&vis){ctx.clearRect(0,0,w,h);ctx.fillStyle="rgba(200,255,61,.5)";for(const p of pts){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;ctx.fillRect(p.x,p.y,1.5,1.5)}
    for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=dx*dx+dy*dy;if(d<14000){ctx.strokeStyle=`rgba(200,255,61,${.12*(1-d/14000)})`;ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.stroke()}}}raf=requestAnimationFrame(frame)};
   size();raf=requestAnimationFrame(frame);
   const io=new IntersectionObserver(([e])=>{vis=e.isIntersecting});io.observe(host);const ro=new ResizeObserver(size);ro.observe(host);
   const vc=()=>{run=!document.hidden};document.addEventListener("visibilitychange",vc);
   off.push(()=>{cancelAnimationFrame(raf);io.disconnect();ro.disconnect();document.removeEventListener("visibilitychange",vc)});
  }
  return()=>off.forEach(f=>f());
 },[]);
 return <div aria-hidden="true" className="hero-bg"><div className="hero-grid"/><div className="hero-noise"/><canvas ref={cv} className="absolute inset-0 h-full w-full"/><div ref={glow} className="hero-cursor"/><div className="hero-glow"/><div className="hero-shade"/></div>}
