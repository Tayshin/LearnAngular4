import { Injectable } from '@angular/core';
import { TodoModel } from '../models/todo.model';

@Injectable()
export class TodoStoreService {
    //所有todo
    todos = [];
    //剩下的todo
    remainingTodos =[];
    //完成的todo
    completedTodos =[];    
    
    constructor() {
        //检查已经存在于缓存中的事项
        let persistedTodos = JSON.parse(localStorage.getItem('angular4-todos')) || [];
        //建立todo表
		this.todos = persistedTodos.map((todo) => {
			let ret = new TodoModel(todo.title);
			ret.completed = todo.completed;
			ret.uid = todo.uid;
			return ret;
		});
    }
    //返回xx状态的todo
    get(state) {
		return this.todos.filter((todo) => todo.completed === state.completed);
	}
    //
	allCompleted() {
		return this.todos.length === this.getCompleted().length;
	}
    //把所有todo设置为xx
	setAllTo(completed) {
		this.todos.forEach((todo) => todo.completed = completed);
		this.persist();
	}
    //去掉所有已经完成的todo并保存
	removeCompleted() {
		this.todos = this.get({ completed: false });
		this.persist();
	}
    //创建／保存todos的没做集合
	getRemaining() {
		if (!this.remainingTodos) {
			this.remainingTodos = this.get({ completed: false });
		}

		return this.remainingTodos;
	}
    //创建／保存todos的完成集合
	getCompleted() {
		if (!this.completedTodos) {
			this.completedTodos = this.get({ completed: true });
		}

		return this.completedTodos;
	}
    //切换todo的状态
	toggleCompletion(uid) {
		let todo = this._findByUid(uid);

		if (todo) {
			todo.completed = !todo.completed;
			this.persist();
		}
	}
    // 根据uid删除todo并保存
	remove(uid) {
		let todo = this._findByUid(uid);

		if (todo) {
			this.todos.splice(this.todos.indexOf(todo), 1);
			this.persist();
		}
	}
    //添加一个todo并保存
	add(title) {
		this.todos.push(new TodoModel(title));
		this.persist();
	}
    //保存接口
	persist() {
        this._clearCache();
        localStorage.setItem('angular4-todos', JSON.stringify(this.todos));
	}
    //uuid找todo
	_findByUid(uid) {
		return this.todos.find((todo) => todo.uid == uid);
	}
    //清除当前model层的todo内容；
	_clearCache() {
		this.completedTodos = null;
		this.remainingTodos = null;
	}
}
