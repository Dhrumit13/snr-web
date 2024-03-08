import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CityNameService } from '../../../services/city-name.service';

@Component({
  selector: 'app-snr-auto-complete',
  templateUrl: './snr-auto-complete.component.html',
  styleUrls: ['./snr-auto-complete.component.scss'],
})
export class SnrAutoCompleteComponent implements OnInit {
  @Input() placeholder: string = 'Search...';
  @Output() optionSelected = new EventEmitter<string>();
  public cities: any = [];

  selectedCity = new FormControl();

  constructor(private cityNameService: CityNameService) {}

  ngOnInit() {
    this.cities = this.cityNameService.cityList.slice(0, 10);
  }

  onChangeSearch(val: string) {
    if (val) {
      let temp = this.cityNameService.cityList.filter((a) =>
        a.name.toLowerCase().includes(val.toLowerCase())
      );
      this.cities = temp.slice(0, 10);
    }
  }

  selectEvent(event: any): void {
    this.optionSelected.emit(event);
  }

  setValue(value: string) {
    let temp = this.cityNameService.cityList.filter(x => x.name === value);
    if(temp && temp.length > 0) {
      this.selectedCity.setValue(temp[0]);
    }
  }

  resetControl(): void {
    this.selectedCity.reset();
  }
}
