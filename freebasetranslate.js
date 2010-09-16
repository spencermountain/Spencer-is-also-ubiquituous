
CmdUtils.CreateCommand( {
	names: [ "translate a thing", "translate thing","freebase translate"],
	arguments: [ {role: 'object', nountype: noun_arb_text, label: 'txt'} ],
        description: "translate specific things unambiguously using freebase",
        icon: "http://www.iconarchive.com/download/icondigest/sunrise-sunset/Sunset.ico",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/freebasetranslate.html",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        license: "GPL",


	execute: function( args ){
		
		var txt = jQuery.trim( args.object.text ); 
                var url= context.focusedWindow.document.location;
                if(txt=='this'){txt=encodeURI(url);}

		Utils.openUrlInBrowser( 'http://ubiquity.freebaseapps.com/translate?word='+txt);
		return true;
	},


 	 preview: function(pblock, args ) {

		var txt = jQuery.trim( args.object.text );
		url = context.focusedWindow.document.location + ""; 


  		  pblock.innerHTML = _("translating "+txt+"..") ;
var htm='<iframe src="http://ubiquity.freebaseapps.com/translate?word='+txt+'" width="100%" height="450px" style="border:0px;"></iframe>' ;
pblock.innerHTML = htm;
  },
});  
