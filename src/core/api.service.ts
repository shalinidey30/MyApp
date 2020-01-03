import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICommonModel } from './model';
import { Api } from './api';


@Injectable()
export class ApiService {

  constructor(readonly http: HttpClient) { }

  // public BaseURL: string = "http://demo.nihilentanalytics.com/CastrolSprint/"; // DESKTOP TEST
  //public BaseURL: string = "http://182.71.48.139:1000/"; // External link for Mobile TEST
  //public BaseURL: string = "http://182.71.48.139:1002/"; // External link for Mobile Vietnam TEST
  public BaseURL: string = "http://172.16.2.21:1002/"; // External link for Mobile Vietnam TEST
  // public BaseURL: string = "https://cilbioatapi.castroldms.com/CastrolSprint/"; // UAT
//   public BaseURL: string = "https://cilbioat.castroldms.com/CastrolSprintOAT/"; // OAT SUB DOMAIN
  //  public BaseURL: string = "https://cilbi.castroldms.com/CastrolSprint/"; // LIVE
  //public BaseURL: string = "https://cilbioatapi.castroldms.com/CastrolSprintVietnam/"; // Vietnam DB TEST
  public GlobalURL: string = this.BaseURL + 'api/';

  Log = new Api<ICommonModel>(this.http, this.GlobalURL + 'Login/AppVersion');
 }
