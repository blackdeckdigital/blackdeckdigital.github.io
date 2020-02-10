import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent  implements OnInit {
  loginForm: FormGroup; 
  submitted = false;
  constructor(public fb: FormBuilder,public router: Router) { }
  ngOnInit() {
    this.loginForm = this.fb.group({ 
        email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
}
get f() { return this.loginForm.controls; }
onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.loginForm.valid) {
    this.router.navigate(["dashboard"]); 
  }

  
}
 }
