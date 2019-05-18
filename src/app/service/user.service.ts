import{Injectable}from "@angular/core";
import{HttpClient} from "@angular/common/http";
import{map} from "rxjs/operators";
import { Observable, throwError, Subject } from 'rxjs';

export interface ColumnSortedEvent {
  sortColumn: string;
  sortDirection: string;
}


@Injectable()
export class LibraryService {
   Url="";
  constructor(private http:HttpClient) { 
    this.Url="http://localhost:1200/api/user/";
  }

  private columnSortedSource = new Subject<ColumnSortedEvent>();

  columnSorted$ = this.columnSortedSource.asObservable();

  columnSorted(event: ColumnSortedEvent) {
      this.columnSortedSource.next(event);
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