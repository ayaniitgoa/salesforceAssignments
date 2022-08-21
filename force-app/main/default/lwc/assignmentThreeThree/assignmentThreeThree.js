import { LightningElement, track, wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/fetchAccounts.getAllAccounts';
import createContact from '@salesforce/apex/contactHandler.createContact';

export default class AssignmentThreeThree extends LightningElement {

    firstname;lastname;email;accid;
    @track allAccounts = []
    @track contact
    contacterr 

    @wire(getAllAccounts)
    acctList({data, error}){
        if(data) {
            for(var i=0; i<data.length;i++){
                this.allAccounts = [...this.allAccounts, {label: data[i].Name, value: data[i].Id}]
            }
        }
        else if(error) console.log("error", error);
    }


    handleFieldInput(e){
        if(e.target.name === "fname") this.firstname = e.target.value
        if(e.target.name === "lname") this.lastname = e.target.value
        if(e.target.name === "email") this.email = e.target.value
        if(e.target.name === "accid") this.accid = e.detail.value

    }

    submitContact(){
        createContact({fname: this.firstname, lname: this.lastname, email: this.email, accid: this.accid})
        .then((res) => {
            this.contact = res
            this.contacterr = null
        })
        .catch(err => {
            this.contacterr = "Error creating contact"
        })
    }

}