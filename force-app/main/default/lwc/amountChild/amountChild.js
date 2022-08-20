import { LightningElement } from 'lwc';

export default class AmountChild extends LightningElement {
    principal;
    rate;
    time;
    amount;
    handleChange(e){
        if(e.target.name == 'principal') this.principal = parseInt(e.target.value) 
        if(e.target.name == 'rate') this.rate = parseInt(e.target.value) 
        if(e.target.name == 'time') this.time = parseInt(e.target.value) 
        this.amount = this.principal + (this.principal*this.rate*this.time)/100;
    }

    onBtnClick(){
        const sendAmount = new CustomEvent("getamount", {
            detail: this.amount
        })
        this.dispatchEvent(sendAmount)
    }
}