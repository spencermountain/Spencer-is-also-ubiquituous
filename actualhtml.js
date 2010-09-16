CmdUtils.CreateCommand({
  names: ["view actual source","view current html", "current html","actual html"],
  arguments: [  ],
        description: "view the actual, current html of the page",
        preview:  "view its html",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        homepage: "http://spencerwaterbed.com/soft/ubiquity/htmlview.html",
	icon: "http://sites.google.com/site/spencerhost/_/rsrc/1265592726089/home/16-icon.png",
        license: "GPL",


  preview: function(pblock, args ) {

pblock.innerHTML = "select a part of the page to view its html";


var doc = CmdUtils.getDocument();
var thehtml= $("*",doc).html();
if(thehtml!=''){
thehtml=thehtml.replace(/&/g,'&amp;'); 
thehtml=thehtml.replace(/>/g,'&gt;'); 
thehtml=thehtml.replace(/</g,'&lt;'); 
pblock.innerHTML = thehtml;
}


  },


	execute: function( args ){
var doc = CmdUtils.getDocument();
var thehtml= $("*",doc).html();
if(thehtml!=''){
thehtml=thehtml.replace(/&/g,'&amp;'); 
thehtml=thehtml.replace(/>/g,'&gt;'); 
thehtml=thehtml.replace(/</g,'&lt;'); 
$("*",doc).html(thehtml);
}
	},
})

