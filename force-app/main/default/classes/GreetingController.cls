public with sharing class GreetingController {

    @AuraEnabled(cacheable=true)
    public static String getGreetingMessage() {
        return 'Hello from Apex - Ram on 1st May👋 Tis is from Github Repo';
    }
}
