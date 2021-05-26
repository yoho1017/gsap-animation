const t1 = gsap.timeline();
t1.to('#icon',0.4, { 
   repeat:-1,
   x: -1280,
   ease:SteppedEase.config(10),
  })
