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
        markers:true,
        id:"Sardine",
        toggleActions: 'play none reverse reset',
    },
    
})

tlSardines2.to('.sardine2', {y:-900, x:-1380, stagger: 0.1, duration:5})
.to ('sardine2', {x:100, stagger:0.1})
.to ('sardine2', {y :500, stagger : 0.1})
.to ('sardine2', {y :100, stagger : 0.1,})

/** Scroll Trigger Img Savane */


gsap.to("#imgSavane",{
    scrollTrigger:{
        trigger:'section3',
        start:'top 60%',
        end:'top 20%',
        scrub:1,
        //markers:true,
        id:"imgSavane",
        toggleActions: 'play none reverse reset',
    },

    duration: 2,
})




/**  Animation Bambou */

Draggable.create("#bambouDrag", {
    type: "x,y",
    bounds:"#section5",
    cursor:'grab',

})

/**

if (this.hitTest)("carreBambou","40px"){
        document.getElementById("pandaCoeur").classList.add("pandaCoeur--validate")
        
} else{
        document.getElementById("pandaCoeur").classList.remove("pandaCoeyr--validate")
} 

*/

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