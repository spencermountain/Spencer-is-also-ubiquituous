
CmdUtils.CreateCommand( {
	names: [ "remove"],
	arguments: [ ],
        description: "remove parts of your current page",
        icon: "http://www.iconarchive.com/icons/dryicons/simplistica/24/delete-icon.png",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/remove.html",
        author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
        license: "GPL",


	execute: function( args ){
    var i =1;
var doc = CmdUtils.getDocument();

  $('*',doc)
 .mouseover(function(event) {
  if(i){ $(event.target).css('outline',' 1px solid #c50');}
 })
 .mouseout(function(event) {
   if(i){$(event.target).css('outline',' 0px solid #c50');}
 })


 .click(function(event) {
   if(i){ $(event.target).css("display","none");  event.preventDefault();} i=0;    
 });
    
	},


 	 preview: function(pblock, args ) {


  		  pblock.innerHTML = _("allows you to remove parts of your current page ") ;

  },
});  
