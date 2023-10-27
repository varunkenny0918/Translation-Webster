import { Component } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  groupedCities: SelectItemGroup[];

  selectedCity: string | undefined;

  constructor() {
    this.groupedCities = [
      {
        label: 'India',
        value: 'in',
        items: [
          { label: 'Bengali', lang: 'bn' },
          { label: 'Kannada', code: 'kn', lang: 'kn' },
          { label: 'Marathi', code: 'mr', lang: 'mr' },
          { label: 'Malayalam', code: 'ml', lang: 'ml' },
          { label: 'Urdu', code: 'ur', lang: 'ur' },
          { label: 'Berlin', value: 'Berlin' },
          { label: 'Frankfurt', value: 'Frankfurt' },
          { label: 'Hamburg', value: 'Hamburg' },
          { label: 'Munich', value: 'Munich' },
        ],
      },
      {
        label: 'USA',
        value: 'us',
        items: [
          { label: 'Chicago', value: 'Chicago' },
          { label: 'Los Angeles', value: 'Los Angeles' },
          { label: 'New York', value: 'New York' },
          { label: 'San Francisco', value: 'San Francisco' },
        ],
      },
      {
        label: 'Japan',
        value: 'jp',
        items: [
          { label: 'Kyoto', value: 'Kyoto' },
          { label: 'Osaka', value: 'Osaka' },
          { label: 'Tokyo', value: 'Tokyo' },
          { label: 'Yokohama', value: 'Yokohama' },
        ],
      },
    ];
  }
}
