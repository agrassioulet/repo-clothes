import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddComponent } from './product-add/product-add.component';

import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


const Material = [
  MatExpansionModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatSelectModule,
  MatInputModule,
  MatButtonToggleModule,
  MatIconModule
]


@NgModule({
  declarations: [
    ProductAddComponent
  ],
  imports: [
    CommonModule, Material,
  ]
})
export class AdminModule { }
