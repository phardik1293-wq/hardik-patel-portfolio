// Provider-agnostic. Default: Resend REST API. Swap internals for SendGrid/SMTP later.
export async function sendContactEmail(m:{name:string;email:string;company:string;projectType:string;message:string}){
 const key=process.env.EMAIL_API_KEY,to=process.env.CONTACT_EMAIL;
 if(!key||!to){console.warn("[contact] Email not configured; message logged only.");console.log(m);return}
 const r=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},body:JSON.stringify({from:process.env.EMAIL_FROM||"Portfolio <onboarding@resend.dev>",to:[to],reply_to:m.email,subject:`New enquiry: ${m.projectType} from ${m.name}`,text:`Name: ${m.name}\nEmail: ${m.email}\nCompany: ${m.company||"-"}\nType: ${m.projectType}\n\n${m.message}`})});
 if(!r.ok)throw new Error("Email provider error "+r.status);
}
