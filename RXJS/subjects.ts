import { Subject } from 'rxjs';

const subject = new Subject();

subject.next('missed message from Subject');

subject.subscribe(v=>console.log(v));

subject.next('hello from subject');