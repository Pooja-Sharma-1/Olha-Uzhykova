
gsap.from("#nav",{
    y:-100,
    opacity:0,
    duration:.6
})
gsap.from("#page1>img",{
    y:-200,
    duration:1
})
gsap.from("#platform",{
    y:100,
    opacity:0,
    duration:.7,
})
gsap.from("#page1 h3",{
    y:150,
    opacity:0,
    duration:.7,
    delay:1,
    stagger:.3
})

var tl=gsap.timeline()
tl.to("#gola",{
    left:"100%",
    top:"60%",
    rotate:720,
    duration:3,
    scrollTrigger:{
        trigger:"#gola",
        scroller:"body",
        // markers:true,
        start:"top -15%",
        end:"top -100%",
        scrub:2

    }
})
tl.to("#platform",{
    rotate:16,
    // duration:.1,
    scrollTrigger:{
        trigger:"#platform",
        scroller:"body",
        scrub:4,
        // markers:true,
        start:"top 90%",
        end:"top 75%",

    }
},"anime1")
tl.to("#platform",{
    rotate:-10,
    // duration:.1,
    scrollTrigger:{
        trigger:"#platform",
        scroller:"body",
        scrub:4,
        // markers:true,
        start:"top 15%",
        end:" top 13%",

    }
},"anime1")
tl.to("#platform",{
    rotate:0,
    // duration:.1,
    scrollTrigger:{
        trigger:"#platform",
        scroller:"body",
        scrub:4,
        // markers:true,
        start:"top -5%",
        end:" top -7%",

    }
},"anime1")
tl.from("#page2-in h1",{
    y:100,
    opacity:0,
    duration:.5,
    delay:1,
    onUpdate:function(){
        $('#page2-in h1').textillate({ in: { effect: 'fadeInUp' } });
        // console.log("hey")
    },
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        scrub:2,
        // markers:true,
        start:"top 20%",
        end:"top 30%"
        


    }
})

tl.to("#page2-cir svg .snake__text-path",{
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        scrub:3,
        // markers:true,
        start:"top 100%",
        end:"top 50%"
    },
    opacity:1,
    duration:.7
,    onStart:function snake(){
        var a=document.querySelector("#page2-cir svg .snake__text-path")
    var b=100
   if(b>0){
       setInterval(()=>{
        a.setAttribute("startOffset",`${b--}%`)
       },50);
    }
    },
    
   

})
tl.from("#semidiv h1",{
    y:100,
    opacity:0,
    duration:.3,
    delay:.4,
    onUpdate:function(){
        $('#semidiv h1').textillate({ in: { effect: 'fadeInUp' } });
    },
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        scrub:3,
        // markers:true,
        start:"top 79%",
        end:"top 50%"
    }

})
tl.from("#semidiv button",{
    y:200,
    opacity:0,
    scale:0,
    duration:.6,
    delay:.7,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        scrub:3,
        // markers:true,
        start:"top 65%",
        end:"top 40%"
    }
})
gsap.from("#semidiv p",{
    y:200,
    opacity:0,
    scale:0,
    duration:.6,
    delay:.7,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        scrub:3,
        // markers:true,
        start:"top 65%",
        end:"top 40%"
    }
})
gsap.from("#semidiv .block",{
    y:100,
    opacity:0,
    scale:0,
    duration:.5,
    delay:.4,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        scrub:3,
        // markers:true,
        start:"top -5%",
        end:"top -20%"
    }
})


var tl2=gsap.timeline(
    {
        scrollTrigger:{
            trigger:"#page5",
            scroller:"body",
            scrub:2,
            // markers:true,
            start:"top -100%",
            end:"top -95%"
            


        }
          
    }
)
tl.from("#page5 h1",{
    y:100,
    opacity:0,
    duration:.3,
    delay:.3,
    onUpdate:function(){
        $('#page5 h1').textillate({ in: { effect: 'fadeInUp' } });
    },
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        scrub:3,
        // markers:true,
        start:"top 74%",
        end:"top 50%"
    }

})
tl.from("#page5 p ",{
    y:150,
    opacity:0,
    duration:.3,
    delay:.3,
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        scrub:3,
        // markers:true,
        start:"top 67%",
        end:"top 40%"
    }

})
tl2.to("#page5 #goluji",{
    scale:13,
    duration:.7,
    // pin:true
})
tl2.from("#semii h1",{
    y:100,
    opacity:0,
    duration:.3,
    delay:.3,
    onUpdate:function(){
        $('#semii h1').textillate({ in: { effect: 'fadeInUp' } });
    },
    scrollTrigger:{
        trigger:"#page6",
        scroller:"body",
        scrub:3,
        // markers:true,
        start:"top 79%",
        end:"top 50%"
    }

})

var fol= document.querySelectorAll('.box')
fol.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        // console.log(elem.childNodes[5])
        elem.childNodes[5].style.opacity=1
    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[5].style.opacity=0
    })
    elem.addEventListener("mousemove",function(dets){
        elem.childNodes[5].style.left=`${dets.x/2}px`
        elem.childNodes[5].style.top=`${dets.y/2}px`
    })

})
  

