
CmdUtils.CreateCommand( {
	names: [ "isolate", "grab element"],
	arguments: [ ],
        description: "view just one part of your current page, hide the rest.",
        icon: "http://www.iconarchive.com/icons/dryicons/simplistica/24/delete-icon.png",
        homepage: "http://spencerwaterbed.com/soft/ubiquity/isolate.html",
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
   if(i){
    $("*", doc).css("visibility","hidden");
    $(event.target).css("visibility","visible");
    $(event.target).find('*').css("visibility","visible");      //kids
      event.preventDefault();
      $(event.target).css('outline',' 0px solid #c50');
      }
      i=0;  
 });
    
	},


 	 preview: function(pblock, args ) {


  		  pblock.innerHTML = _("allows you to remove parts of your current page ") ;

  },
});  
