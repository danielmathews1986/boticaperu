import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  TemplateRef,
  ViewChild
} from '@angular/core';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swiper.component.html'
})
export class SwiperComponent implements AfterViewInit {

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  @ContentChild(TemplateRef) slideTemplate!: TemplateRef<any>;
  @Input() slides: any[] = [];

  swiper!: Swiper;

  ngAfterViewInit(): void {

    this.swiper =  new Swiper(
      this.swiperContainer.nativeElement,
      {
        modules: [
          Navigation,
          Pagination
        ],

        slidesPerView: 5,

        centeredSlides: false,

        spaceBetween: 30,

        pagination: {
          el: '.swiper-pagination',
          //type: 'fraction'
        },

        breakpoints: {

          360: {
            slidesPerView: 1
          },

          480: {
            slidesPerView: 1
          },

          640: {
            slidesPerView: 2
          },
    
          768: {
            slidesPerView: 3
          },
    
          1024: {
            slidesPerView: 4
          },
    
          1280: {
            slidesPerView: 5
          }
    
        }

        // navigation: {
        //   nextEl:
        //     this.navigation.nextButton.nativeElement,

        //   prevEl:
        //     this.navigation.prevButton.nativeElement
        // }
      }
    );

  }

  next(): void {

    if (!this.swiper) {
      return;
    }

    this.swiper.slideNext();

  }

  prev(): void {

    if (!this.swiper) {
      return;
    }

    this.swiper.slidePrev();

  }
}