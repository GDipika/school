import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/shared/user-name.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  users = ['dipika', 'sumanth', 'charan','kondi']
  class = [
    'one', 'two', 'three', 'four']
  selected = "----";
  update(e: any) {
    this.selected = e.target.value
  }

  constructor(private formbuilder: FormBuilder) { }

  registration = this.formbuilder.group({
    Name: ['', [Validators.required, Validators.minLength(8),Validators.pattern("[A-za-z]{8}"),Validators.pattern("[A-Za-z]{8}"),forbiddenNameValidator()]],
    SurName: ['', [Validators.required, Validators.minLength(5),Validators.pattern("[A-za-z]{10}")]],
    class: ['select Class'],
    FathersName: ['', [Validators.required]],
    MothersName: ['', [Validators.required]],
    streetName: ['', [Validators.required]],
    Landmark: ['', [Validators.required]],
    Address1: ['', [Validators.required]],
    Address2: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required, Validators.maxLength(10),Validators.minLength(10)]],
    // email:['xyz@gmail.com',[Validators.required]]
  });
}




