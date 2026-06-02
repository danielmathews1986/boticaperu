import {
    Component,
    ElementRef,
    ViewChild
  } from '@angular/core';
  
  @Component({
    selector: 'app-swiper-navigation',
    standalone: true,
    templateUrl: './swiper-navigation.component.html'
  })
  export class SwiperNavigationComponent {
  
    @ViewChild('prevButton')
    prevButton!: ElementRef;
  
    @ViewChild('nextButton')
    nextButton!: ElementRef;
  
  }