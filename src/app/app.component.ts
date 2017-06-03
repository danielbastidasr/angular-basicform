import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions = ['Basic', 'Advanced', 'Premium'];
  selectedSubscription = 'Advanced';

  @ViewChild('signUpForm') sngForm:NgForm;
  onSubmit(){
    console.log('this is the email: '+this.sngForm.value.email);
    console.log('this is the choosen subscription: '+this.sngForm.value.subscription);
    console.log('this is the password: '+this.sngForm.value.password);
  }

}
