import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MustMatch } from './_helpers/must-match.validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern("^[A-Z]{1}[a-z]{2,}$")]],
      lastName: ['', [Validators.required, Validators.pattern("^[A-Z]{1}[a-z]{2,}$")]],
      // userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[&%$#@?^*!~]).{8,}$")]],
      confirmPassword: ['', Validators.required],
  }
  );
}
get f() { return this.registerForm.controls; }
onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

onReset() {
  this.submitted = false;
  this.registerForm.reset();
}
}