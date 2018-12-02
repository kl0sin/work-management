import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CalendarComponent } from './components/calendar/component/calendar.component';
import { DateFnsModule } from 'ngx-date-fns';
import { MiniCalendarComponent } from './components/mini-calendar/mini-calendar.component';
import { NewEventComponent } from './components/new-event/new-event.component';

@NgModule({
  declarations: [CalendarComponent, HomeComponent, MiniCalendarComponent, NewEventComponent],
  imports: [CommonModule, DateFnsModule.forRoot()]
})
export class HomeModule {}
