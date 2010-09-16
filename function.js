
CmdUtils.CreateCommand( {
	names: [ "graph the function","function graph"],
	arguments: [ {role: 'object', nountype: noun_arb_text, label: 'function'} ],
        description: "draws a graph from a given function (in muparser format)",
        icon: "http://www.iconarchive.com/download/icondigest/sunrise-sunset/Sunset.ico",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/function.html",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        license: "GPL",


	execute: function( args ){
		
		var txt = jQuery.trim( args.object.text ); 
                var url= context.focusedWindow.document.location;
                if(txt=='this'){txt=encodeURI(url);}
txt=txt.replace('+','%2B');
		Utils.openUrlInBrowser( 'http://chart.apis.google.com/chart?chs=450x450&cht=lc&chd=t:1&chfd=0,x,0,11,0.1,'+txt+'&chxt=x,y&chxr=0,-100,100|1,-100,100');
		return true;
	},


 	 preview: function(pblock, args ) {

		var txt = jQuery.trim( args.object.text );
txt=txt.replace('+','%2B');
		url = context.focusedWindow.document.location + ""; 


  		  pblock.innerHTML = _("mapping "+txt+"..") ;
var htm='<iframe src="http://chart.apis.google.com/chart?chs=450x450&cht=lc&chd=t:1&chfd=0,x,0,11,0.1,'+txt+'&chxt=x,y&chxr=0,-100,100|1,-100,100" width="100%" height="450px" style="border:0px;"></iframe>' ;
pblock.innerHTML = htm;
  },
});  
