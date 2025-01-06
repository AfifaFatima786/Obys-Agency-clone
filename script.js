var tl=gsap.timeline();


function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



}
locomotiveAnimation();


function loadingAnimation(){
  var counter=document.querySelector(".line-part1 h5");
var count=0;



tl.from(".line h1",{
    y:100,
    opacity:0,
    stagger:0.3
});

 
tl.from(".line-part1",{
  opacity:0,                             
  onStart:function(){                     /aise counter tl me onstart ke andr rkhne p counter tb chlega jb animation start hoga also after the main three lines are executed/
    setInterval(function(){
      count++;
      if(count<=9)
      {
        counter.textContent='0'+count;
      }
      else if(count<=100)
      {
        counter.textContent=count;
      }

},35)
  }
});
tl.to(".line h2",{
    opacity:1,
    animationName:"anime",
}); 


tl.to(".loader",{             /*loader ka content dissapear ho jaarha h after counter finishes*/
  opacity:0,
  duration:0.3,
  delay:3.7
});
tl.from(".page1",{
  y:1400,
  opacity:0,
  ease:Power4
});
tl.to(".loader",{
  display:"none"
});

tl.from(".nav",{
  opacity:0
});
tl.from(".herospan",{
  opacity:0,
  y:120,
  stagger:0.2,

  })


tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
  opacity:0,
  y:120,
  stagger:0.2,
});
tl.from("#hero1 ,.page2",{
  opacity:0,
},"-=1.2");               /isse y element poora phle chlega/
}
loadingAnimation();
Shery.makeMagnet(".nav-part2 h4");



function sheryAnimation(){
  Shery.imageEffect(".image-div",{
    style:5, 
    /*debug:true,   */        /*new effrct/
    /config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.13,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7666526861631143},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.4,"range":[0,2]},"discard_threshold":{"value":0.78,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.73,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},*/
    gooey:true,
  })
}
sheryAnimation();
/*Shery.makeMagnet(".nav-part2 h4" , {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});*/


function cursorAnimation()
{
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  




var videoContainer=document.querySelector(".video-container");
var video=document.querySelector(".video-container video");
videoContainer.addEventListener("mouseenter",function(){
  videoContainer.addEventListener("mousemove",function(dets){
    /*const rect= videoContainer.getBoundingClientRect();
    const relativeX= dets.clientX-rect.left;
    const relativeY=dets.clientY-rect.top;*/
   gsap.to(".mousefollower",{
    opacity:0
   })
   gsap.to(".video-cursor",{
    x:dets.x-1200,
    y:dets.y-130
   })
  
})
});
videoContainer.addEventListener("mouseleave",function(){
  gsap.to(".mousefollower",{
    opacity:1,
  })
  gsap.to(".video-cursor",{
    x:"5%",
   y:"0%"
  })
});







var flag=0;
videoContainer.addEventListener("click",function(){
  if(flag==0){
  video.play(),
  video.style.opacity=1,

  document.querySelector(".video-cursor").innerHTML='<i class="ri-pause-large-line"></i>'
  gsap.to(".video-cursor",{
    scale:0.5
  })
  flag=1
  
}
else{
  video.pause(),
  video.style.opacity=0,

  document.querySelector(".video-cursor").innerHTML='<i class="ri-play-fill"></i>'
  gsap.to(".video-cursor",{
    scale:1
})
flag=0
}

})

}
cursorAnimation();

document.addEventListener("mousemove",function(dets){
gsap.to("#flag",{
  x:dets.x-550,
  y:dets.y-411
})
})

document.querySelector("#hero3").addEventListener("mouseenter",function(){
  gsap.to("#flag",{
    opacity:1
  })
})
document.querySelector("#hero3").addEventListener("mouseleave",function(){
  gsap.to("#flag",{
    opacity:0
  })
})



gsap.from(".page3 h1", {
  opacity: 0,
  y: 60,
  delay:0.0001,
  scrollTrigger: {
    trigger: ".page3 h1",
    start: "top 60%",
    
    scroller:".main",
  },
});


gsap.from(".underline-page3",{
  opacity:0,
  x:-120,
  duration:1,
  scrollTrigger: {
    trigger: ".underline-page3",
    start: "top 80%",
    
    scroller:".main",
  },
})


gsap.from(".page4-content h1",{
  opacity:0,
  y:40,
  duration:1,
    scrollTrigger: {
    trigger: ".page4-content h1",
    start: "top 60%",
    // ye add kiya hai mene or bss class schange krdi thi mene
    scroller:".main",
  },

})
gsap.from(".underline",{
  opacity:0,
  x:-120,
  duration:1,
  scrollTrigger: {
    trigger: ".underline",
    start: "top 60%",
    // ye add kiya hai mene or bss class schange krdi thi mene
    scroller:".main",
  },
})



gsap.from(".page4-content p",{
  opacity:0,
  y:30,
  duration:1,
scrollTrigger: {
    trigger: ".page4-content p",
    start: "top 50%",
    // ye add kiya hai mene or bss class schange krdi thi mene
    scroller:".main",
  },
})