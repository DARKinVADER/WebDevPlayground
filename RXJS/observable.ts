import { Observable } from 'rxjs';

const observable = new Observable(observer=>{
setTimeout(()=>observer.next('hello from Observable!'),1000);
});

observable.subscribe((v)=>console.log(v));
observable.subscribe((v)=>console.log(v));
observable.subscribe((v)=>console.log(v));