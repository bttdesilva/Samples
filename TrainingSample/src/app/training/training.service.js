"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/Observable/throw");
var TrainingService = /** @class */ (function () {
    function TrainingService(_http) {
        this._http = _http;
        this.baseUrl = 'http://localhost:54190/api';
    }
    // Notice the method return type is Observable<IEmployee[]>
    TrainingService.prototype.getTrainings = function () {
        return this._http.get('http://localhost:54190/api/training')
            //return this._http.get('${this.baseUrl}/training')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //getTrainingById(id: number): Observable<ITraining> {
    //    return this._http.get("http://localhost:31324/api/training/" + id)
    //        .map((response: Response) => <ITraining>response.json())
    //        .catch(this.handleError);
    //}
    TrainingService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    TrainingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TrainingService);
    return TrainingService;
}());
exports.TrainingService = TrainingService;
//# sourceMappingURL=training.service.js.map