import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoFooterComponent } from '../components/todo-footer/todo-footer.component';
import { TodoHeaderComponent } from '../components/todo-header/todo-header.component';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { TodoListComponent } from '../components/todo-list/todo-list.component';

//路由
import { AppRoutingModule } from '../router/app-routing.module';
import { TodoStoreService} from '../services/todo-store.service';

import { TrimPipe } from '../pipes/trim/trim.pipe';
// import { routes } from '../routes';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFooterComponent,
    TodoHeaderComponent,
    TodoItemComponent,
    TrimPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TodoStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
