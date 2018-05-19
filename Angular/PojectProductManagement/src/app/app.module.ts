import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { TaskService } from 'src/app/task.service';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    EditComponent,
    HomeComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
