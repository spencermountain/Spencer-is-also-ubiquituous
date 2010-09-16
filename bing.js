
CmdUtils.CreateCommand( {
	names: [ "bing translate","translate with bing"],
	arguments: [ {role: 'object', nountype: noun_arb_text, label: 'txt'}, {role: "goal", nountype: noun_type_lang_google} ],
        description: "translate text with microsoft bing's translator",
        icon: "http://www.bing.com/favicon.ico",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/streetview.html",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        license: "GPL",


	execute: function( args ){
		
		var txt = jQuery.trim( args.object.text ); 
                var url= context.focusedWindow.document.location;
                if(txt=='this'){txt=encodeURI(url);}
		Utils.openUrlInBrowser( 'http://api.microsofttranslator.com/V1/Http.svc/Translate?appId=BD80A3250F46288E4DA4F17043543F91BB3B911A&from=en&to=fr&text='+txt);
		return true;
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

//now translate
var transurl='http://api.microsofttranslator.com/V1/Http.svc/Translate?appId=BD80A3250F46288E4DA4F17043543F91BB3B911A&from='+from+'&to='+to+'&text='+encodeURI(txt);

    CmdUtils.previewGet(pblock, transurl,
                        function (htm) {
                          pblock.innerHTML = htm;                  

pblock.innerHTML += "<p></p>("+from+"->"+to+")";

//now translate backwards
var tmp=from; from=to; to=tmp;//switch languages

var transurl='http://api.microsofttranslator.com/V1/Http.svc/Translate?appId=BD80A3250F46288E4DA4F17043543F91BB3B911A&from='+from+'&to='+to+'&text='+encodeURI(htm);

    CmdUtils.previewGet(pblock, transurl,
                        function (htm2) {
                          pblock.innerHTML += "<p></p><span style='font-size:10;'>and backwards is:</span>'"+htm2+"'";                  
                          
                        });



                          
                        });






                        });


  },
});  








CmdUtils.CreateCommand( {
	names: [ "detect language"],
	arguments: [ {role: 'object', nountype: noun_arb_text, label: 'txt'} ],
        description: "detect the language of a text with microsoft bing's translator",
        icon: "http://www.bing.com/favicon.ico",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/streetview.html",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        license: "GPL",


	execute: function( args ){
		
		var txt = jQuery.trim( args.object.text ); 
                var url= context.focusedWindow.document.location;
                if(txt=='this'){txt=encodeURI(url);}
		Utils.openUrlInBrowser( 'http://api.microsofttranslator.com/V1/Http.svc/Detect?appId=BD80A3250F46288E4DA4F17043543F91BB3B911A&text=i%20live%20in%20canada%20and%20i%20am%20a%20door'+txt);
		return true;
	},


 	 preview: function(pblock, args ) {
		var txt = jQuery.trim( args.object.text );
		url = context.focusedWindow.document.location + ""; 

    CmdUtils.previewGet(pblock, 'http://api.microsofttranslator.com/V1/Http.svc/Detect?appId=BD80A3250F46288E4DA4F17043543F91BB3B911A&text=i%20live%20in%20canada%20and%20i%20am%20a%20door'+txt,
                        function (htm) {
                          pblock.innerHTML = htm;
                          
                          
                        });
  },
});  
