public with sharing class getLeads {
    @AuraEnabled(cacheable=true)
    public static  list<lead> fetchLeads(string firstName){
            string likeQuery = firstName+'%';
            return [select id, firstname, lastname, email, company from lead where firstname like :likeQuery]; 
        
    }
}
