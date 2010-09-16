CmdUtils.CreateCommand({
  names: ["html edit"],
  arguments: [ {role: 'object', nountype: noun_arb_text, label: 'txt'} ],
        description: "edit selected html",
        preview:  "edit selected html",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        homepage: "http://spencerwaterbed.com/soft/ubiquity/edit.html",
	icon: "http://upload.wikimedia.org/wikipedia/commons/0/05/WikEd_fix_html.png",
        license: "GPL",


  preview: function(pblock, args ) {

var txt = jQuery.trim( args.object.text );
 pblock.innerHTML = txt;

  },


	execute: function( args ){
		var txt = jQuery.trim( args.object.text );
                var data={"html":txt};
		Utils.openUrlInBrowser( 'http://ubiquity.freebaseapps.com/edit.html',data );
		return true;
	},
})

