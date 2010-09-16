
CmdUtils.CreateCommand( {
	names: [ "irc","mibbit"],
	arguments: [ {role: 'object', nountype: noun_arb_text, label: 'channel and server'}],
        description: "connect to irc using mibbit.com",
        icon: "http://www.mibbit.com/favicon.ico",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/mibbit.html",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        license: "GPL",


	execute: function( args ){
var txt = jQuery.trim( args.object.text );var channel='#';
var server='irc.freenode.net';
var both=txt.split(/ /);
for(var i in both){
if(both[i].match(/^#/)){channel=jQuery.trim(both[i]);}
if(both[i].match(/\./)){server=jQuery.trim(both[i]);}
}
var url='http://www.mibbit.com/chat/?server='+encodeURI(server)+'&channel='+encodeURI(channel);
		Utils.openUrlInBrowser( url);
		return true;
	},


 	 preview: function(pblock, args ) {

		var txt = jQuery.trim( args.object.text );
var channel='#';
var server='irc.freenode.net';
var both=txt.split(/ /);
for(var i in both){
if(both[i].match(/^#/)){channel=jQuery.trim(both[i]);}
if(both[i].match(/\./)){server=jQuery.trim(both[i]);}
}
var htm='connect to '+channel+' on <b>'+server+'</b>';
pblock.innerHTML = htm;
  },
});  
