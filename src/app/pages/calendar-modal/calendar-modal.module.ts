import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarModalPageRoutingModule } from './calendar-modal-routing.module';

import { CalendarModalPage } from './calendar-modal.page';
import { CustomDatePipe } from 'src/app/pipes/custom-date.pipe';
import { CoreCommonModule } from 'src/app/common/core-common.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarModalPageRoutingModule,
    CoreCommonModule

  ],
  declarations: [CalendarModalPage, CustomDatePipe]
})
export class CalendarModalPageModule { }
