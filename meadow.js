
CmdUtils.CreateCommand( {
	names: [ "meadow", "freebase map", "map with freebase"],
	arguments: [ {role: 'object', nountype: noun_arb_text, label: 'txt'} ],
        description: "populates a map using freebase",
        icon: "http://www.iconarchive.com/download/icondigest/sunrise-sunset/Sunset.ico",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/meadow.html",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        license: "GPL",


	execute: function( args ){
		
		var txt = jQuery.trim( args.object.text ); 
                var url= context.focusedWindow.document.location;
                if(txt=='this'){txt=encodeURI(url);}

		Utils.openUrlInBrowser( 'http://meadow.freebaseapps.com/index?q='+txt);
		return true;
	},


 	 preview: function(pblock, args ) {

		var txt = jQuery.trim( args.object.text );
		url = context.focusedWindow.document.location + ""; 


  		  pblock.innerHTML = _("mapping "+txt+"..") ;
var htm='<iframe src="http://meadow.freebaseapps.com/v3?q='+txt+'" width="100%" height="450px" style="border:0px;"></iframe>' ;
pblock.innerHTML = htm;
  },
});  
