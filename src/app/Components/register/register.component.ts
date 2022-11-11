import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MustMatch } from './_helpers/must-match.validator';
import { Userservice } from 'src/app/Services/userServices/user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder,private userService : Userservice) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
     // userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
  }
  );
}
 
onSubmit() {
  if (this.registerForm.valid){
   console.log("valid data",this.registerForm.value);
   console.log("do api call");

  // do api calling
       let Data = {
                   ResetPasswordComponent: this.registerForm.value.email,
                    password: this.registerForm.value.password
                  }
                  this.userService.register(Data).subscribe((res:any)=>{
                  console.log('Register successful', res);
                  console.log(Data);
                  })
                }
                else{
                  console.log('invalid data',this.registerForm.value);
                  console.log('no api call');
                }
  
}

onReset() {
  this.submitted = false;
  this.registerForm.reset();
}
}
