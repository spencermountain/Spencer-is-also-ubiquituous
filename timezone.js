
CmdUtils.CreateCommand( {
	names: [ "time in","current time in","timezone of"],
	arguments: [ {role: 'object', nountype: noun_arb_text, label: 'txt'} ],
        description: "finds the current time",
        icon: "http://www.iconarchive.com/icons/umut-pulat/tulliana-2/32/k-world-clock-icon.png",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/timezone.html",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        license: "GPL",


	execute: function( args ){
		
		return true;
	},


 	 preview: function(pblock, args ) {

		var txt = jQuery.trim( args.object.text );
		url = context.focusedWindow.document.location + ""; 


  		  pblock.innerHTML = _("current time in "+txt) ;

  		    CmdUtils.previewGet(pblock, 'http://ubiquity.freebaseapps.com/geonames?place='+txt, function (htm) {
   		   pblock.innerHTML = htm;
    		  return true;
    });
  },
});  
