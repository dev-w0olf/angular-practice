import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Flight} from '../../entities/flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit {
  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  select(): void {
    this.selected = true;
    this.selectedChange.emit(this.selected);
  }

  deselect(): void {
    this.selected = false;
    this.selectedChange.emit(this.selected);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
