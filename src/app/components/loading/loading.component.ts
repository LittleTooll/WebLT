import { Component} from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html'
})
export class LoadingComponent {

  loading:string = "Loading...";
  wait:string="Please wait..."

}
