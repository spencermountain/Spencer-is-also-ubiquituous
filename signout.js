 
CmdUtils.CreateCommand( {
	names: [ "signout", "google signout", "sign out", "logout"],
	arguments: [ ],
        description: "signs out of your google account",
        icon: "http://mail.google.com/tasks/res/favicon.png",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/signout.html",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        license: "GPL",


	execute: function( args ){ 
		 
			url = context.focusedWindow.document.location + "";
 

		Utils.openUrlInBrowser( 'http://mail.google.com/mail/?logout&hl=en');
		return true;
	},


 	 preview: function(pblock, args ) {


  		  pblock.innerHTML = _("sign out of google") ;


  },
});  
