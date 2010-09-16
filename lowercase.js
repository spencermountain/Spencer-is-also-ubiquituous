
CmdUtils.CreateCommand( {
	names: [ "lowercase","lower case","tolowercase()"],
	arguments: [ {role: 'object', nountype: noun_arb_text, label: 'txt'} ],
        description: "converts text to lowercase",
        icon: "",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/lowercase.html",
        preview:  "convert text to lowercase",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        license: "GPL",


	execute: function( args ){
		

		var txt = jQuery.trim( args.object.text );
            txt=txt.toLowerCase();


        CmdUtils.setSelection(txt);
	},


 	 preview: function(pblock, args ) {

		var txt = jQuery.trim( args.object.text );
             txt=txt.toLowerCase();

  		  pblock.innerHTML = _(txt) ;

 
  },
}); 



CmdUtils.CreateCommand( {
	names: [ "uppercase","upper case","touppercase()","capital letters"],
	arguments: [ {role: 'object', nountype: noun_arb_text, label: 'txt'} ],
        description: "converts text to uppercase",
        icon: "",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/lowercase.html",
        preview:  "convert text to uppercase",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        license: "GPL",


	execute: function( args ){
		

		var txt = jQuery.trim( args.object.text );
            txt=txt.toUpperCase();


        CmdUtils.setSelection(txt);
	},


 	 preview: function(pblock, args ) {

		var txt = jQuery.trim( args.object.text );
             txt=txt.toUpperCase();

  		  pblock.innerHTML = _(txt) ;

 
  },
}); 
