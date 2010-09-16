CmdUtils.CreateCommand({
  names: ["patent database of canada","canada patent database"],
  arguments: [ {role: 'object', nountype: noun_arb_text, label: 'patent number'} ],
        description: "finds patent information from brevets-patents.ic.gc.ca",
        preview:  "finds patent information from brevets-patents.ic.gc.ca",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        homepage: "http://spencerwaterbed.com/soft/ubiquity/patents.html",
	icon: "http://brevets-patents.ic.gc.ca/favicon.ico",
        license: "GPL",


  preview: function(pblock, args ) {

var txt = jQuery.trim( args.object.text );
var url= context.focusedWindow.document.location;
if(txt=='this'){txt=encodeURI(url);}


  		  pblock.innerHTML = _("searching scc..") ;


if(txt.match(/[0-9]/)){//docket
CmdUtils.previewGet(pblock, 'http://brevets-patents.ic.gc.ca/opic-cipo/cpd/eng/patent/'+txt+'/summary.html?type=number_search', function (htm) {
var good=$(".content",htm).html();
pblock.innerHTML = good;
});
}

else{//search

pblock.innerHTML = 'please enter a patent number';

}



     		 CmdUtils.previewGet(pblock, 'http://brevets-patents.ic.gc.ca/opic-cipo/cpd/eng/patent/'+txt+'/summary.html?type=number_search', function (htm) {
var good=$(".center",htm).html();
pblock.innerHTML = good;
});


  },


	execute: function( args ){
		var txt = jQuery.trim( args.object.text );
if(txt.match(/[0-9]/)){
		Utils.openUrlInBrowser( 'http://brevets-patents.ic.gc.ca/opic-cipo/cpd/eng/patent/'+txt+'/summary.html?type=number_search' );
}
else{
Utils.openUrlInBrowser( 'http://brevets-patents.ic.gc.ca/opic-cipo/cpd/eng/search/basic.html' );
}
		return true;
	},
})

