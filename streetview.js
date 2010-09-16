
CmdUtils.CreateCommand( {
	names: [ "street view","streetview"],
	arguments: [ {role: 'object', nountype: noun_arb_text, label: 'txt'} ],
        description: "search a streetview in google maps",
        icon: "http://www.iconarchive.com/icons/aha-soft/transport/32/Cow-wagon-icon.png",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/streetview.html",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        license: "GPL",


	execute: function( args ){
		
		var txt = jQuery.trim( args.object.text ); 
                var url= context.focusedWindow.document.location;
                if(txt=='this'){txt=encodeURI(url);}
		Utils.openUrlInBrowser( 'http://ubiquity.freebaseapps.com/streetview?place='+txt);
		return true;
	},


 	 preview: function(pblock, args ) {
		var txt = jQuery.trim( args.object.text );
		url = context.focusedWindow.document.location + ""; 
  		if(txt==''){pblock.innerHTML = _("search something in google street view ...") ;}
                else{	pblock.innerHTML = _("street view for "+txt+"..") ;}
      //preview wouldnt run
  },
});  
