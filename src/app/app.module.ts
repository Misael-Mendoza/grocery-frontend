import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewListComponent } from './new-list/new-list.component';
import { NewListServiceService } from './services/new-list-service.service';
import { FormsModule } from '@angular/forms';
import { ViewListsComponent } from './view-lists/view-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    NewListComponent,
    ViewListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule
  ],
  providers: [NewListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
