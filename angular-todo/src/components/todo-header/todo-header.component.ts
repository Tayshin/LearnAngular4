import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { TodoStoreService } from '../../services/todo-store.service';

@Component({
    selector: 'todo-header',
    templateUrl: './todo-header.component.html'
})
export class TodoHeaderComponent{
    //新的todo
    newTodo = '';
    //服务暂存
    _todoStore;
    constructor (todoStore:TodoStoreService){
        this._todoStore = todoStore;
    }
    //todo添加入列表
    addTodo(){
        if(this.newTodo.trim().length) {
            this._todoStore.add(this.newTodo);
            this.newTodo = '';
        }
    }



}