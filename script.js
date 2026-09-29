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

// Contact form: works on a static GitHub Pages site by opening the visitor's email app.
const contactForm=document.querySelector("#contactForm");
if(contactForm){
  contactForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const name=document.querySelector("#contactName")?.value.trim() || "";
    const email=document.querySelector("#contactEmail")?.value.trim() || "";
    const subject=document.querySelector("#contactSubject")?.value.trim() || "Website enquiry";
    const message=document.querySelector("#contactMessage")?.value.trim() || "";
    const status=document.querySelector("#formStatus");
    const body=[
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message
    ].join("\n");
    const mailto=`mailto:abdirahmanhassanmahamd10@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    if(status) status.textContent="Opening your email app…";
    window.location.href=mailto;
  });
}
