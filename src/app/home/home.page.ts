import { Component, ViewChild } from '@angular/core';
import { CalendarOptions, formatDate, FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /* 날짜 클릭 시  alert 발생 하게 함.
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2022-04-23' },
      { title: 'event 2', date: '2022-04-02' }
    ]
  };

  constructor() { }

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);
  }
*/

  /*
    str = formatDate(new Date(), {
      month: 'long',
      year: 'numeric',
      day: 'numeric'
    });
    */

  /*
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: false // initial value
  };
  constructor() {
    console.log(this.str);

  }

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends; // toggle the boolean!
  }
  */


  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

  constructor() {
    this.someMethod();
  }

  someMethod() {
    // const calendarApi = this.calendarComponent.getApi();
    // console.log('calendarApi: ', calendarApi);
    console.log('calendarComponent: ', this.calendarComponent);

    // calendarApi.next();
  }



}
