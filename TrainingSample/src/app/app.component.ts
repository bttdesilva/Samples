import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div>
                    <h1>{{pageHeader}}</h1>
                    <my-training></my-training>
               </div>`

})
export class AppComponent { pageHeader: string = 'Training Details'; }
