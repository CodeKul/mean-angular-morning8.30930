import { HttpClientModule } from '@angular/common/http'
import { MobileService } from './service/mobile.service';
import { IotService } from './service/iot.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { MyAlertComponent } from './my-alert/my-alert.component';
import { MyCardComponent } from './my-alert/my-card.component';
import { LocalRefsComponent } from './local-refs/local-refs.component';
import { MyToolTipComponent } from './my-tool-tip/my-tool-tip.component';
import { InterCompComComponent } from './inter-comp-com/inter-comp-com.component';
import { OneComponent } from './inter-comp-com/one.component';
import { TwoComponent } from './inter-comp-com/two.component';
import { ServiceComponent } from './service/service.component';
import { MobOneComponent } from './service/mob-one.component';
import { MobTwoComponent } from './service/mob-two.component';
import { DirectivesComponent } from './directives/directives.component';
import { SimpleHoverDirective } from './directives/simple-hover.directive';
import { CalcComponent } from './calc/calc.component';


@NgModule({
  declarations: [
    AppComponent,
    MyAlertComponent,
    MyCardComponent,
    LocalRefsComponent,
    MyToolTipComponent,
    InterCompComComponent,
    OneComponent,
    TwoComponent,
    ServiceComponent,
    MobOneComponent,
    MobTwoComponent,
    DirectivesComponent,
    SimpleHoverDirective,
    CalcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MobileService,
    IotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
