
CmdUtils.CreateCommand( {
	names: [ "draw", "google draw"],
	arguments: [ ],
        description: "opens google draw",
        icon: "http://docs.google.com/favicon.png",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/draw.html",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        license: "GPL",


	execute: function( args ){ 
		 
			url = context.focusedWindow.document.location + "";
 

		Utils.openUrlInBrowser( 'https://docs.google.com/drawings/create');
		return true;
	},


 	 preview: function(pblock, args ) {


  		  pblock.innerHTML = _("opening draw") ;
var htm='<iframe src="https://docs.google.com/drawings/create" width="100%" height="450px" style="border:0px;"></iframe>' ;
pblock.innerHTML = htm;


  },
});  
