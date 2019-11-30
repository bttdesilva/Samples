import { Component } from '@angular/core';
import { ITraining } from './training';
import { TrainingService } from './training.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-training',
  templateUrl: 'app/training/training.component.html',
  styleUrls: ['app/training/training.component.css']

})
export class TrainingComponent implements OnInit {
  Name: string = 'Tom';
  StartDate: string = 'erer';
  EndDate: string = 'Male';

  trainings: ITraining[];
  training: ITraining;
  statusMessage: string = 'Loading data. Please wait...';

  constructor(private _trainingService: TrainingService, private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this._trainingService.getTrainings()
      .subscribe(trainingsData => this.trainings = trainingsData,
        error => {
        console.error(error);
        this.statusMessage = 'Problem with the service. Please try again after sometime';
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

  }

}
