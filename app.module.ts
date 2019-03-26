import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoungComponent } from './young/young.component';
import { InternalComponent } from './internal/internal.component';


@NgModule({
  declarations: [
    AppComponent,
    YoungComponent,
    InternalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
