import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule,
  MatToolbarModule
} from "@angular/material";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";

const Materials = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatGridListModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatDialogModule
]

@NgModule({
  imports: [
    Materials
  ],
  exports: [
    Materials
  ],
  providers:[
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue:{duration: 2500, verticalPosition: 'top'}}
  ]
})
export class MaterialModule {
}
