/** GSAP Plugins ------------------------ */

gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin);

/** GSAP Animation - Section 1 */

/** Animations Feuilles */

gsap.from('#feuille1',{
    x:-100,
    rotation:-90,
    duration:3,
});

gsap.from('#feuille2',{
    x:100,
    rotation:90,
    duration:3,
})

/** Animation Carroussel */

let tlCarroussel = gsap.timeline({
    repeat:-1,
    yoyo:true
})

tlCarroussel.to('.carousselSection1',{x:'-205vw',duration:20,})
.to('.carousselSection1',{x:0,duration:20,}) 

/** Animations Sardines */

let tlSardines = gsap.timeline({

    repeat : -1,
    yoyo:true,

});

tl.to('.sardine1', {x:100, stagger : 0.1})
.to ('sardine1', {y :100, stagger : 0.1})
.to ('sardine1', {x :200, stagger : 0.1})
.to ('sardine1', {y :200, stagger : 0.1})

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