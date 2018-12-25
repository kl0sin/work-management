import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CalendarComponent } from './components/calendar/component/calendar.component';
import { DateFnsModule } from 'ngx-date-fns';
import { MiniCalendarComponent } from './components/mini-calendar/mini-calendar.component';
import { NewEventComponent } from './components/new-event/new-event.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CalendarComponent, HomeComponent, MiniCalendarComponent, NewEventComponent],
  imports: [CommonModule, DateFnsModule.forRoot(), SharedModule]
})
export class HomeModule {}
