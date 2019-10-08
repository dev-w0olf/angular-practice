import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-flight-status-toggle',
  templateUrl: './flight-status-toggle.component.html',
  styleUrls: ['./flight-status-toggle.component.css']
})
export class FlightStatusToggleComponent implements OnInit {

  @Input() status: boolean;
  @Output() statusChange = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  toggleStatus(): void {
    this.status = ! this.status;
    this.statusChange.emit(this.status);
  }
}
