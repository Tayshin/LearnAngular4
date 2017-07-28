import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoStoreService } from '../../services/todo-store.service';

@Component({
	selector: 'todo-footer',
	templateUrl: './todo-footer.component.html'
})
export class TodoFooterComponent implements OnInit{
    _todoStore;
    _route;
    currentStatus;
	constructor(todoStore:TodoStoreService, route:ActivatedRoute) {
		this._todoStore = todoStore;//服务暂存
		this._route = route;//路由
		this.currentStatus = '';//下方选择的tab的状态  包括 all active  completed
	}
    //
    ngOnInit() {
        console.log("footer == "+this.currentStatus);
        this._route.params
            .map(params => params.status)
            .subscribe((status) => {
                this.currentStatus = status || '';
            });
    }
    //清除已完成的并保存
	removeCompleted() {
		this._todoStore.removeCompleted();
	}
    //显示目前todo的条数
	getCount() {
		return this._todoStore.todos.length;
	}
    //显示未完成的todo条数
	getRemainingCount() {
		return this._todoStore.getRemaining().length;
	}
    //是否已经有完成的todo？（已完成的数量是否大于0）
	hasCompleted() {
		return this._todoStore.getCompleted().length > 0;
	}
}
