"use client";

/* eslint-disable @next/next/no-img-element */
import {useEffect,useMemo,useRef,useState,type ReactNode} from "react";
import {ArrowLeft,ArrowRight,BookOpen,Building2,Coffee,Heart,MapPin,Search,Sparkles,X} from "lucide-react";
import content from "../data/discovery.json";
import styles from "./discovery-demo.module.css";

type Photo={src:string;alt:string;credit:string;source:string;focalPoint?:string};
type Place={id:string;name:string;category:string;city:string;image:Photo;tags:string[]};
type Collection={id:string;title:string;count:number;image:Photo};
const places:Place[]=content.places;
const collections:Collection[]=content.collections;
const chips=[{id:"coffee",title:"Coffee",icon:Coffee},{id:"date",title:"Date Night",icon:Heart},{id:"rooftop",title:"Rooftop",icon:Building2},{id:"study",title:"Study",icon:BookOpen},{id:"rain",title:"Rainy Day",icon:Sparkles}];

function PhotoView({photo,eager=false}:{photo:Photo;eager?:boolean}){
  const [failed,setFailed]=useState(false);
  if(failed)return <span className={styles.photoFallback} role="img" aria-label={photo.alt}><MapPin size={24}/><span>{photo.alt}</span></span>;
  return <img src={photo.src} alt={photo.alt} title={`Photo: ${photo.credit}`} style={{objectPosition:photo.focalPoint??"center"}} loading={eager?"eager":"lazy"} decoding="async" onError={()=>setFailed(true)}/>;
}
function Shelf({title,id,children,variant="featured"}:{title:string;id:string;children:ReactNode;variant?:"featured"|"compact"|"collection"}){
  const row=useRef<HTMLDivElement>(null);
  const [canBack,setCanBack]=useState(false),[canForward,setCanForward]=useState(false);
  useEffect(()=>{
    const node=row.current;if(!node)return;
    const sync=()=>{setCanBack(node.scrollLeft>2);setCanForward(node.scrollLeft+node.clientWidth<node.scrollWidth-3);};
    const observer=new ResizeObserver(sync);observer.observe(node);for(const child of node.children)observer.observe(child);
    node.addEventListener("scroll",sync,{passive:true});sync();
    return()=>{observer.disconnect();node.removeEventListener("scroll",sync);};
  },[children]);
  const scroll=(direction:number)=>{const node=row.current;if(node)node.scrollBy({left:direction*node.clientWidth*.85,behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"instant":"smooth"});};
  return <section className={styles.feedSection} aria-labelledby={id}><header className={styles.feedHeader}><h2 id={id}>{title}</h2><div className={styles.feedArrows}><button type="button" disabled={!canBack} onClick={()=>scroll(-1)} aria-label={`Previous ${title.toLowerCase()}`}><ArrowLeft size={16}/></button><button type="button" disabled={!canForward} onClick={()=>scroll(1)} aria-label={`More ${title.toLowerCase()}`}><ArrowRight size={16}/></button></div></header><div ref={row} className={`${styles.horizontalRow} ${styles[variant]}`} tabIndex={0} aria-label={`${title} carousel`}>{children}</div></section>;
}
function greeting(date:Date){const hour=date.getHours();return hour>=5&&hour<12?"Good morning":hour<17&&hour>=12?"Good afternoon":hour<22&&hour>=17?"Good evening":"Still exploring";}

