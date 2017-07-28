export class Hero {
  id: number;
  name: string;
  state: string;
  toggleState() {
     this.state = (this.state === 'active' ? 'inactive' : 'active');
  }

}