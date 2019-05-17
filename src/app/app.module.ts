import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import{AppComponent,RegisterComponent} from "./app.component";
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule, ScrollDispatchModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

 import{RouterModule, Routes} from "@angular/router";

import{RegisterationComponent } from "./registerationform.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CommonModule} from "@angular/common";

import{MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,

  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
 
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,MatCardModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,MatSort} from "@angular/material";
import{FormsModule,ReactiveFormsModule} from "@angular/forms";
import { LibraryService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';




export const routes:Routes=[
  {path:"start",component:AppComponent}
]



@NgModule({
  declarations: [
    AppComponent,RegisterComponent, RegisterationComponent,
  ],
  imports: [
    BrowserModule,CommonModule,FormsModule,MatInputModule,MatButtonModule,MatAutocompleteModule,CdkTreeModule, ScrollingModule, A11yModule,
    CdkStepperModule,RouterModule.forRoot(routes),ReactiveFormsModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatBadgeModule,ScrollDispatchModule,HttpClientModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
 
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    
    AppRoutingModule,NgbModule,BrowserAnimationsModule,MatFormFieldModule,MatIconModule,
  ],
  exports:[MatSortModule],
  entryComponents: [ AppComponent,RegisterComponent],
  providers: [LibraryService],
  bootstrap: [AppComponent]
})



export class AppModule { }
