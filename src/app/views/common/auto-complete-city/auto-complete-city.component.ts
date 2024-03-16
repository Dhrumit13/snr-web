import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CityNameService } from '../../../services/city-name.service';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-auto-complete-city',
  templateUrl: './auto-complete-city.component.html',
  styleUrls: ['./auto-complete-city.component.scss'],
})
export class AutoCompleteCityComponent implements OnInit {
  @Input() placeholder: string = 'Search...';
  @Input() title: string = 'Search...';
  @Output() optionSelected = new EventEmitter<string>();
  public cities: any = [];

  options: any[] = [];
  filteredOptions!: Observable<any[]>;
  selectedCity = new FormControl();

  constructor(private cityNameService: CityNameService) {
    this.options = this.cityNameService.cityList.slice(0, 30);
  }

  ngOnInit() {
    this.filteredOptions = this.selectedCity.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: any): any[] {
    let filterValue = '';
    if(value) {
      filterValue = value?.toLowerCase();
    } else {
      filterValue = value;
    }

    let temp = this.cityNameService.cityList.filter((option: any) =>
      option.name.toLowerCase().includes(filterValue)
    );
    return (this.options = temp.slice(0, 30));
  }

  selectEvent(event: any): void {
    this.optionSelected.emit(event);
  }

  setValue(value: string) {
    let temp = this.cityNameService.cityList.filter((x) => x.name === value);
    if (temp && temp.length > 0) {
      this.selectedCity.setValue(temp[0].name);
    }
  }

  resetControl(): void {
    this.selectedCity.reset();
  }
}
