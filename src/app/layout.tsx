import type {Metadata,Viewport} from "next";
import {Cormorant_Garamond,Red_Hat_Display} from "next/font/google";
import "./globals.css";

const sans=Red_Hat_Display({subsets:["latin"],weight:["400","500","600","700","800"],variable:"--font-socle-sans",display:"swap"});
const serif=Cormorant_Garamond({subsets:["latin"],weight:["400","500","600"],variable:"--font-socle-serif",display:"swap"});
export const metadata:Metadata={title:"Socle Discovery — Homepage Demo",description:"A standalone preview of the Socle Discovery homepage. Explore sample places and collections in one page.",robots:{index:false,follow:false}};
export const viewport:Viewport={themeColor:"#fbf8f1",viewportFit:"cover"};
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en" className={`${sans.variable} ${serif.variable}`}><body>{children}</body></html>;
}
