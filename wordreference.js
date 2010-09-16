
CmdUtils.CreateCommand( {
	names: [ "wordreference2","wordreference"],
	arguments: [ {role: 'object', nountype: noun_arb_text, label: 'txt'}, {role: "goal", nountype: noun_type_lang_google} ],
        description: "lookup a word in wordreference.com",
        icon: "http://www.wordreference.com/favicon.ico",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/wordreference.html",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        license: "GPL",


	execute: function( args ){
				
		var txt = jQuery.trim( args.object.text ); 
                var url= context.focusedWindow.document.location;
                if(txt=='this'){txt=encodeURI(url);}
		var url= 'http://api.microsofttranslator.com/V1/Http.svc/Detect?appId=BD80A3250F46288E4DA4F17043543F91BB3B911A&text='+txt;

var from='en';//tmp
var to= 'fr';

    jQuery.get(url, function( htm ) {


                         if(htm=="en"){  from='en'; to=args.goal.data||'fr';}
                          if(htm!="en"){  from=htm; to='en'; }
var pair=from+to;
//now translate
var transurl='http://www.wordreference.com/'+pair+'/'+encodeURI(txt);



		Utils.openUrlInBrowser( transurl);
		return true;

    });





	},


 	 preview: function(pblock, args ) {
		var txt = jQuery.trim( args.object.text );
                    txt=txt.replace(' i '," I ");//improves detection
		url = context.focusedWindow.document.location + ""; 


var from='en';//tmp
var to= 'fr';


//detect language

    CmdUtils.previewGet(pblock, 'http://api.microsofttranslator.com/V1/Http.svc/Detect?appId=BD80A3250F46288E4DA4F17043543F91BB3B911A&text='+txt,
                        function (htm) {
                         if(htm=="en"){ pblock.innerHTML = 'it\'s english...'; from='en'; to=args.goal.data||'fr';}
                          if(htm!="en"){ pblock.innerHTML = 'it\'s not english...'; from=htm; to='en'; }
var pair=from+to;
//now translate
var transurl='http://www.wordreference.com/'+pair+'/'+encodeURI(txt);

    CmdUtils.previewGet(pblock, transurl,
                        function (htm) {
var htm=$("#Otbl", htm).html();                  
//htm=$(htm).remove(".OxAd");                          
  //     htm=$(htm).html();
                   pblock.innerHTML = htm+pair;
                        });






                        });


  },
});  





