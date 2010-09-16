
CmdUtils.CreateCommand( {
	names: [ "french characters2", "dialectrics"],
	arguments: [  ],
        description: "displays common accented french characters (diacritics)",
        icon: "http://www.iconarchive.com/icons/simiographics/mixed/48/Pencil-icon.png",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/dialectrics.html",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        license: "GPL",


	execute: function( args ){
		
		return true;
	},


 	 preview: function(pblock, args ) {


  		  pblock.innerHTML = _("...") ;

  		    CmdUtils.previewGet(pblock, 'http://ubiquity.freebaseapps.com/dialectrics', function (htm) {
   		   pblock.innerHTML = htm;

$('.link', pblock).click(function() {  
  var word=$(this).html();

        CmdUtils.setSelection(word);
context.chromeWindow.gUbiquity.closeWindow();
});


return true;
    		  
    });
  },
});  
