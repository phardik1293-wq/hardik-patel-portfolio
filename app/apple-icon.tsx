import {ImageResponse} from "next/og";
export const size={width:180,height:180};export const contentType="image/png";
export default function I(){return new ImageResponse(<div style={{background:"#0A0A0A",color:"#C8FF3D",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:180*0.5,fontWeight:700}}>HP</div>,size)}
