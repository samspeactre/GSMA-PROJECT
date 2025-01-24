import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-traning-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './traning-slider.component.html',
  styleUrls: ['./traning-slider.component.css']
})

export class TraningSliderComponent implements AfterViewInit {

  slide = [
    {imgsrc: '../../../assets/img/training-carousel.png', title: '01', module: '03', url:''},
    {imgsrc: '../../../assets/img/training-carousel.png', title: '01', module: '03', url:''},
    {imgsrc: '../../../assets/img/training-carousel.png', title: '01', module: '03', url:''},
    {imgsrc: '../../../assets/img/training-carousel.png', title: '01', module: '03', url:''},
    {imgsrc: '../../../assets/img/training-carousel.png', title: '01', module: '03', url:''},
    {imgsrc: '../../../assets/img/training-carousel.png', title: '01', module: '03', url:''},
    {imgsrc: '../../../assets/img/training-carousel.png', title: '01', module: '03', url:''},
    {imgsrc: '../../../assets/img/training-carousel.png', title: '01', module: '03', url:''},
    {imgsrc: '../../../assets/img/training-carousel.png', title: '01', module: '03', url:''},
    {imgsrc: '../../../assets/img/training-carousel.png', title: '01', module: '03', url:''},
    {imgsrc: '../../../assets/img/training-carousel.png', title: '01', module: '03', url:''},
  ]
  ngAfterViewInit(): void {

    var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 4,
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}
