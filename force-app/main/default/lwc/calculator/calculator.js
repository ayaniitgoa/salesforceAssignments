import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    @track ans=0;
    var1 = 0;
    var2 = 0;
    showans = false

    changeVar(e){
        if(e.target.name === 'var1') this.var1 = e.target.value;
        if(e.target.name === 'var2') this.var2 = e.target.value;
        this.showans = false
        // this.ans = parseInt(this.var1) + parseInt(this.var2);
    }

    addi(){
        console.log("called",this.var1, this.var2);
        this.ans = parseInt(this.var1) + parseInt(this.var2);
        
    }
    sub(){
        this.ans = parseInt(this.var1) - parseInt(this.var2);
      
    }
    mul(){
        this.ans = parseInt(this.var1) * parseInt(this.var2);
    }
    div(){
        this.ans = parseInt(this.var1) / parseInt(this.var2);
    }

    calc(){
        this.showans = true
    }
    
}