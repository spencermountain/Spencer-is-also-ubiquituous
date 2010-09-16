
CmdUtils.CreateCommand( {
	names: [ "wordnet","lookup in wordnet"],
	arguments: [ {role: 'object', nountype: noun_arb_text, label: 'txt'} ],
        description: "queries a word at wordnet",
        icon: "http://www.princeton.edu/main/favicon.ico",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/wordnet.html",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        license: "GPL",


	execute: function( args ){
		
			var txt = jQuery.trim( args.object.text );
			url = context.focusedWindow.document.location + "";
 

		Utils.openUrlInBrowser( 'http://ubiquity.freebaseapps.com/wordnet?word='+txt);
		return true;
	},


 	 preview: function(pblock, args ) {

		var txt = jQuery.trim( args.object.text );
		url = context.focusedWindow.document.location + ""; 


  		  pblock.innerHTML = _("searching wordnet..") ;

  		    CmdUtils.previewGet(pblock, 'http://ubiquity.freebaseapps.com/wordnet?word='+txt, function (htm) {
   		   pblock.innerHTML = htm;
    		  return true;
    });
  },
});  
