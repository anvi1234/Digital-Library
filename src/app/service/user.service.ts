import{Injectable}from "@angular/core";
import{HttpClient} from "@angular/common/http";
import{map} from "rxjs/operators";
import { Observable, throwError } from 'rxjs';


@Injectable()
export class LibraryService {
   Url="";
  constructor(private http:HttpClient) { 
    this.Url="http://localhost:1200/api/user/";
  }




 













  saveData(obj):any{
    return this.http.post(this.Url+ 'createUser',obj).pipe(map(y=>{
     return y;
    }))
  }

  getAllData():any{
    return this.http.get(this.Url+ 'getAllUser').pipe(map(x=>{
      return x;
    }))
  }

}