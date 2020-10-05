import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Passenger} from '../../entities/passenger';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.css']
})
export class PassengerCardComponent implements OnInit {
  @Input() item: Passenger;
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
