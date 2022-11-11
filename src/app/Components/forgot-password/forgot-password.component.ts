import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Userservice } from 'src/app/Services/userServices/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: Userservice) { }

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]]
        
    });
}
onSubmit():void {
    if (this.forgotPasswordForm.valid) {
        console.log("valid data", this.forgotPasswordForm.value);
        console.log("do api call");

        // do api calling
        let Data = {
            email: this.forgotPasswordForm.value.email
          
        }
        console.log(Data)
        this.userService.forgot(Data).subscribe((res: any) => {
            console.log('forgot successful', res);
            console.log(Data);
        })
    }
    else {
        console.log('invalid data', this.forgotPasswordForm.value);
        console.log('no api call');
    }



}

onReset() {
    this.submitted = false;
    this.forgotPasswordForm.reset();
}
 

  

}