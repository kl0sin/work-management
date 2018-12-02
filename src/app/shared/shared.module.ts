import { ModalModule } from './modal/modal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { MaterialModule } from './material/material.module';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationComponent } from './notification/component/notification.component';
import { NewEventComponent } from '../modules/home/components/new-event/new-event.component';

@NgModule({
  declarations: [LogoComponent, FormComponent, NotificationComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [
    LogoComponent,
    MaterialModule,
    FormComponent,
    ReactiveFormsModule,
    NotificationComponent,
    ModalModule
  ],
  entryComponents: [NewEventComponent]
})
export class SharedModule {}