export function DiscoveryDemo(){
  const [query,setQuery]=useState(""),[category,setCategory]=useState<string|null>(null),[salutation,setSalutation]=useState("Welcome to Socle"),[credits,setCredits]=useState(false);
  const search=useRef<HTMLInputElement>(null),creditDialog=useRef<HTMLDialogElement>(null);
  useEffect(()=>{setSalutation(greeting(new Date()));const timer=window.setInterval(()=>setSalutation(greeting(new Date())),60000);return()=>clearInterval(timer);},[]);
  useEffect(()=>{const handle=(event:KeyboardEvent)=>{if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==="k"){event.preventDefault();search.current?.focus();}};window.addEventListener("keydown",handle);return()=>window.removeEventListener("keydown",handle);},[]);
  useEffect(()=>{if(credits)creditDialog.current?.showModal();else creditDialog.current?.close();},[credits]);
  const visible=useMemo(()=>{
    const terms=query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return places.filter(place=>(!category||place.tags.includes(category))&&terms.every(term=>[place.name,place.category,place.city,...place.tags].join(" ").toLowerCase().includes(term)));
  },[category,query]);
  const filtering=Boolean(category||query.trim());
  const featured=filtering?visible:places.slice(0,8);
  const exploring=places.slice(8);
  const moment=places.find(p=>p.name==="9 Mile Station")??places[0];
  return <main className={styles.page}>
    <div className={styles.content}>
      <div className={styles.identity}><span className={styles.wordmark}>socle</span><span className={styles.demoLabel}>Discovery · homepage demo</span></div>
      <section className={styles.welcomeSection} aria-labelledby="welcome-title"><span className={styles.welcomeEyebrow}>DISCOVER SOCLE</span><h1 id="welcome-title">{salutation}</h1><p>Find a place for whatever today feels like.</p>
        <label className={styles.search}><Search size={18}/><input ref={search} type="search" aria-label="Search demo places" placeholder="Search places, moods, cuisines…" value={query} onChange={e=>setQuery(e.target.value)}/><kbd>⌘ K</kbd></label>
        <div className={styles.chipRow} role="group" aria-label="Filter places by mood">{chips.map(chip=><button key={chip.id} type="button" className={styles.discoveryChip} aria-pressed={category===chip.id} onClick={()=>setCategory(value=>value===chip.id?null:chip.id)}><chip.icon size={16}/>{chip.title}</button>)}{filtering&&<button type="button" className={styles.clearFilters} onClick={()=>{setQuery("");setCategory(null);}}>Clear filters<X size={14}/></button>}</div>
      </section>
      {featured.length?<Shelf title={filtering?"Your discoveries":"Featured places"} id="featured-places">{featured.map((place,i)=><article className={styles.perfectCard} key={place.id}><div className={styles.cardBody}><PhotoView photo={place.image} eager={i<3}/><div className={styles.perfectCopy}><strong>{place.name}</strong><span>{place.category} · {place.city}</span></div></div></article>)}</Shelf>:<section className={styles.empty} role="status"><Search size={24}/><h2>A different kind of discovery?</h2><p>No demo places match that search. Try a place name, city, or one of the moods above.</p><button type="button" onClick={()=>{setQuery("");setCategory(null);}}>Show all places</button></section>}
      {filtering&&<p className={styles.resultCount} role="status">{visible.length} {visible.length===1?"place":"places"} in this demo</p>}
      {!filtering&&<>
        <section className={styles.contextPanel} aria-labelledby="moment-title"><PhotoView photo={moment.image}/><span className={styles.contextScrim} aria-hidden="true"/><div className={styles.contextCopy}><p><Sparkles size={16}/>A LITTLE INSPIRATION</p><h2 id="moment-title">A good day, unplanned.</h2><span>A rooftop, a slow coffee, a table worth staying at. Start somewhere that feels like you.</span></div></section>
        <Shelf title="Keep exploring" id="keep-exploring" variant="compact">{exploring.map(place=><article className={styles.compactPlaceCard} key={place.id}><PhotoView photo={place.image}/><div><strong>{place.name}</strong><span>{place.category} · {place.city}</span></div></article>)}</Shelf>
        <Shelf title="Curated by Socle" id="curated-collections" variant="collection">{collections.map(collection=><article key={collection.id} className={styles.feedCollectionCard}><div className={styles.cardBody}><PhotoView photo={collection.image}/><div className={styles.collectionCopy}><strong>{collection.title}</strong><span>{collection.count} places</span></div></div></article>)}</Shelf>
      </>}
      <footer className={styles.footer}><span>A small preview of Socle Discovery.</span><button type="button" onClick={()=>setCredits(true)}>Photo credits</button></footer>
    </div>
    <dialog ref={creditDialog} className={styles.credits} onCancel={()=>setCredits(false)} onClick={event=>{if(event.target===event.currentTarget)setCredits(false);}}><header><h2>Photo credits</h2><button type="button" aria-label="Close photo credits" onClick={()=>setCredits(false)}><X size={20}/></button></header><p>Photography belongs to its credited owners. Source links below leave this demo.</p><ul>{content.credits.map((photo,i)=><li key={`${photo.source}-${i}`}><strong>{photo.name}</strong><span>{photo.credit}</span><a href={photo.source} target="_blank" rel="noopener noreferrer">Original source<ArrowRight size={13}/></a></li>)}</ul></dialog>
  </main>;
}
