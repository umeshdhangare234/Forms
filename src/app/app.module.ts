import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TemplateDrivenformsComponent } from './template-drivenforms/template-drivenforms.component';
import { NameEditorComponent } from './reactiveforms/name-editor/name-editor.component';
import { ProfileEditorComponent } from './reactiveforms/profile-editor/profile-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveformsComponent,
    TemplateDrivenformsComponent,
    NameEditorComponent,
    ProfileEditorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
