
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
@NgModule({
  imports: [WelcomeRoutingModule,NzGridModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class WelcomeModule { }
