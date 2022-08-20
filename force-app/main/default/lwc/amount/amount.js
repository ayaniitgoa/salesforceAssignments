import { LightningElement, api } from 'lwc';

export default class Amount extends LightningElement {
    @api amount;
    handleAmount(e){
        this.amount = e.detail
    }
}