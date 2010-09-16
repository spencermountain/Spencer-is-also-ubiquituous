CmdUtils.CreateCommand({
  names: ["supreme court of canada","canada supreme court"],
  arguments: [ {role: 'object', nountype: noun_arb_text, label: 'docket or litigant'} ],
        description: "query canlii in natural language",
        preview:  "finds legal information from canlii",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        homepage: "http://spencerwaterbed.com/soft/ubiquity/supremecourt.html",
	icon: "http://www.scc-csc.gc.ca/favicon.ico",
        license: "GPL",


  preview: function(pblock, args ) {

var txt = jQuery.trim( args.object.text );
var url= context.focusedWindow.document.location;
if(txt=='this'){txt=encodeURI(url);}


  		  pblock.innerHTML = _("searching scc..") ;


if(txt.match(/[0-9]{5}/)){//docket
CmdUtils.previewGet(pblock, 'http://www.scc-csc.gc.ca/case-dossier/cms-sgd/dock-regi-eng.aspx?cas='+txt, function (htm) {
var good=$(".content",htm).html();
pblock.innerHTML = good;
});
}

else{//search
CmdUtils.previewGet(pblock, 'http://www.scc-csc.gc.ca/case-dossier/cms-sgd/result-resultat-eng.aspx?cas=&par=00&jur=&prov=00&btn_sr=Search&n='+txt, function (htm) {
var good=$(".content",htm).html();
pblock.innerHTML = good;
});

}



     		 CmdUtils.previewGet(pblock, 'http://www.scc-csc.gc.ca/case-dossier/cms-sgd/dock-regi-eng.aspx?cas='+txt, function (htm) {
var good=$(".content",htm).html();
pblock.innerHTML = good;
});


  },


	execute: function( args ){
		var txt = jQuery.trim( args.object.text );
if(txt.match(/[0-9]{5}/)){
		Utils.openUrlInBrowser( 'http://www.scc-csc.gc.ca/case-dossier/cms-sgd/dock-regi-eng.aspx?cas='+txt );
}
else{
Utils.openUrlInBrowser( 'http://www.scc-csc.gc.ca/case-dossier/cms-sgd/result-resultat-eng.aspx?cas=&par=00&jur=&prov=00&btn_sr=Search&n='+txt );
}
		return true;
	},
})

