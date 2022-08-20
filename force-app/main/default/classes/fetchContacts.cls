public with sharing class fetchContacts {
    @AuraEnabled(cacheable=true)
    public static list<contact> getAllContacts(){
        return [select id, firstname, lastname from contact];
    }

    @AuraEnabled(cacheable=true)
    public static list<contact> getContactDetail(string contactid){
        return [select id, firstname, lastname, phone, email, account.name from contact where id=:contactid];
    }
}
