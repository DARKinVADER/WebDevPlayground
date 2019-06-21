import { BehaviorSubject } from 'rxjs';

const behaviorSubject = new BehaviorSubject('hello initial value from BehaviorSubject!');

behaviorSubject.subscribe(v=>console.log(v));

behaviorSubject.next('hello again from BehaviorSubject');