
CmdUtils.CreateCommand( {
	names: [ "make this","add this to freebase"],
	arguments: [  ],
        description: "creates a topic for the current website",
        icon: "http://www.freebase.com/favicon.ico",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/makethis.html",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        license: "GPL",


	execute: function( args ){
		

		//Utils.openUrlInBrowser( 'http://george.freebaseapps.com/boyfriend?url='+url);
		
		var url = context.focusedWindow.document.location + ""; 
var doc = CmdUtils.getDocument();
$("body",doc).prepend("<span id='funel' style='position:absolute; top:50px; left:200px; z-index:9999;text-align:right; align:right; background:white;'><a href='#' id='button'>close</a><iframe id='yayframe' src='http://george.freebaseapps.com/boyfriend?url="+url+"' style='position:absolute; border:1; background:white; width:400px;z-index:12; height:300px; '> </iframe></span>");
   $("#button",doc).click(function(){
   $("#funel",doc).remove();
   }); 
		return true;
	},
 

preview: function(pblock, args) {
    var url = context.focusedWindow.document.location + "";

    pblock.innerHTML = _("looking...");

    var doc = CmdUtils.getDocument();
    var title = $("title", doc).html();
    pblock.innerHTML = _("add <b>'" + title + "'</b> to freebase...");

},
});
