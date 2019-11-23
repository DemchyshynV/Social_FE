import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule,
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
  MatSidenavModule,
  MatProgressSpinnerModule
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
