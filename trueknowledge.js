
CmdUtils.CreateCommand( {
	names: [ "trueknowledge"],
	arguments: [ {role: 'object', nountype: noun_arb_text, label: 'txt'} ],
        description: "asks trueknowledge",
        icon: "http://www.trueknowledge.com/favicon.ico",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/trueknowledge.html",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        license: "GPL",


	execute: function( args ){
		
		var txt = jQuery.trim( args.object.text ); 
                var url= context.focusedWindow.document.location;
                if(txt=='this'){txt=encodeURI(url);}
                txt=txt.replace(/ /g,'_');
		Utils.openUrlInBrowser( 'http://www.trueknowledge.com/q/'+txt);
		return true;
	},


 	 preview: function(pblock, args ) {

		var txt = jQuery.trim( args.object.text );
		//url = context.focusedWindow.document.location + ""; 

  		  pblock.innerHTML = _("asking '"+txt+"'...") ;
               // txt=txt.replace(/ /g,'_');
var url='http://api.trueknowledge.com/direct_answer?api_account_id=api_ubiquity&api_password=fgw235p9exlif830&question='+ encodeURI(txt);


  jQuery.ajax({ 
type: "GET", 
url: url, 
dataType: "txt", 
success: function( txt ) { 
var answer=txt.match(/<tk:text_result>(.*?)<\/tk:text_result>/) ||''; 
answer=answer[0]||'';

//var image=txt.match(/<tk:metadata parameter="image150" result_index="0">(.*?)<\/tk:metadata>/); 
//image=' '+image[0].replace('<','')+' ';
//image=' <img src="'+ image +'"/>';
if(answer==null||answer==''){answer='don\'t know';}
var html='<html><body>'+answer+'<p></p> </body></html>';
pblock.innerHTML = _(' '+html) ;

 },
error:function( txt ) { pblock.innerHTML = _("err '"+txt+"'..."+url) ; }
});



  }
});  
