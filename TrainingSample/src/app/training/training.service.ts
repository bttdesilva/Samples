import { Injectable } from '@angular/core';
import { ITraining } from './training';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class TrainingService {
    private baseUrl: string = 'http://localhost:54190/api'
    constructor(private _http: Http) { }

    // Notice the method return type is Observable<IEmployee[]>
    getTrainings(): Observable<ITraining[]> {
        return this._http.get('http://localhost:54190/api/training')
        //return this._http.get('${this.baseUrl}/training')
            .map((response: Response) => <ITraining[]>response.json())
            .catch(this.handleError);

    }

    //getTrainingById(id: number): Observable<ITraining> {
    //    return this._http.get("http://localhost:31324/api/training/" + id)
    //        .map((response: Response) => <ITraining>response.json())
    //        .catch(this.handleError);
    //}


    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }


//    getTrainings(): ITraining[] {
//        return [
//            {
//                id: 1, name: 'Tom', startDate: '6/25/2020', endDate: '8/25/2020'
//            },
//            {
//                id: 2, name: 'Nancy', startDate: '6/25/2020', endDate: '8/25/2020'
//            },
//            {
//                id: 3, name: 'Mary', startDate: '6/25/2020', endDate: '8/25/2020'
//            },
//            {
//                id: 4, name: 'Steve', startDate: '6/25/2020', endDate: '8/25/2020'
//            },           
//        ];
//    }
}

