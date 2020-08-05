import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Observable} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {Profile} from "../../interfaces";
import {SiteLayoutService} from "../../../services/site-layout.service";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit {
  @ViewChild('input', {static: false}) inputRef: ElementRef;
  private form: FormGroup;
  fileData: File = null;
  url: any = "../../../../assets/addAvatar.gif";
  // url: any = '';
  // siteLayout$: Observable<Profile>;
  siteLayout$: Observable<Profile>;
  links = [
    {url: '/photos', name: 'Фото', notify: ''},
    {url: '/music', name: 'Музыка', notify: ''},
    // {url: '/settings', name: 'Настройки', notify: ''}

  ];
  massageFlag: boolean = true;
  friendFlag: boolean = true;


  constructor(private auth: AuthService, private siteLayoutService: SiteLayoutService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      file: new FormControl(null)
    });

    // this.siteLayout$ = this.siteLayoutService.getProfile();
    this.siteLayout$= this.siteLayoutService.getProfile();
  }

  triggerClick() {
    this.inputRef.nativeElement.click();


  }

  onFileUpload(inputFile: any) {
    this.fileData = inputFile.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = () => {
      this.url = reader.result;
    };
    this.siteLayoutService.setAvatar(this.fileData).subscribe(()=> this.form.controls.file.disable());
  }
}
