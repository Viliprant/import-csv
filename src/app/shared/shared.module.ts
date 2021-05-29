import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//Material
import { MatButtonModule } from '@angular/material/button';

//Custom Component
import { CustomButtonComponent } from './components/atoms/custom-button/custom-button.component';
import { ImportCardComponent } from './components/molecules/import-card/import-card.component';


@NgModule({
  declarations: [
    CustomButtonComponent,
    ImportCardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [
    CustomButtonComponent,
    ImportCardComponent
  ]
})
export class SharedModule { }
