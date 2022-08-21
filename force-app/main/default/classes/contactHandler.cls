public with sharing class contactHandler {
 
        @AuraEnabled
        public static contact createContact(string fname, string lname, string email, string accid){
            contact con = new contact();
            con.firstname = fname;
            con.lastname = lname;
            con.email = email;
            con.accountid = accid;
            insert con;
            return [select firstname, lastname, email, account.name from contact where id=:con.id];

        }
    
}
