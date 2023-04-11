import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pp1';
    n1:number=0;
    n2:number = 0;
    calcular:number=0
    str1!:string;
    str2!:string;

calcular(){

    if(this.str1 == this.str2){
    alert("Selecione moeda diferentes!");
  }
   else if(this.str1 == "Real" && this.str2 =="Dolar"){
    this.resp=this.n1*this.n2;
   }
   else if(this.str1 == "Real" && this.str2 == "Euro"){
    this.resp=this.n1*this.n2;
   }
    else if(this.str1 == "Dolar" && this.str2 == "Real"){
    this.resp=this.n1*this.n2;
    }
    else if(this.str1 == "Dolar" && this.str2 == "Euro"){
    this.resp=this.n1*this.n2;
    }
    else if(this.str1 == "Euro" && this.str2=="Dolar"){
    this.resp=this.n1*this.n2;
    }
    else if(this.str1 == "Euro" && this.str2=="Real"){
    this.resp=this.n1*this.n2;
    }
    }
    }
