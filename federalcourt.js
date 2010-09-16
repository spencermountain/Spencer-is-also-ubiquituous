CmdUtils.CreateCommand({
  names: ["federal court of canada","canadian federal court"],
  arguments: [ {role: 'object', nountype: noun_arb_text, label: 'docket'} ],
        description: "query canlii in natural language",
        preview:  "finds legal information from federal court of canada",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        homepage: "http://spencerwaterbed.com/soft/ubiquity/federalcourt.html",
	icon: "http://www.scc-csc.gc.ca/favicon.ico",
        license: "GPL",


  preview: function(pblock, args ) {

var txt = jQuery.trim( args.object.text );
var url= context.focusedWindow.document.location;
if(txt=='this'){txt=encodeURI(url);}


  		  pblock.innerHTML = _("searching fc..") ;


if(txt.match(/[T|A]-[0-9]{4}-[0-9]{2}/)){//docket
CmdUtils.previewGet(pblock, 'http://cas-ncr-nter03.cas-satj.gc.ca/IndexingQueries/infp_RE_info_e.php?court_no='+txt, function (htm) {
//var good=$(".content",htm).html();
pblock.innerHTML = htm;
});
}

else{//search
pblock.innerHTML = 'please enter a federal court docket, like "T-1500-01"';

}






  },


	execute: function( args ){
		var txt = jQuery.trim( args.object.text );
if(txt.match(/[T|A]-[0-9]{4}-[0-9]{2}/)){//docket
		Utils.openUrlInBrowser( 'http://cas-ncr-nter03.cas-satj.gc.ca/IndexingQueries/infp_RE_info_e.php?court_no='+txt );
}
else{
Utils.openUrlInBrowser( 'http://cas-ncr-nter03.cas-satj.gc.ca/IndexingQueries/infp_queries_e.php' );
}
		return true;
	},
})

