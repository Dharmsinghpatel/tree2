import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HeaderService } from 'src/app/sub-component/header/header.service';
import { ApiService } from 'src/service/api.service';
import { ToastrService } from 'ngx-toastr';

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
    public toastr: ToastrService
  ) {
    this.header.hide();
    this.form = this.formBuilder.group({
      first_name: [null, [
        // Validators.required,
        Validators.minLength(4)]],
      last_name: [null],
      email: [null, [Validators.required,
        // Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')
      ]],
      comment: [null, [Validators.required, Validators.minLength(4)]],
    });
    this.formControl = this.form.controls;
  }

  ngOnInit(): void {
  }

  send() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.api.sendMessage(this.form.value).subscribe(res => {

        this.toastr.success('Success', '')
      });
    }
    console.log(this.form, this.form.value);
  }

}
