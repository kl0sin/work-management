import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  currentDate = new Date();
  displayMonth: Array<any>;

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    this.displayMonth = this.calendarService.calculateMonth(this.currentDate);
  }

}
