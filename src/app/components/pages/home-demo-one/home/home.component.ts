import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  mytime: Date = new Date();

  constructor(
      public ngxSmartModalService: NgxSmartModalService,
      public router: Router
  ) { }

  homeSlides: OwlOptions = {
    items: 1,
    nav: true,
    loop: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
        animateIn: `fadeIn`,
        animateOut: `fadeOut`,
    autoplayHoverPause: true,
    navText: [
            '<i class="flaticon-011-chevron-1"></i>',
            '<i class="flaticon-010-chevron"></i>'
]
}

}
