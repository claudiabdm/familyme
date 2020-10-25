import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { CreatedbyComponent } from './components/createdby/createdby.component';
import { RedirectMessagePageComponent } from './components/redirect-message-page/redirect-message-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LogoComponent, CreatedbyComponent, RedirectMessagePageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule,
    LogoComponent,
    CreatedbyComponent,
    RedirectMessagePageComponent
  ]
})
export class SharedModule { }
