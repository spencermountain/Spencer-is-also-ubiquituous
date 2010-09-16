
CmdUtils.CreateCommand( {
	names: [ "this is about"],
	arguments: [  ],
        description: "identifies the current website",
        icon: "http://www.iconarchive.com/icons/umut-pulat/tulliana-2/32/k-world-clock-icon.png",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/this.html",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        license: "GPL",


	execute: function( args ){
		

		Utils.openUrlInBrowser( 'http://ubiquity.freebaseapps.com/linkerfollow?url='+url);
		return true;
	},
 

 	 preview: function(pblock, args ) {
		url = context.focusedWindow.document.location + ""; 


  		  pblock.innerHTML = _("looking...") ;

  		    CmdUtils.previewGet(pblock, 'http://ubiquity.freebaseapps.com/linkerapi?url='+url, function (htm) {
   		   pblock.innerHTML = htm;
    		  return true;
    });
  },
});  
