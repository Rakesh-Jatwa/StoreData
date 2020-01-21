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
    gender: ['', [Validators.required]],
    fields: ['', [Validators.required]],
    labels: ['', [Validators.required]]
      })
  InpuValue1: number;
  itemList: any = [];
  fields:any = [];
  InpuValue2: any;


  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }


  get f() { return this.registrationForm.controls; }

  onSubmit() {
    this.isSubmitted = true;
    if(!this.registrationForm.valid) {
      return false;
    } 
    
    else {

         this.itemList.push({ 'button': 'person' }); 
         this.InpuValue1 = this.registrationForm.value.fields;
         this.InpuValue2 = this.registrationForm.value.labels;

         this.valueOf = this.InpuValue2.split(",");

         for (var i = 0; i < this.InpuValue1; i++) {

          this.itemList.push({ 'label': this.valueOf[i], 'fields': '' })
        }
        console.log(this.itemList);
      }
 

   
     


    }
  }  



