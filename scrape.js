
CmdUtils.CreateCommand( {
	names: [ "scrape"],
	arguments: [ {role: 'object', nountype: noun_arb_text, label: 'txt'}],
        description: "scrape the page using a jquery selector",
        icon: "http://www.iconarchive.com/icons/iconshock/construction/32/lightning-sign-icon.png",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/scrape.html",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        license: "GPL",


	execute: function( args ){
var doc = CmdUtils.getDocument();
var txt = jQuery.trim( args.object.text );


//var html = $('<div>').append($(txt, doc).clone()).remove().html();//hack to get whole element


var part='';
  $(txt, doc).each(function(){
  part+= String($(this).html())+'<br/>';
  //part+= $('<div>').append($(this).clone()).remove().html()+'<br/>'; //hack to get whole element
});

doc.body.innerHTML = '<html><body>'+part+'</body></html>';
    
	},


 	 preview: function(pblock, args ) {


  		  pblock.innerHTML = _("scrape the page using a jquery selector") ;

  },
});  
