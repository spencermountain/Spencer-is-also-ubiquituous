
CmdUtils.CreateCommand( {
	names: [ "blekko", "search with blekko"],
	arguments: [ {role: 'object', nountype: noun_arb_text, label: 'txt'} ],
        description: "searches using blekkko.com",
        icon: "http://www.blekko.com/favicon.ico",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/blekko.html",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        license: "GPL",


	execute: function( args ){
		
		var txt = jQuery.trim( args.object.text ); 
                var url= context.focusedWindow.document.location;
                if(txt=='this'){txt=encodeURI(url);}

		Utils.openUrlInBrowser( 'http://beta.blekko.com/ws/'+txt);
		return true;
	},


 	 preview: function(pblock, args ) {

		var txt = jQuery.trim( args.object.text );
		url = context.focusedWindow.document.location + ""; 


  		  pblock.innerHTML = _("mapping "+txt+"..") ;
var htm='<iframe src="http://beta.blekko.com/ws/'+txt+'" width="100%" height="450px" style="border:0px;"></iframe>' ;
pblock.innerHTML = htm;
  },
});  
