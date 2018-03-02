import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})

export class SignupComponent implements OnInit {
  register(form: FormGroup) {
    form.reset();
   }
  form: FormGroup;
  successMessage:string = '';
  errorMessage:string = '';
 constructor(private fb: FormBuilder, private router : Router, private userService : UserService){}
  ngOnInit() {
     this.form = this.fb.group({  

     fname: ['', [Validators.required, Validators.pattern('^[a-z][A-Z]{20}$'), Validators.maxLength(15)]],
      lname: ['', [Validators.required, Validators.maxLength(15)]],
      emailId: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      pwd: ['', [Validators.required, Validators.maxLength(12)]],
      password:  ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      address: ['', Validators.required],
      mobileNo: ['', Validators.required, [Validators.pattern('^[1-9][0-9]$')]],
     gender:['', Validators.required],
      dob:['' , Validators.required],
      state:['', Validators.required],
      country:['', Validators.required]
    });
    
  }
 

  onSubmit() {
   this.successMessage = '';  
   this.errorMessage = '';
    this.userService.signUpUser(this.form.value)
    .subscribe( 
      (data) => { console.log(data);
    this.successMessage ='Click Here go Login.';
    // this.router.navigate(['/home']); 
    
      },       
    
      (error) => {console.log(error)
        this.errorMessage = 'user could not be updated';
      },
      () => console.log('success')  
    );
  }
}
//     console.log("data in component"+JSON.stringify(this.form.value));
//     this.call();
// }
// call() {
//   this.userService.signUpUser(JSON.stringify(this.form.value));

//   }  

