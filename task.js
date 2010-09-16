
CmdUtils.CreateCommand( {
	names: [ "tasks", "gmail tasks"],
	arguments: [ ],
        description: "opens gmail tasks",
        icon: "http://mail.google.com/tasks/res/favicon.png",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/tasks.html",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        license: "GPL",


	execute: function( args ){ 
		 
			url = context.focusedWindow.document.location + "";
 

		Utils.openUrlInBrowser( 'http://mail.google.com/tasks/ig?pli=1');
		return true;
	},


 	 preview: function(pblock, args ) {


  		  pblock.innerHTML = _("opening gmail tasks") ;
var htm='<iframe src="http://mail.google.com/tasks/ig?pli=1" width="100%" height="450px" style="border:0px;"></iframe>' ;
pblock.innerHTML = htm;


  },
});  
