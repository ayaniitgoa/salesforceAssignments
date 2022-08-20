import { LightningElement, wire,track } from 'lwc';
import fetchLeads from '@salesforce/apex/getLeads.fetchLeads'
import { publish, MessageContext } from 'lightning/messageService';
import Lead_Channel from '@salesforce/messageChannel/Lead_Channel__c'

export default class SearchLeads extends LightningElement {
    searchVal = "";
    @track allLeads;
    firstName ="";
    handleSearch(e){
        this.firstName = e.target.value;
    }

    @wire(MessageContext) 
    messsageContext;

    onSearchClick(){
        fetchLeads({firstName: this.firstName}).then((res) => {
            this.allLeads = res;
            publish(this.messsageContext, Lead_Channel, this.allLeads)
        }).catch((e) => {
            console.log("err", e);
        })
    }

    // @wire(fetchLeads, {firstName: '$firstName'})
    // allLeads({data,error}){
    //     if(data){
    //         this.allLeads = data
    //         console.log(data);
    //     }
    //     else if(error){
    //         console.log('error ', error);
    //     }
    // }
   
}