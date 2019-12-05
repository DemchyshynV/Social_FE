import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Photo} from "../../shared/interfaces";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CarouselComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Photo) { }

  ngOnInit() {
  }

}
