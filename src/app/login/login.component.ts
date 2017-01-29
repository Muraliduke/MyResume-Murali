import { Component, OnInit } from '@angular/core';
import {Model} from '../model';
import {MyService} from '../service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  jsontest:any;
  constructor(private jsonService : MyService, private router: Router){

  }
  ngOnInit(){
    this.jsonService.getjso()
        .subscribe(
            jsontest => {this.jsontest = jsontest;
              console.log(jsontest);}

        )

  }


	model=new Model('','');

	loginsuccess(){

		if(this.jsontest.name===this.model.uname && this.jsontest.pwd===this.model.pwd ){
				console.log("success logged in");
				this.router.navigate(['/resume']);
			
		}
		else {
			alert('incorrect username or password')
		}
		
	}

	eventHandler(event:any){
		
		if(event.key==="Enter"){
			this.loginsuccess();
		}
	}

	signin(){
		
		
		this.loginsuccess();
	}



}
