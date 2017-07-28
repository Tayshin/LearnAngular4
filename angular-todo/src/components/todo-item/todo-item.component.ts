import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'todo-item',
    templateUrl: './todo-item.component.html'
})
export class TodoItemComponent {
    @Input() todo;

	@Output() itemModified = new EventEmitter();

	@Output() itemRemoved = new EventEmitter();

	editing = false;//是否正在双击编辑状态

    //取消编辑
	cancelEditing() {
		this.editing = false;
	}

    //停止编辑并且保存
	stopEditing(editedTitle) {
		this.todo.setTitle(editedTitle.value);
		this.editing = false;
    //如果编辑长度变成0了就删除这个todo
		if (this.todo.title.length === 0) {
			this.remove();
		} else {
			this.update();
		}
	}
    //
	edit() {
		this.editing = true;
	}

	toggleCompletion() {
		this.todo.completed = !this.todo.completed;
		this.update();
	}
    //删除uid 接口
	remove() {
		this.itemRemoved.next(this.todo.uid);
	}
    //更新 uid  接口
	update() {
		this.itemModified.next(this.todo.uid);
	}
}