import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {regionProperValueValidator} from "./regionProperValueValidator";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  userRegistrationForm!: FormGroup;

  regions = ["Choose a region...*", "Attica", "Central Greece", "Central Macedonia", "Crete",
    "Eastern Macedonia and Thrace", "Epirus", "Ionian Islands", "North Aegean",
    "Peloponnese", "South Aegean", "Thessaly", "Western Greece", "Western Macedonia", "Mount Athos"];


  constructor(private fb: FormBuilder) {
  }

  get fullname() {
    return this.userRegistrationForm.get("fullname");
  }

  get email() {
    return this.userRegistrationForm.get("email");
  }

  get region() {
    return this.userRegistrationForm.get("region");
  }

  get gender() {
    return this.userRegistrationForm.get("gender");
  }

  get receiveEmails() {
    return this.userRegistrationForm.get("receiveEmails");
  }

  get telephoneNumbers(): FormArray {
    return this.userRegistrationForm.get("telephoneNumbers") as FormArray;
  }

  ngOnInit(): void {
    // one of the ways to build your form
    //this.userRegistrationForm = new FormGroup({first_name: new FormControl("")})
    this.setFormInitialValues();
  }

  onSubmit() {
    console.log(this.userRegistrationForm);
    if (this.userRegistrationForm.valid) {
      console.log("success!");
      this.setFormInitialValues();
    } else {
      this.userRegistrationForm.markAllAsTouched();
      console.log("failure!");
    }
  }

  setExampleValues() {
    this.fullname?.setValue({first_name: "Code", last_name: "Hub"});
    // the following will throw an error
    //this.userRegistrationForm.get("fullname")?.setValue({first_name: "Code"});
    // the following will not throw an error
    //this.userRegistrationForm.get("fullname")?.patchValue({first_name: "Code"});
    this.email?.setValue("coder@codehub.gr");
    this.region?.setValue("Epirus");
    this.gender?.setValue("female");
    this.receiveEmails?.setValue(true);
    this.telephoneNumbers.at(0).setValue("555")
    this.telephoneNumbers.push(this.fb.control("2222"));
  }

  telephoneNumberAt(index: number) {
    return this.telephoneNumbers.at(index);
  }

  addTelephoneNumber() {
    this.telephoneNumbers.push(this.fb.control("", [Validators.required]));
  }

  removeTelephoneNumber(index: number) {
    this.telephoneNumbers.removeAt(index);
  }

  private setFormInitialValues() {
    this.userRegistrationForm = this.fb.group({
      fullname: this.fb.group({
        first_name: this.fb.control("", [Validators.required, Validators.pattern("[a-zA-Z]+$")]),
        last_name: this.fb.control("", [Validators.required, Validators.pattern("[a-zA-Z]+$")])
      }),
      email: this.fb.control("", [Validators.required, Validators.email]),
      region: this.fb.control("Choose a region...*", [Validators.required, regionProperValueValidator(this.regions)]),
      gender: this.fb.control("", [Validators.required]),
      receiveEmails: this.fb.control(""),
      telephoneNumbers: this.fb.array([this.fb.control("", [Validators.required])])
    });
  }
}
