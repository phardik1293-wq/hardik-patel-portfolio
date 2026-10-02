export const projectTypes=["WordPress","Shopify","WooCommerce","Website Optimization","SEO","Email Marketing","Other"];
const clean=(v:unknown,max:number)=>String(v??"").replace(/[<>]/g,"").replace(/[\u0000-\u001f]/g," ").trim().slice(0,max);
export function validateContact(b:any){const d={name:clean(b?.name,100),email:clean(b?.email,200),company:clean(b?.company,100),projectType:clean(b?.projectType,50),message:clean(b?.message,3000)};const e:Record<string,string>={};
if(d.name.length<2)e.name="Please enter your name.";
if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email))e.email="Please enter a valid email.";
if(!projectTypes.includes(d.projectType))e.projectType="Please choose a project type.";
if(d.message.length<10)e.message="Message should be at least 10 characters.";
if((d.message.match(/https?:\/\//g)||[]).length>2)e.message="Too many links.";
return{d,e}}
