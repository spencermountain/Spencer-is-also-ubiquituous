
CmdUtils.CreateCommand( {
	names: [ "watchlist" ],
	arguments: [],
        description: "view your wikipedia watchlist",
        icon: "http://en.wikipedia.org/favicon.ico",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/watchlist.html",
        preview:  "getting watchlist..",
        author: { name: "Spencer Kelly", email: "spencerkelly86@gmail.com"},
        license: "GPL",


	execute: function( args ){
		
			selectedURL = context.focusedWindow.document.location + "";
 

		Utils.openUrlInBrowser( 'http://en.wikipedia.org/wiki/Special:Watchlist' );
		return true;
	},


	preview: function( pblock, args ){
 		selectedURL = context.focusedWindow.document.location + "";

  		  pblock.innerHTML = _("getting watchlist..") ;

     		 CmdUtils.previewGet(pblock, 'http://en.wikipedia.org/wiki/Special:Watchlist', function (htm) {

var list=$("#bodyContent",htm);
//var list=$("#mw-watchlist-options",htm);
 $("#mw-watchlist-options", list).remove();
 $("#siteSub", list).remove();
 $("#contentSub", list).remove();
 $(".mw-rc-label-legend", list).remove();
 $(".mw-plusminus-pos", list).remove();
 $(".mw-userlink", list).remove();
 $(".mw-plusminus-pos", list).remove();
 $(".mw-plusminus-neg", list).remove();
 $("#jump-to-nav", list).remove();
list=$(list).html();
list=list.replace('(diff | hist) . .','');
     		 pblock.innerHTML = list+'l';
		return true;
    });
  }
}); 
