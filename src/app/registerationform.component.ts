import{Component, OnInit} from "@angular/core";
import{libraryObject} from "./user.model";
import { setTNodeAndViewData } from '@angular/core/src/render3/state';
@Component({
    selector: 'dd',
    templateUrl: './registerationform.component.html',
    styleUrls: ['./app.component.css']
  })
  export class RegisterationComponent implements OnInit {
    library:libraryObject=new libraryObject();
    constructor(){}
    ngOnInit(){}
    save(){
      console.log(this.library);
    }
  }
  

 