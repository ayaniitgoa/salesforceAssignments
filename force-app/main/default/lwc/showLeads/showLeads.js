import { LightningElement,wire, track } from 'lwc';
import { subscribe, MessageContext} from 'lightning/messageService';
 import Lead_Channel from '@salesforce/messageChannel/Lead_Channel__c'

export default class ShowLeads extends LightningElement {
    subscription = null;
    @track leads;

    @wire(MessageContext)
    messageContext;

    connectedCallback(){
        this.subscribeToMessageChannel()
    }

    subscribeToMessageChannel(){
        this.subscription = subscribe(this.messageContext, Lead_Channel, (leads) => 
           this.handleAllLeads(leads)
        )
    }

    handleAllLeads(leads){
        this.leads = leads
    }
}