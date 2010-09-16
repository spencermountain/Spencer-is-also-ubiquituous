
CmdUtils.CreateCommand( {
	names: [ "search inside site","inside search", "site search","insearch" ,"google site search"],
	arguments: [ {role: 'object', nountype: noun_arb_text, label: 'txt'} ],
        description: "google search the current website",
        icon: "chrome://ubiquity/skin/icons/google.ico",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/insearch.html",
        preview:  "google search this site",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        license: "GPL",


	execute: function( args ){
		
			var txt = jQuery.trim( args.object.text );
			url = context.focusedWindow.document.location + "";
 
  			var loc = { 'href' : url };  //parse url
  			var parts = url.replace('//', '/').split('/');
  			loc.protocol = parts[0];
  			loc.host = parts[1] || url;

		Utils.openUrlInBrowser( 'http://www.google.ca/search?q=site:'+loc.host +' '+txt);
		return true;
	},


 	 preview: function(pblock, args ) {

		var txt = jQuery.trim( args.object.text );
		url = context.focusedWindow.document.location + ""; 

			var loc = { 'href' : url };  //parse url
  			var parts = url.replace('//', '/').split('/');
  			loc.protocol = parts[0];
  			loc.host = parts[1] || url;

  		  pblock.innerHTML = _("google '"+txt+"' within this site..") ;

 
  },
}); 
