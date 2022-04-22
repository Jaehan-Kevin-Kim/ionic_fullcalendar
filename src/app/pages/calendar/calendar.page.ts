/* eslint-disable no-underscore-dangle */
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import { ModalController, PopoverController } from '@ionic/angular';
import { CalendarModalPage } from '../calendar-modal/calendar-modal.page';
import { INITIAL_EVENTS, createEventId } from './event-utils';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements AfterViewInit {


  @ViewChild('calendarRef') calendarRef: ElementRef;

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
  currentEvents: EventApi[] = [];

  constructor(private _modalCtrl: ModalController, private _popCtrl: PopoverController) {
    this.modalOpen();
  }

  ngAfterViewInit(): void {
    console.log('calendarRef: ', this.calendarRef);

  }

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  async handleDateSelect(selectInfo: DateSelectArg) {
    console.log('clicked');

    const modal = await this._modalCtrl.create({
      component: CalendarModalPage,
      componentProps: { calendarRef: this.calendarRef },
      cssClass: 'calendar-modal',
      backdropDismiss: true
    });

    await modal.present();

    modal.onDidDismiss().then((result) => {
      console.log('data from children: ', result);

      if (result?.data?.event) {
        const event = result.data.event;
        if (event.allDay) {
          const start = event.startTime;
          event.startTime = new Date(
            Date.UTC(
              start.getUTCFullYear(),
              start.getUTCMonth(),
              start.getUTCDate()
            )
          );
          event.endTime = new Date(
            Date.UTC(
              start.getUTCFullYear(),
              start.getUTCMonth(),
              start.getUTCDate() + 1
            )
          );
        }
        // this.eventSource.push(result.data.event);
        // this.myCal.loadEvents();
      }
    });
  }


  // const title = prompt('Please enter a new title for your event');
  // const calendarApi = selectInfo.view.calendar;

  // calendarApi.unselect(); // clear date selection

  // console.log('selectInfo: ', selectInfo);

  // if (title) {
  //   calendarApi.addEvent({
  //     id: createEventId(),
  //     title,
  //     start: selectInfo.startStr,
  //     end: selectInfo.endStr,
  //     allDay: selectInfo.allDay
  //   });
  // }


  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

  async modalOpen() {
    const modal = await this._modalCtrl.create({
      component: CalendarModalPage,
      componentProps: { calendarRef: this.calendarRef },
      cssClass: 'calendar-modal',
      backdropDismiss: true
    });

    await modal.present();
  }

}
