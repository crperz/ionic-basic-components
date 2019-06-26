import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss']
})
export class DateTimePage implements OnInit {
  current: Date = new Date();
  customPickerOptions;
  customDate;

  constructor() {}

  ngOnInit() {
    this.customPickerOptions = {
      button: [
        {
          text: 'Save',
          handler: event => {
            console.log('Clicked Save!');
            console.log(event);
          }
        },
        {
          text: 'Log',
          handler: () => {
            console.log('Clicked log. Do not Dismiss');
            return false;
          }
        }
      ]
    };
  }
}
