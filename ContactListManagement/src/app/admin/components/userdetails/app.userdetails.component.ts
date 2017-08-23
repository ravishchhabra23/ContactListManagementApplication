import { Component,Input,Output,EventEmitter,OnInit } from '@angular/core';
import {EventService} from '../../../common/services/event/event.component';
import {Router} from '@angular/router';
import {HttpProvider} from '../../../common/services/http/http.service';
import { Cookie } from 'ng2-cookies';
import {RestApisService} from '../../../common/services/restapi/restapi.service';
import {CommonsObjectsService} from '../../../common/services/object/object.service';
import {UserAdminService} from '../../services/user/user.service.component';
import {FilterPipe} from "../../../common/pipes/filter/filterpipe.pipe";
import {CustomDatePipe} from "../../../common/pipes/date/date.pipe";
import { PagerService } from '../../../common/services/pager/pager.service';

@Component({
  selector: 'admin-userdetails',
  templateUrl: './app.userdetails.component.html',
  styleUrls: ['../../../../assets/css/app.main.css']
})
export class AdminUserDetailsComponent implements OnInit {

  public filterUser:string;
  public datalistbckup:string;
  public datalist:any;
  //paging variables
  pager: any = {};
  pagedItems: any;
  //edit variables
  public editrowitem:any=null;
  public enteredFormat:any= "MM/DD/YYYY";

  constructor(private _eventService:EventService,
    private _httpService: HttpProvider,
    private _userService: UserAdminService,
    private _router: Router,
    private _objectService: CommonsObjectsService,
    private _restapiService:RestApisService,
    private _filterpipe:FilterPipe,
    private _datepipe:CustomDatePipe,
    private pagerService: PagerService){
    this._eventService.OnMenuChangeEvent({menu: 'adminmenuitems'})
    this.getUsers();
  }
  getUsers(){
    this._restapiService.getUsers.headers = {username:this._userService.getusername()}
    this._restapiService.getUsers.data = {
      username:this._userService.getusername(),
      cookies:{_a:Cookie.get('_a')}};
    this._httpService.httprequest(this._restapiService.getUsers.url,this._restapiService.getUsers.method
    ,this._restapiService.getUsers.data,this._restapiService.getUsers.headers).subscribe(resp=>{
      if(resp.status=='success'){
        //this._datepipe.transform(resp.result.created,this.enteredFormat);
        this.datalist = resp.result;
        this.datalistbckup = resp.result;
      }
      this.setPage(1);
    });
  }
  ngOnInit(){
  }
  ResetTable(){
    this.editrowitem =  null;
    this.pagedItems = this.datalist;
    this.setPage(1);
  }
  FilterUser(searchstring){
    this.pagedItems = this._filterpipe.transform(this.datalist,searchstring.target.value);
    let pager = this.pagerService.getPager(this.pagedItems.length, 1);
    this.pagedItems = this.pagedItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.pagerService.getPager(this.datalist.length, page);
        this.pagedItems = this.datalist.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
  OnItemClick(item){
    this.editrowitem = item;
    
  }
  OnUpdate(item){
    this._restapiService.editUser.headers = {username:this._userService.getusername()}
    this._restapiService.editUser.data = {
      username:item.username,
      enabled:item.enabled,
      firstname:item.firstname,
      lastname:item.lastname,
      usertype:item.usertype,
      created:item.created,
      cookies:{_a:Cookie.get('_a')}};
    this._httpService.httprequest(this._restapiService.editUser.url+item.userid,this._restapiService.editUser.method
    ,this._restapiService.editUser.data,this._restapiService.editUser.headers).subscribe(editresp=>{
      if(editresp.status=='success'){
        let editrespdata:any[] =[];
        editrespdata.push(item);
        this.pagedItems = editrespdata;
      }
    });
    this.editrowitem =  null;
  }
  OnDelete(item){
    this._restapiService.deleteUser.headers = {username:this._userService.getusername()}
    this._restapiService.deleteUser.data = {
      username:this._userService.getusername(),
      cookies:{_a:Cookie.get('_a')}};
    this._httpService.httprequest(this._restapiService.deleteUser.url+item.userid,this._restapiService.deleteUser.method
    ,this._restapiService.deleteUser.data,this._restapiService.deleteUser.headers).subscribe(deleteresp=>{
      if(deleteresp.status=='success'){
        this.getUsers();
      }
      this.setPage(1);
    });
    this.editrowitem =  null;
  }
}
