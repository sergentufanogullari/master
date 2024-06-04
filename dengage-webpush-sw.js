var swUrl = new URL(location);
var accountId = swUrl.searchParams.get('account_id') || '';
var appGuid = swUrl.searchParams.get('app_guid') || '';
if (accountId && appGuid) {
  importScripts("https://op2-pub.dengage.com/p/push/" + accountId + "/" + appGuid + "/dengage_sw.js");
}
