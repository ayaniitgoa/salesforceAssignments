import { LightningElement, track, wire} from 'lwc';
import getAllAccounts from '@salesforce/apex/fetchAccounts.getAllAccounts';
import getAccountOpportunity from '@salesforce/apex/fetchAccounts.getAccountOpportunity';

export default class AssignmentThreeTwo extends LightningElement {
    @track allAccounts
    accountId
    @track opportunities
    accountName


    @wire(getAllAccounts)
    acctList({data, error}){
        if(data) this.allAccounts = data
        else if(error) console.log("error", error);
    }

    onAccClick(e){
        this.accountId = e.target.dataset.accid
        console.log("a",this.accountId);
        getAccountOpportunity({accid: this.accountId}).then((res) => {
            this.opportunities = res[0].Opportunities
            this.accountName = res[0].Name
            console.log(this.opportunities, res.Opportunities, res);
        }).catch((e) => {
            console.log("err",e);
        })
    }
}