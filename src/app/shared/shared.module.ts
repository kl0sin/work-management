import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { MaterialModule } from './material/material.module';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationComponent } from './notification/component/notification.component';
import { NewEventComponent } from '../modules/home/components/new-event/new-event.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from './modal/component/modal.component';

@NgModule({
  declarations: [LogoComponent, FormComponent, NotificationComponent, ModalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [
    LogoComponent,
    MaterialModule,
    FormComponent,
    ReactiveFormsModule,
    NotificationComponent,
    FontAwesomeModule,
    ModalComponent
  ],
  entryComponents: [NewEventComponent]
})
export class SharedModule {}
