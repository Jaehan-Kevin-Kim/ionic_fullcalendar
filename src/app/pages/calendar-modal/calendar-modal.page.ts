/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-underscore-dangle */
import { Component, Input, OnInit } from '@angular/core';
import { DateSelectArg } from '@fullcalendar/angular';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.page.html',
  styleUrls: ['./calendar-modal.page.scss'],
})
export class CalendarModalPage implements OnInit {
  @Input() componentRef: any = undefined;
  @Input() selectInfo: DateSelectArg = undefined;
  selectedDateFormat: any = undefined;
  selectedStartTimeFormat: any = undefined;
  selectedEndTimeFormat: any = undefined;
  datePickerClicked = false;
  alldayChecked = false;
  startDate: any = undefined;
  constructor() {
    console.log('componentRef in modal: ', this.componentRef);

  }

  ngOnInit() {
    this.selectedDateFormat = dayjs(this.selectInfo?.startStr).format('ddd., MMM.DD,YYYY');
    console.log('selectInfo in modal: ', this.selectInfo);
    this.alldayChecked = this.selectInfo?.allDay;
    //아래는 dayjs 이용해서 시작 시간 값 과져오기
    // this.selectedStartTimeFormat = dayjs(this.selectInfo?.start);
    // this.selectedStartTimeFormat = dayjs(this.selectInfo?.start.M.$d);
    console.log('total selected Info date info: ', this.selectInfo?.start);
    this.selectedStartTimeFormat = this.selectInfo?.start;
    this.selectedEndTimeFormat = this.selectInfo?.end;
    // this.selectedStartTimeFormat = this.selectInfo.start.getDate();
    console.log('slectedStartTimeFormat', this.selectedStartTimeFormat);

  }

  onClickSave() {
    console.log('click save');
  }

  onClickCancel() {
    console.log('click cancel');

  }
  toggleChange(event: any) {
    console.log(event.target.checked);
    this.alldayChecked = event.target.checked;
  }

  onStartDateClicked() {
    this.startDate = this.selectInfo?.start.toISOString();
    this.datePickerClicked = true;

    // this._ionNav.push(DateRangeComponent, {
    //   startDate,
    //   // endDate

    //   //   [nameof<DateRangeComponent>("endDate")]: endDate,
    //   //   [nameof<DateRangeComponent>("callback")]: ({ startDate, endDate }) => {
    //   //     let orderDateRange = {
    //   //       ...this.refineSvc.initOrderDateRange,
    //   //       value: { startDate, endDate },
    //   //       status: true
    //   //     };
    //   //     let filter = { ...this.refineSvc.filter$.value, orderDateRange };
    //   //     this.refineSvc.filter$.next(filter);
    //   //     this.callback(true);
    //   //     this._cdr.markForCheck();
    //   //   }
    //   // });
    // });
  }

  onStartDateChanged(event: any) {
    console.log("startDateChanged: ", event.detail.value);
    console.log(event.detail);
    const test = event.detail.value;
    const newDate = new Date(test);
    console.log(newDate);
    this.datePickerClicked = false;


    // console.log(event.detail.value.getDate());




  }

}
