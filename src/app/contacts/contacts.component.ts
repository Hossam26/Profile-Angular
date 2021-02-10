import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faFacebook, faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  constructor(private _router:Router,private _toastr:ToastrService) { 
  }
  faFace=faFacebookF
  faTwitter=faTwitter
  faLinked=faLinkedinIn
  faGlobe=faGlobe;
  contactForm:FormGroup=new FormGroup({
    'name':new FormControl(null,[Validators.required,Validators.pattern(/^[A-Za-z ]{3,25}$/)]),
    'mail':new FormControl(null,[Validators.required,Validators.email]),
    'phone':new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]{6,20}$/)]),
    'message':new FormControl(null,[Validators.required,Validators.minLength(1)])

  })

 
      submit(){
        this._toastr.success("You have submitted your message successfully")
           this.contactForm.reset()
      }
  

  ngOnInit(): void {
  }

}
