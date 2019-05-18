import { Component,OnInit ,Inject, ViewChild, AfterViewInit, Input, HostListener, OnDestroy, Output, EventEmitter} from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import{LibraryService} from "./service/user.service";
import{Router} from "@angular/router";
import {MatSort, MatTableDataSource} from '@angular/material';
import { libraryObject } from './user.model';
import { Subscription } from 'rxjs';

export interface userData {
  name: string;
  course: string;
  book: string;
  writer: string;
  contact:Number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LibraryService],
})
export class AppComponent implements OnInit,OnDestroy {

 userData: userData[];
  
  User:libraryObject=new libraryObject();

 


  title = 'libraryapp';
 
  public image
  constructor(config: NgbCarouselConfig,public dialog: MatDialog, public service:LibraryService) {
  // customize default val ues of carousels used by this component tree
  config.interval=2000;
  config.wrap = true;
  config.keyboard = false;
  config.pauseOnHover = false;
  config.showNavigationIndicators=false;
  this.getvalue();
} 

@Input("sortable-column")
columnName:string = '';
@Input('sort-direction')
sortDirection: string = '';
@Output()
    sorted = new EventEmitter();

private columnSortedSubscription: Subscription;
@HostListener('click')
    Onsort() {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        this.service.columnSorted({sortColumn: this.columnName, sortDirection: this.sortDirection });
    
    }




ngOnInit(){

  this.columnSortedSubscription = this.service.columnSorted$.subscribe(event => {
    // reset this column's sort direction to hide the sort icons
    if (this.columnName != event.sortColumn) {
        this.sortDirection = '';
    }
});

this.columnSortedSubscription = this.service.columnSorted$.subscribe(event => {
  this.sorted.emit(event);
});
  this.image=[
  "assets/image/image1.jpg",
  "assets/image/image2.jpg",
  "assets/image/image3.jpg",
  "assets/image/image4.jpg",
  "assets/image/image5.jpg",
  "assets/image/image6.jpg",
  "assets/image/image7.jpg",
  "assets/image/image8.jpg",
  ];
this.getvalue();

}



getvalue() {
  this.service.getAllData().subscribe(x => {
      if (x.userresponse.message == "success") {
          this.userData = x.userresponse.userData;
      
         
       
      }
     
      else {
          alert(x.userresponse.message);
      }
  })
  

}
openDialog(): void {
  const dialogRef = this.dialog.open(RegisterComponent, {
   
   
  });
}

ngOnDestroy() {
  this.columnSortedSubscription.unsubscribe();
}

}




@Component({
  selector: 'register',
  templateUrl: 'registerationform.component.html',
  providers:[LibraryService],
})
export class RegisterComponent{

  library:libraryObject=new libraryObject();
  
  constructor(public dialogRef: MatDialogRef<RegisterComponent>,public service:LibraryService,public router:Router)
  {
    
  }
  save(){
    this.service.saveData(this.library).subscribe(y=>{
      if(y.userresponse.message!="warning"){
        alert("Successful Register");
      }
      else{
        alert(y.useresponse.message);
      }
    })
  }
  

  
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  
}