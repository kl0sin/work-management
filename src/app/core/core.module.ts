import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NavigationComponent, FooterComponent],
  imports: [CommonModule, SharedModule],
  exports: [NavigationComponent, FooterComponent]
})
export class CoreModule {}
