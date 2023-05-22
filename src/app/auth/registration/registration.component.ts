import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  class = [
    'one', 'two', 'three', 'four']
  selected = "----";
  update(e: any) {
    this.selected = e.target.value
  }

  constructor(private formbuilder: FormBuilder) { }

  registration = this.formbuilder.group({
    Name: ['', [Validators.required, Validators.minLength(3)]],
    SurName: ['', [Validators.required, Validators.minLength(3)]],
    class: ['select Class'],
    FathersName: ['', [Validators.required]],
    MothersName: ['', [Validators.required]],
    address: this.formbuilder.group({
      streetName: ['', [Validators.required]],
      Landmark: ['', [Validators.required]],
      Address1: ['', [Validators.required]],
      Address2: ['', [Validators.required]],
    })


  });
}


