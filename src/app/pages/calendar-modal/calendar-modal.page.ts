import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.page.html',
  styleUrls: ['./calendar-modal.page.scss'],
})
export class CalendarModalPage implements OnInit {
  @Input() componentRef: any = undefined;
  constructor() {
    console.log('componentRef in modal: ', this.componentRef);

  }

  ngOnInit() {
  }

  onClickSave() {
    console.log('click save');
  }

  onClickCancel() {
    console.log('click cancel');

  }
  toggleChange(event: any) {
    console.log(event.target.checked);



  }

}
