
CmdUtils.CreateCommand({
  names: ["import to freebase","garden"],
  arguments: [  ],
        description: "import the current page to freebase",
        preview:  "select the part of the page, or write the current page into freebase",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        homepage: "http://spencerwaterbed.com/soft/ubiquity/htmlview.html",
	icon: "http://www.iconarchive.com/icons/t-motoyama/flowers-2/32/Anemone-Flaccida-icon.png",
        license: "GPL",


  preview: function(pblock, args ) {

pblock.innerHTML = "select html links, or import the current page to freebase";
var thehtml= CmdUtils.getHtmlSelection(); 
if(thehtml!=''){
thehtml=thehtml.replace(/&/g,'&amp;'); 
thehtml=thehtml.replace(/>/g,'&gt;'); 
thehtml=thehtml.replace(/</g,'&lt;'); 
pblock.innerHTML = 'import the following html:<br/>'+thehtml;
return true;
}

var url= context.focusedWindow.document.location + ""; 
if(url.match('.wikipedia.org/wiki/Category:')){ 
var cat=url.replace(/^.*?\.wikipedia\.org\/wiki\//,'');
pblock.innerHTML = 'import the '+cat+' wikipedia category';
return true;
}
var doc = CmdUtils.getDocument();
CmdUtils.absUrl(doc, url) 
var nice='';
var links=$(doc).find("a").each(function(){nice+=$(this).attr("href")+"<br/>";});
pblock.innerHTML ='<h2>Garden the following links</h2>'+nice;
 

},


	execute: function( args ){
	
	//wikipedia category
var url= context.focusedWindow.document.location + ""; 
if(url.match('.wikipedia.org/wiki/Category:')){ 
var cat=url.replace(/^.*?\.wikipedia\.org\/wiki\//,'');
var url='http://garden.freebaseapps.com/fromcat?cat='+cat;   
Utils.openUrlInBrowser( url, {html:thehtml});
context.chromeWindow.gUbiquity.closeWindow();
return true;
}
	
	//from html selection
var thehtml= CmdUtils.getHtmlSelection(); 
if(thehtml!=''){
var url='http://garden.freebaseapps.com/htmlimport';
Utils.openUrlInBrowser( url, {html:thehtml});
context.chromeWindow.gUbiquity.closeWindow();
return true;
}

//all the page's links
var doc = CmdUtils.getDocument();
var url= context.focusedWindow.document.location + ""; 
CmdUtils.absUrl(doc, url) 
var nice='';
var links=$(doc).find("a").each(function(){nice+='&urls='+$(this).attr("href");});
Utils.openUrlInBrowser( 'http://garden.freebaseapps.com/fromurls', nice);

		return true;
	},
})

