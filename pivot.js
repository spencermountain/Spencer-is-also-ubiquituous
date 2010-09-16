
CmdUtils.CreateCommand( {
	names: [ "pivot", "mix in freebase"],
	arguments: [],
        description: "displays the page augmented using freebase",
        icon: "http://www.freebase.com/favicon.ico",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/pivot.html",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        license: "GPL",


	execute: function( args ){
		
                var url= context.focusedWindow.document.location;

		Utils.openUrlInBrowser( 'http://pivot.freebaseapps.com/index.html?url='+url);
		return true;
	},


 	 preview: function(pblock, args ) {

		url = context.focusedWindow.document.location + ""; 


  		  pblock.innerHTML = _("working ...") ;
var htm='<iframe src="http://pivot.freebaseapps.com/index.html?url='+url+'" width="100%" height="450px" style="border:0px;"></iframe>' ;
pblock.innerHTML = htm;
  },
});  
