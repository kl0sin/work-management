import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [LogoComponent],
  imports: [CommonModule, MaterialModule],
  exports: [LogoComponent, MaterialModule]
})
export class SharedModule {}
