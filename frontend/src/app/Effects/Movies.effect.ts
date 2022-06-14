import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, EmptyError, exhaustMap, map } from "rxjs";
import { LoadedSuccess, LoadRequest } from "../Action/counter.action";
import { MoviesDataService } from "../services/movies-data.service";

@Injectable()
export class MOvieEffects {


    loadMovies$=createEffect(()=>
    this.action$.pipe(
        ofType(LoadRequest),
        exhaustMap(()=>this.service.getdata().pipe(
            map((res)=>{
              
                console.log(res);
                
                return LoadedSuccess({data:res})
            })
        ))
    )
    )
    constructor(private action$:Actions,private service:MoviesDataService){

    }
}