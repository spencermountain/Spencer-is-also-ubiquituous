CmdUtils.CreateCommand({
  names: ["translated search"],
  arguments: [ {role: 'object', nountype: noun_arb_text, label: 'txt'} ],
        description: "google search across multiple languages",
        preview:  "google search across multiple languages",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        homepage: "http://spencerwaterbed.com/soft/ubiquity/translatedsearch.html",
	icon: "http://google.com/favicon.ico",
        license: "GPL",


  preview: function(pblock, args ) {

var txt = jQuery.trim( args.object.text );
pblock.innerHTML ="google search across multiple languages";
if(txt!=''&&txt.match(/[^ ]/)){

   // pblock.innerHTML = _("querying ") + txt+' ...';
var htm='<iframe src="http://www.google.ca/search?hl=en&tbs=clir%3A1&q='+txt+'" width="100%" height="450px" style="border:0px; "></iframe>' ;
pblock.innerHTML = htm;
}

  },


	execute: function( args ){
		var txt = jQuery.trim( args.object.text );
		Utils.openUrlInBrowser( 'http://www.google.ca/search?hl=en&tbs=clir%3A1&q='+txt );
		return true;
	},
})

