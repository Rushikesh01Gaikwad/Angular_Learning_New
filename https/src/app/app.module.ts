import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoredataComponent } from './component/storedata/storedata.component';
import { UserDataService } from './services/user-data.service';

@NgModule({
  declarations: [
    AppComponent,
    StoredataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: UserDataService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
