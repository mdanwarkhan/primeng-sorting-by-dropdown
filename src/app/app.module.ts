import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { TableModule } from "primeng/table";
import {
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TableModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
