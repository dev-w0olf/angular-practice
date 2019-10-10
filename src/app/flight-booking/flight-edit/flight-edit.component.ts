import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {validateCity, validateCityParameterized} from '../../shared/validators/validateCity';
import {validateRoundTrip} from '../../shared/validators/validateRoundTrip';

import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {FlightService} from '../services/flight.service';
import {delay, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  editForm: FormGroup;

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private route: ActivatedRoute,
              private flightservice: FlightService) {
  }

  ngOnInit() {

    this.editForm = this.fb.group({
      id: ['' , [Validators.required]],
      from: ['', [Validators.required, Validators.minLength(3), validateCity]],
      to: ['', [Validators.required, Validators.minLength(3),
          validateCityParameterized(['Graz', 'Wien', 'Hamburg', 'Dortmund', 'Mallorca', 'Berlin', 'Zürich', 'München', 'Frankfurt'])]],
      date: ['', [Validators.required]],
      loadId: [''],
      delayed: [false]
    });

    this.route.paramMap.pipe(delay(500)).pipe(
      switchMap( params => {
        const id = parseInt(params.get('loadId'), 0);
        return this.flightservice.findById(id);
      })
    ).subscribe(
      flight => {
        this.editForm.patchValue(flight);
        this.editForm.controls['loadId'].setValue(flight.id);
      }
    );

    this.editForm.validator = validateRoundTrip;

    console.log('value ', this.editForm.value);
    console.log('valid ', this.editForm.valid);
    console.log('touched ', this.editForm.touched);
    console.log('dirty ', this.editForm.dirty);

    this.editForm.valueChanges
      .subscribe(console.log);
  }

  save(): void {
    console.log(this.editForm.value);
    const {loadId, ...actualFlight} = this.editForm.value;
    this.flightservice.save(this.editForm.controls['id'].value, actualFlight).subscribe();
  }

  load(): void {
    const ID = this.editForm.controls['loadId'].value;
    console.log(ID);
    this.flightservice.findById(ID).subscribe(flight => this.editForm.patchValue(flight));
  }

}
