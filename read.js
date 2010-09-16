
CmdUtils.CreateCommand( {
	  names: ["plaintext","text","read2"],
  homepage: "http://spencerwaterbed.com/soft/ubiquity/read.html",
  author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
  license: "GPL",    
  arguments: [{
        role: 'object',
        nountype: noun_arb_text,
        label: 'txt'
    }],
  icon: "http://spencerwaterbed.com/soft/ubiquity/read.ico",

  preview: function preview(pblock, args) {
    pblock.innerHTML = " make the page easier to read...";
 var txt = jQuery.trim(args.object.text);
if(txt!=''){ pblock.innerHTML =txt;}
},



	execute: function( args ){
    var i =1; var all='';
var doc = CmdUtils.getDocument();

  $('*',doc).not("img")
 .mouseover(function() {
  if(i){ $(this).css('background',' 1px solid #c50');}
 })
 .mouseout(function() {
   if(i){$(this).css('outline',' 0px solid #c50');}
 })


 .click(function(event) {
var content=$(event.target).text();

doc.body.innerHTML = '<body style="background:#595959;"><div style="position:absolute; left:0; top:0; background:#595959; text-align:center;  margin-top:0px; margin-bottom:0px; margin-right:0px; width:100%; margin-left:0px; display: block; "><span  style="position:relative; display:block; line-height: 1.5em; font-size:25px; color:grey; width:75%; max-width:800px; min-width:200px; left:12.5%; "> '+content+'</span></div></body>';
});//click
    
	}


});  
