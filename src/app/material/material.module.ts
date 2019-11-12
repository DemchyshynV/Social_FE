import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule, MatSelectModule, MatSidenavModule,
  MatToolbarModule
} from "@angular/material";

const Materials = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatGridListModule,
  MatSidenavModule
]

@NgModule({
  imports: [
    Materials
  ],
  exports: [
    Materials
  ]
})
export class MaterialModule {
}
