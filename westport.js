CmdUtils.CreateCommand({
  names: ["fb","ask freebase","query freebase","westport"],
  arguments: [ {role: 'object', nountype: noun_arb_text, label: 'txt'} ],
        description: "query freebase in natural language",
        preview:  "finds information from freebase",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        homepage: "http://spencerwaterbed.com/soft/ubiquity/westport.html",
	icon: "http://www.freebase.com/favicon.ico",
        license: "GPL",


  preview: function(pblock, args ) {

var txt = jQuery.trim( args.object.text );
var url= context.focusedWindow.document.location;
if(txt=='this'){txt=encodeURI(url);}

    pblock.innerHTML = _("querying ") + txt+' ...';

      CmdUtils.previewGet(pblock, 'http://westport.freebaseapps.com/ok?q='+txt, function (htm) {
      pblock.innerHTML = htm +'<a id="insertit">insert</a>';
      
                          
                          $('#insertit', pblock).click(function() {  
                            var answer= $("h3:first",pblock).html();
                            CmdUtils.setSelection(answer);
                            //event.preventDefault();
                            context.chromeWindow.gUbiquity.closeWindow();
                            return true;
                          });
      
      return true;
    });
  },

  

  

	execute: function( args ){
		var txt = jQuery.trim( args.object.text );
		Utils.openUrlInBrowser( 'http://westport.freebaseapps.com/ok?q='+txt );
		return true;
	},
})

