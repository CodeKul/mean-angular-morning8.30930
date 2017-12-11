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


@NgModule({
  declarations: [
    AppComponent,
    MyAlertComponent,
    MyCardComponent,
    LocalRefsComponent,
    MyToolTipComponent,
    InterCompComComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
