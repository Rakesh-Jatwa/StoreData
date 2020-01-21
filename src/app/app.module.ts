import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicInputComponent } from './dynamic-input/dynamic-input.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicInputComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
