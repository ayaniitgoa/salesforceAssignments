import { LightningElement, track, wire } from 'lwc';
import getAllContacts from '@salesforce/apex/fetchContacts.getAllContacts'
import getContactDetail from '@salesforce/apex/fetchContacts.getContactDetail'

export default class AssignmentThreeOne extends LightningElement {
    @track allContacts
    contactId
    @track contactDetail
    @wire(getAllContacts)
    contactList({data, error}){
        if(data){
            this.allContacts = data
            console.log("contacts",data);
        } else if(error){
            console.log("error", error)
        }
    }

    sendId(e){
        this.contactId = e.target.dataset.contactid
        console.log(e.target.dataset.contactid);
        getContactDetail({contactid: e.target.dataset.contactid}).then(res => {
            console.log(e.target.dataset.contactid);
            console.log("contact detail",res);
            this.contactDetail = res[0]
        }).catch(err => {
            console.log(err);
        })

    }

    fetchContactDetail(contactId){
        getContactDetail({contactid: contactId}).then(res => {
            console.log("contact detail",res);
            this.contactDetail = res[0];
            console.log("email",res[0].Email); 
        }).catch(err => {
            console.log(err);
        })
    }
}