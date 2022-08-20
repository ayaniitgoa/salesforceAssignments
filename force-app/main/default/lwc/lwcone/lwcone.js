import { LightningElement, track } from 'lwc';

export default class Lwcone extends LightningElement {
    name="Ayan";
    address="bellandur";
    phoneNo="123";
    @track empName="";
    @track empNo=0;
    @track show = false
    

    studentMarks = 0;
    studentAge = 0;
    studentName = ''
    @track studentEligible = false;
    @track showmsg=false
  

    handleChange(e){
        this.show=false
        if(e.target.name === 'name') this.empName = e.target.value
        if(e.target.name === 'empNo') this.empNo = e.target.value

    }

    handleNameChange(e){
        this.empName = e.target.value 
    }
    handleEmpNoChange(e){
        this.empNo = e.target.value
    }

    handleButtonClick(){
        this.show = true;
    }
    handleStudentButtonClick(){
        this.showmsg = true;
        
        if(parseInt( this.studentMarks)>90 && parseInt(this.studentMarks)<=100 && parseInt( this.studentAge)>=18 &&  parseInt(this.studentAge) <=25){
            console.log(this.studentMarks, this.studentAge);
            this.studentEligible = true
        } else{
            this.studentEligible = false
        }
    }

    handleStudentChange(e){
        this.showmsg=false
        if(e.target.name === 'name') this.studentName = e.target.value;
        if(e.target.name === 'marks') this.studentMarks = e.target.value;
        if(e.target.name === 'age') this.studentAge = e.target.value;
        console.log(this.studentName, this.studentAge, this.studentMarks);
       
    }
    
}