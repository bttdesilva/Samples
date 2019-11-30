export interface ITraining {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
}

export class Training implements ITraining {

    constructor(public id: number, public name: string, public startDate: string,
        public endDate: string) {
    }

}