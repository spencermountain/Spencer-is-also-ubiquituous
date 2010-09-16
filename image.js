
CmdUtils.CreateCommand( {
  names: [ "image from freebase","freebase image"],
  arguments: [ {role: 'object', nountype: noun_arb_text, label: 'txt'} ],
  description: "grab an image of something quickly",
  icon: "http://www.freebase.com/favicon.ico",
  homepage: "http://spencerwaterbed.com/soft/ubiquity/image.html",
  author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
  license: "GPL",
  
  
  execute: function( args ){
    
    return true;
  },
  
  preview: function(pblock, args ) {
    
    var txt = jQuery.trim( args.object.text );
    
    pblock.innerHTML = _("grabbing links for "+txt+"..") ;
    
    CmdUtils.previewGet(pblock, 'http://ubiquity.freebaseapps.com/image?q='+txt,
                        function (htm) {
                          pblock.innerHTML = htm;
                          
                          $('.link', pblock).click(function() {  
                            var word=$(this).html();
                            CmdUtils.setSelection('&lt;img src="'+word+'"/&gt;');
                            //event.preventDefault();
                            context.chromeWindow.gUbiquity.closeWindow();
                            return true;
                          });
                          
                          
                        });
  },
}); 
