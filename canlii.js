CmdUtils.CreateCommand({
  names: ["canlii"],
  arguments: [ {role: 'object', nountype: noun_arb_text, label: 'txt'} ],
        description: "query canlii in natural language",
        preview:  "finds legal information from canlii",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        homepage: "http://spencerwaterbed.com/soft/ubiquity/canlii.html",
	icon: "http://sites.google.com/site/spencerhost/_/rsrc/1265592726089/home/16-icon.png",
        license: "GPL",


  preview: function(pblock, args ) {

var txt = jQuery.trim( args.object.text );
var url= context.focusedWindow.document.location;
if(txt=='this'){txt=encodeURI(url);}

   // pblock.innerHTML = _("querying ") + txt+' ...';
var htm='<iframe src="http://lexum.freebaseapps.com/ubiquity?query='+txt+'" width="100%" height="450px" style="border:0px; "></iframe>' ;
pblock.innerHTML = htm;


  },


	execute: function( args ){
		var txt = jQuery.trim( args.object.text );
		Utils.openUrlInBrowser( 'http://lexum.freebaseapps.com/index?query='+txt );
		return true;
	},
})

