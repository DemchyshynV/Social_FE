import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PhotoService} from '../services/photo.service';
import {Photo} from '../shared/interfaces';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CarouselComponent} from './carousel/carousel.component';
import {absoluteFrom} from '@angular/compiler-cli/src/ngtsc/file_system';

@Component({
  selector: 'app-photos-page',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.css']
})
export class PhotosPageComponent implements OnInit {
  @ViewChild('input', {static: false}) inputRef: ElementRef;
  form: FormGroup;
  fileData: File = null;
  list: Photo[] = [];

  constructor(private photoService: PhotoService, private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      file: new FormControl(null)
    });
    this.photoService.getPhoto().subscribe(value => this.list = value);

  }

  onFileUpload(inputFile: any) {
    this.fileData = inputFile.target.files[0];
    // let reader = new FileReader();
    // reader.readAsDataURL(this.fileData);
    // reader.onload = () => {
    //   // this.list.push({id: null, url: reader.result.});
    //   console.log(reader.result);
    // };
    this.photoService.setPhoto(this.fileData).subscribe(value => {
      this.list.push(value.data);
    });
    this.ngOnInit();
  }

  trigerClick() {
    this.inputRef.nativeElement.click();
  };

  zoom(arrId: number) {
    const dialogRef = this.matDialog.open(CarouselComponent, {
      panelClass: 'custom-dialog-container',
      data: {urls: this.list, index: arrId}
    });

  }


}
