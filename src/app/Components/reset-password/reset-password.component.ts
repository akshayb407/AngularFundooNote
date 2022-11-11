import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Userservice } from 'src/app/Services/userServices/user.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private userService: Userservice) { }
  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
        password: ['', [Validators.required,Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required,Validators.minLength(8)]]
    });
}
    // convenience getter for easy access to form fields
   // get f() { return this.resetPasswordForm.controls; }

    onSubmit() {
        if (this.resetPasswordForm.valid) {
            console.log("valid data", this.resetPasswordForm.value);
            console.log("do api call");

            // do api calling
            let Data = {
                password: this.resetPasswordForm.value.password,
                confirmPassword: this.resetPasswordForm.value.confirmPassword
            }
            console.log(Data)
            this.userService.reset(Data).subscribe((res: any) => {
                console.log('reset password successful', res);
                console.log(Data);
            })
        }
        else {
            console.log('invalid data', this.resetPasswordForm.value);
            console.log('no api call');
        }



    }

    onReset() {
        this.submitted = false;
        this.resetPasswordForm.reset();
    }

}
