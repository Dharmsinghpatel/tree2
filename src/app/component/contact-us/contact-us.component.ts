import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HeaderService } from 'src/app/sub-component/header/header.service';
import { ApiService } from 'src/service/api.service';
import { ToastrService } from 'ngx-toastr';
import { NavbarService } from 'src/app/sub-component/navbar/navbar.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  form: FormGroup;
  formControl;
  constructor(
    public header: HeaderService,
    public api: ApiService,
    private formBuilder: FormBuilder,
    public toastr: ToastrService,
    public navService: NavbarService,
    public router:Router
    ) {
    this.header.hide();
    navService.metaData = [{ name: "description", content: "Comment us about our agriculture product and we will answer you as quickly as possible." },
    { name: "keywords", content: "agri arbor contact, agri arbor contact us, agri arbor sampark, agri arbor sampark number, agri arbor sampark nambar, agri arbor email, agri arbor number,agri arbor nambar " }];

    navService.metaTitle = 'Contact';

    this.form = this.formBuilder.group({
      first_name: [null, [
      Validators.required,
      Validators.minLength(4)]],
      last_name: [null],
      contact: [null, [Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[6-9]{1}[0-9]{9}$|[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')
      ]],
      comment: [null, [Validators.required, Validators.minLength(4)]],
    });
    this.formControl = this.form.controls;
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  send() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.api.sendMessage(this.form.value).subscribe(res => {
        if(res.status=='success'){
          this.toastr.success(res.msg)
          this.router.navigate(['/home']);
        }else{
          this.toastr.error(`Sorry to you for this inconvince.
                             इस अनिश्चितता के लिए आपको क्षमा करें।`)
        }

      });
    }
  }

}
