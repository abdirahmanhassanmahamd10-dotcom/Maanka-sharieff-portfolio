window.addEventListener("load",()=>{
 const loader=document.querySelector(".page-loader");
 if(loader) setTimeout(()=>loader.classList.add("hide"),300);
 document.querySelector(".page-transition")?.classList.add("loaded");
});

const observer=new IntersectionObserver((entries)=>{
 entries.forEach(entry=>{
  if(entry.isIntersecting) entry.target.classList.add("show");
 });
},{threshold:.12});

document.querySelectorAll("section,.project-card,.article,.journey-card,.video-card").forEach(el=>{
 el.classList.add("reveal");
 observer.observe(el);
});
