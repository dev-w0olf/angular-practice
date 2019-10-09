import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {validateCity, validateCityParameterized} from '../../shared/validators/validateCity';
import {validateRoundTrip} from '../../shared/validators/validateRoundTrip';

import {HttpClient} from '@angular/common/http';
import {Flight} from "../../entities/flight";

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  editForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  ngOnInit() {

    const url = './api/flight/3';
    const flight = this.http.get<Flight>(url).subscribe(flight => this.editForm.patchValue(flight));


    this.editForm = this.fb.group({
      id: [
        ''
        , [Validators.required]],
      from: ['', [Validators.required, Validators.minLength(3), validateCity]],
      to: ['', [Validators.required, Validators.minLength(3), validateCityParameterized(['Graz', 'Wien'])]],
      date: ['', [Validators.required]]
    });

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
  }

}
