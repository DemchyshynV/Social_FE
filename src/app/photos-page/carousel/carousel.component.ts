import {AfterViewInit, Component, ElementRef, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Photo} from '../../shared/interfaces';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  size: number;
  currentImg: number;

  constructor(public dialogRef: MatDialogRef<CarouselComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { urls: Photo[], index: number },
              private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.size = (this.data.urls.length - 1) * 1000;
    this.currentImg = 0 - this.data.index * 1000;
    // this.elementRef.nativeElement.querySelector('.img').style.marginLeft = `${this.currentImg}px`;
    console.log(this.size);

  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.querySelector('.img').style.marginLeft = `${this.currentImg}px`;
  }

  left() {
    if (this.currentImg !== 0) {
      this.currentImg += 1000;
    } else {
      this.currentImg = -this.size;
    }
    this.elementRef.nativeElement.querySelector('.img').style.marginLeft = `${this.currentImg}px`;

  }


  right() {
    if (Math.abs(this.currentImg) !== this.size) {
      this.currentImg -= 1000;
      console.log(this.currentImg);
    } else {
      this.currentImg = 0;
    }
    this.elementRef.nativeElement.querySelector('.img').style.marginLeft = `${this.currentImg}px`;
  }
}
