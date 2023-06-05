import { Component, OnInit } from '@angular/core';

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'site';

  

  constructor() {
    
  }
  ngOnInit() {

   this.initAnim()
  }

  startScroll(): void {
    gsap.to('.btn',{
      scrollTrigger: {
        scrub: true,
        trigger: '#trigger',
        start: '100% center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 2,
      opacity:0
    })

  }

  initAnim(): void {
    const anim  = gsap.from('#target',{
      stagger: 0.5,
      opacity:0,
      delay:2,
      y:-10,
      duration:2
     })
    
  }




}
