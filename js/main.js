/** GSAP Plugins ------------------------ */

gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin);

/** GSAP Animation - Section 1 */

/** Animation Carroussel */

let tlCarroussel = gsap.timeline({
    repeat:-1,
    yoyo:true
})

tlCarroussel.to('.carousselSection1',{x:'-205vw',duration:20,})
.to('.carousselSection1',{x:0,duration:20,}) 

/** Animations Sardines */

let tlSardines1 = gsap.timeline({
    scrollTrigger:{
        trigger:'#section3',
        start:'top 100%',
        end:'top 20%',
        scrub:1,
        //markers:true,
        id:"Sardine",
        toggleActions: 'play none reverse reset',
    },

});

tlSardines1.to('.sardine1', {y:900, x:1380, stagger : 0.1, duration: 5})
.to ('sardine1', {x :100, stagger : 0.1})
.to ('sardine1', {y :500, stagger : 0.1})
.to ('sardine1', {y :100, stagger : 0.1})

let tlSardines2 = gsap.timeline({
    scrollTrigger:{
        trigger:'#section3',
        start:'top 100%',
        end:'top 20%',
        scrub:1,
        id:"Sardine",
        toggleActions: 'play none reverse reset',
    },
    
})

tlSardines2.to('.sardine2', {y:-900, x:-1380, stagger: 0.1, duration:5})
.to ('sardine2', {x:100, stagger:0.1})
.to ('sardine2', {y :500, stagger : 0.1})
.to ('sardine2', {y :100, stagger : 0.1,})


/** Scroll Trigger Section 3  */

const sections = gsap.utils.toArray("#section3 > div");  // J'ai reçu la partie de ce code de la part de Fiora que j'ai re adapté à mon site web

gsap.to(sections, {
  xPercent: -64,
  ease: "none",
  scrollTrigger: {
    trigger: "#section3",
    pin: true,
    scrub: 1,
    end: "+=2000"
  }
});

/** Draggable titre */

Draggable.create("#idTitreAnimaux", {
    type:"x,y",
    bounds:"#section3",
    cursor:'grab',

})

/**  Animation Bambou */  // J'ai essayé de faire une fonction pour changer la couleur de fond quand le bambou est sur le panda mais ça n'a pas fonctionné ( référence : https://gsap.com/docs/v3/Plugins/Draggable/ )

Draggable.create("#bambouDrag", {
    type: "x,y",
    bounds:"#section4",
    cursor:'grab',

    /**ondragend:function(){
        if (this.hitTest("#bambouDrag", 20)) {
        document.getElementById("#section4").style.backgroundColor="black";
            
        } else {
        document.getElementById("#section4").style.backgroundColor="antiquewhite"
        }
    } */

})


/** MatchMedia */

let mm = gsap.matchMedia();

mm.add({
    isMobile: "(max-width:799px)",
    isDekstop: "(min-width:800px)",
},(context) =>{
    let { isMobile, isDekstop } = context.conditions;

    gsap.to("#feuille1", {
        x:isMobile ? 0 : -100,
        rotation: isMobile ? 0 : 90,
        duration:3,
    })

    gsap.from('#feuille2',{
    x:isMobile ? 0 : 100,
    rotation: isMobile ? 0 : 90,
    duration:3,
    })
}

)