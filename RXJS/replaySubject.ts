import { ReplaySubject } from 'rxjs';

const replaySubject = new ReplaySubject();

replaySubject.next('hello from ReplaySubject!')

replaySubject.next('hello from second event from ReplaySubject');

replaySubject.subscribe(v=>console.log(v));

replaySubject.next('hello from third event from ReplaySubject after subscription');

replaySubject.subscribe(v=>console.log(v));
