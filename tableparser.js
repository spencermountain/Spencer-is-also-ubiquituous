
CmdUtils.CreateCommand( {
	names: [ "table parser", "parse table"],
	arguments: [ ],
        description: "parse a table on the current page",
        icon: "http://www.iconarchive.com/download/tpdkdesign.net/refresh-cl/Windows-Table.ico",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/tableparser.html",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        license: "GPL",


	execute: function( args ){
    var i =1; var all='';
var doc = CmdUtils.getDocument();

  $('table',doc)
 .mouseover(function() {
  if(i){ $(this).css('outline',' 1px solid #c50');}
 })
 .mouseout(function() {
   if(i){$(this).css('outline',' 0px solid #c50');}
 })


 .click(function(event) {
$('tr', this).each(function(){
var row=$(this);
  $('td',row).each(function(){
  all+=$(this).html() + '; ';
  });//td

  all+='<br/>';
});//tr

$("*",doc).html(all);

});//click
    
	},


 	 preview: function(pblock, args ) {


  		  pblock.innerHTML = _("allows you to parse a html table on the current page ") ;

  },
});  
