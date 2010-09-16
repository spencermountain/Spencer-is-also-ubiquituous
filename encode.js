
CmdUtils.CreateCommand({
  names: ["uri encode","url encode","escape url","percent encode"],
  arguments: [ {role: 'object', nountype: noun_arb_text, label: 'txt'} ],
        description: "URI encode (percent encode) your input",
        preview:  "URI encode (percent encode) your input",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        homepage: "http://spencerwaterbed.com/soft/ubiquity/encode.html",
	icon: "http://smath.info/live/img/btn/percent.gif",
        license: "GPL",


  preview: function(pblock, args ) {

var txt = jQuery.trim( args.object.text );
if(txt==''){
 pblock.innerHTML ='URI encode (percent encode) your input';
}
else{
txt=encodeURI(txt);
   pblock.innerHTML = txt;
}
  },


	execute: function( args ){
		return true;
	},
})
   

//////////////////////

CmdUtils.CreateCommand({
  names: ["uri decode", "url decode","percent decode","unescape url"],
  arguments: [ {role: 'object', nountype: noun_arb_text, label: 'txt'} ],
        description: "URI decode (percent decode) your input",
        preview:  "URI decode (percent decode) your input",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        homepage: "http://spencerwaterbed.com/soft/ubiquity/encode.html",
	icon: "http://smath.info/live/img/btn/percent.gif",
        license: "GPL",


  preview: function(pblock, args ) {

var txt = jQuery.trim( args.object.text );
if(txt==''){
 pblock.innerHTML ='URI decode (percent decode) your input';
}
else{
txt=decodeURI(txt);
   pblock.innerHTML = txt;
}
  },


	execute: function( args ){
		return true;
	},
})
   

