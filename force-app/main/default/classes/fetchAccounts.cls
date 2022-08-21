public with sharing class fetchAccounts {
    @AuraEnabled(cacheable=true)
    public static list<account> getAllAccounts(){
        return [select id, name from account];
    }

    @AuraEnabled(cacheable=true)
    public static list<account> getAccountOpportunity(string accid){
        return [select id, name, (select id, name from opportunities) from account where id=:accid];
    }

    
}
