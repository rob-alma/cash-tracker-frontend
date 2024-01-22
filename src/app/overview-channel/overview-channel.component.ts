import { Component } from '@angular/core';
import { Record } from '../shared/model/record';
import { RecordService } from '../shared/service/api/record.service';
import { IconDefinition, faMugHot } from '@fortawesome/free-solid-svg-icons';
import { LocalstorageService } from '../shared/service/localstorage.service';
import { LocalstorageExtensionService } from '../shared/service/localstorage-extension.service';

@Component({
  selector: 'app-overview-channel',
  templateUrl: './overview-channel.component.html',
  styleUrls: ['./overview-channel.component.less']
})
export class OverviewChannelComponent {
  public recordsToday: Record[] = [];
  public faCoffee: IconDefinition = faMugHot;
  public header: string = '';
  public weekday: string = '';
  public daynumber: number = 0;
  public month: string = '';
  public today: Date = new Date();

  constructor(public ls: LocalstorageService, public lsExtension: LocalstorageExtensionService, record: RecordService) {
    this.weekday = this.today.toLocaleString('default', { weekday: 'long' });
    this.weekday = lsExtension.weekdays[this.today.getDay()];
    this.daynumber = this.today.getDate();
    this.month = lsExtension.monthNamesLong[this.today.getMonth()]

    this.header = this.weekday + ', ' + this.daynumber + ' ' + this.month;
    this.header = this.header[0].toUpperCase() + this.header.slice(1);
  }
}