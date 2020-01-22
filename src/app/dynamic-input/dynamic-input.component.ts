import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.css']
})
export class DynamicInputComponent implements OnInit {
  public isSubmitted = false;
  registrationForm = this.fb.group({
    radios: ['', [Validators.required]],
    fields: ['', [Validators.required]],
    labels: ['', [Validators.required]]
  })
  public InpuValue1: number;
  public  itemList: any = [];
  public fields: any = [];
  public InpuValue2: any;
  public arrdataIndex: any;
  public arrdata: any;
  public SaveButton: boolean = false;
  public EShowButtons: boolean = true;
  public ShowPersonN: boolean = true;
  public ShowIcone: boolean = false;
  public ShowForms: boolean = true;
  public isDisabled: boolean = false;
  public returnval: boolean = false;
 
 constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {

    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    }
    else {
      this.itemList.push({ 'button': 'person' });
      this.InpuValue1 = this.registrationForm.value.fields;
      this.InpuValue2 = this.registrationForm.value.labels;
      this.arrdata = this.InpuValue2.split(",");
      this.arrdataIndex = this.arrdata.forEach(element => {
        let data = parseInt(element);
       if (data) {this.returnval = true;}
      });
      if (this.returnval) return;
      this.returnval = false;
      for (var i = 0; i < this.InpuValue1; i++) {
        this.itemList.push({ 'label': this.arrdata[i], 'fields': '' })
      }
      }
    this.ShowForms = false;
    if (this.registrationForm.value.radios == "female") {

      this.ShowIcone = true;
    }
    else { this.ShowIcone = false; }
    if (this.registrationForm.value.radios == "male") {
      this.ShowPersonN = false;
    }
    else { this.ShowPersonN = true; }
    
  }
  ShowIcon() {
    this.ShowIcone = false;
  }
  ShowButtons() {
    this.EShowButtons = false;
    this.SaveButton = true;
    this.isDisabled = false;
  }
  SaveData(){
    this.EShowButtons = true;
    this.SaveButton = false;
    this.isDisabled = true;
  }
  GetInputData()
  {
    if(this.registrationForm.value.fields >10)
    {
      this.registrationForm.controls.fields.reset();
    }
  }
}



