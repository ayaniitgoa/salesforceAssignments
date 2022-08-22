import { LightningElement, track, wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/fetchAccounts.getAllAccounts';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';

    const columns = [
        {
            label: 'Name',
            fieldName: 'Name',
            type: 'text',
            editable: true
        }
    ]

export default class AssignmentThreeFive extends LightningElement {
    
    columns = columns;
    draftValues = []
    @track allAccountWiredData

    @wire(getAllAccounts)
    allAccountWired(response){
        this.allAccountWiredData = response
           
        if(response.error){
            this.allAccountWiredData = undefined
        }
    }

    handleAccountSave(e){
        console.log("draft", e.detail.draftValues);
        this.saveDraftValues = e.detail.draftValues;
        const recordInputs = this.saveDraftValues.slice().map(draft => {
            const fields = Object.assign({}, draft);
            return { fields };
        });

        const promises = recordInputs.map(recordInput => updateRecord(recordInput));
        Promise.all(promises).then(res => {
            console.log("success");
            this.ShowToast('Success', 'Records Updated Successfully!', 'success', 'dismissable');
            this.saveDraftValues = [];
            refreshApex(this.allAccountWiredData);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            this.saveDraftValues = [];
        });
      
    }

    ShowToast(title, message, variant, mode){
        const evt = new ShowToastEvent({
                title: title,
                message:message,
                variant: variant,
                mode: mode
            });
            this.dispatchEvent(evt);
    }

    // async refresh() {
    //     await 
    // }

    
}