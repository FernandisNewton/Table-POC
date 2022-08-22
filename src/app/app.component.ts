import { Component, Pipe, PipeTransform } from '@angular/core';
import { Chem7, ILab } from './lab.interface';

@Pipe({ name: 'keyValueUnsorted', pure: false })
export class KeyValuePipe implements PipeTransform {
  transform(input: any): any {
    let keys = [];
    for (let key in input) {
      if (input.hasOwnProperty(key)) {
        keys.push({ key: key, value: input[key] });
      }
    }
    return keys;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'poc';

  newValue?: any;

  constructor() {
    this.currentLab = JSON.parse(JSON.stringify(this.incomingLabs[0]));
  }

  incomingLabs: ILab[] = [
    {
      reports: {
        chem7: {
          sampleCollectionDate: '2022-08-19',
          Sodium: 100,
          Chloride: null,
          BUN: null,
          Glucose: 89,
          Potassium: null,
          Bicarb: null,
          Creatinine: null,
          eGFR: null,
        },
      },
    },
    {
      reports: {
        chem7: {
          sampleCollectionDate: '2022-08-18',
          Sodium: 100,
          Chloride: 100,
          BUN: 100,
          Glucose: 100,
          Potassium: 7,
          Bicarb: 10,
          Creatinine: 10,
          eGFR: 100,
        },
      },
    },
    {
      reports: {
        chem7: {
          sampleCollectionDate: '2022-08-17',
          Sodium: 97,
          Chloride: 89,
          BUN: 76,
          Glucose: 50,
          Potassium: 7,
          Bicarb: 45,
          Creatinine: 9,
          eGFR: 100,
        },
      },
    },
  ];

  currentLab: ILab;

  updateCurrentLabs(key: keyof Chem7, value: any) {
    this.currentLab.reports.chem7[key] = value;
    this.currentLab['reports'].chem7.sampleCollectionDate = null;
  }
}
