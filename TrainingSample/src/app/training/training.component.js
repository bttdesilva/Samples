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
var training_service_1 = require("./training.service");
var router_1 = require("@angular/router");
var TrainingComponent = /** @class */ (function () {
    function TrainingComponent(_trainingService, _activatedRoute) {
        this._trainingService = _trainingService;
        this._activatedRoute = _activatedRoute;
        this.Name = 'Tom';
        this.StartDate = 'erer';
        this.EndDate = 'Male';
        this.statusMessage = 'Loading data. Please wait...';
    }
    TrainingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._trainingService.getTrainings()
            .subscribe(function (trainingsData) { return _this.trainings = trainingsData; }, function (error) {
            console.error(error);
            _this.statusMessage = 'Problem with the service. Please try again after sometime';
        });
        //let id: number = 1;
        //this._trainingService.getTrainingById(id)
        //  .subscribe((trainingData) => {
        //    if (trainingData == null) {
        //      this.statusMessage =
        //        'Training with the specified Employee Code does not exist';
        //    }
        //    else {
        //      this.training = trainingData;
        //    }
        //  },
        //    (error) => {
        //      this.statusMessage =
        //        'Problem with the service. Please try again after sometime';
        //      console.error(error);
        //    });
    };
    TrainingComponent = __decorate([
        core_1.Component({
            selector: 'my-training',
            templateUrl: 'app/training/training.component.html',
            styleUrls: ['app/training/training.component.css']
        }),
        __metadata("design:paramtypes", [training_service_1.TrainingService, router_1.ActivatedRoute])
    ], TrainingComponent);
    return TrainingComponent;
}());
exports.TrainingComponent = TrainingComponent;
//# sourceMappingURL=training.component.js.map