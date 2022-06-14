import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import {LoadRequest,LoadedSuccess,LoadError } from '../Action/counter.action';
import { Movies } from '../Models/Movies.model';
import { movieSelectors } from '../Selectors/movies.selectors';
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent   {
 
  count$: any;
  count1$: any;
inputData:any;
changeFn(e:string) {
  this.inputData = e;
  
  this.count1$ = this.store.pipe(map((state)=>{
    console.log("redux",state.count1);
        if (this.inputData.length>0) {
          return state.count1.filter((x:any)=>x.id==this.inputData || x.title.toLowerCase().includes(this.inputData.toLowerCase()))
        }
        else{
          return state.count1
        }
        }))
  
}
  constructor(private store: Store<any>) {
    this.count$ = this.store.pipe(map((state)=>state.count))
    this.count1$ = this.store.pipe(map((state)=>{
console.log("redux",state.count1);
     return state.count1
    }))
   
 
    
    this.increment()
  }
 
  increment() {
    this.store.dispatch(LoadRequest());
  }
 
  
 
  reset() {
    this.store.dispatch(LoadError());
  }
}
