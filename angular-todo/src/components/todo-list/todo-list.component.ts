import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoStoreService } from '../../services/todo-store.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
	selector: 'todo-list',
	templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit{
    
    _todoStore;
    _route;
    _currentStatus;
	constructor(todoStore: TodoStoreService, route: ActivatedRoute) {
		this._todoStore = todoStore;
		this._route = route;
		this._currentStatus = '';
	}

	ngOnInit() {
        console.log("list =="+this._currentStatus);
		this._route.params
			.map(params => params.status)
			.subscribe((status) => {
				this._currentStatus = status;
			});
	}

	remove(uid) {
		this._todoStore.remove(uid);
	}

	update() {
		this._todoStore.persist();
	}

	getTodos() {
		if (this._currentStatus == 'completed') {
			return this._todoStore.getCompleted();
		} else if (this._currentStatus == 'active') {
			return this._todoStore.getRemaining();
		} else {
			return this._todoStore.todos;
		}
	}

	allCompleted() {
		return this._todoStore.allCompleted();
	}

	setAllTo(toggleAll) {
		this._todoStore.setAllTo(toggleAll.checked);
	}
}
