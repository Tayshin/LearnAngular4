import * as uuid from 'uuid';
export class TodoModel {
    //标识位-是否完成
    completed:boolean;
    //标题
    title:string;
    //唯一id
    uid;
    //规范化输入的内容
    setTitle(title){
        this.title = title.trim();
    }
    //根据输入的内容建立事项，分配uuid
    constructor(title) {
        this.uid = uuid.v4();
        this.completed = false;
        this.title = title.trim();
    }
}