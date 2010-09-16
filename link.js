
CmdUtils.CreateCommand( {
  names: [ "link","freebase link"],
  arguments: [ {role: 'object', nountype: noun_arb_text, label: 'txt'} ],
  description: "make a link to something quickly",
  icon: "http://www.iconarchive.com/icons/simiographics/mixed/48/Pencil-icon.png",
  homepage: "http://spencerwaterbed.com/soft/ubiquity/links.html",
  author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
  license: "GPL",
  
  
  execute: function( args ){
    
    return true;
  },
  
  preview: function(pblock, args ) {
    
    var txt = jQuery.trim( args.object.text );
    
    pblock.innerHTML = _("grabbing links for "+txt+"..") ;
    
    CmdUtils.previewGet(pblock, 'http://ubiquity.freebaseapps.com/link?q='+txt,
                        function (htm) {
                          pblock.innerHTML = htm;
                          
                          $('.link', pblock).click(function() {  
                            var word=$(this).html();
                            CmdUtils.setSelection('&lt;a href="'+word+'"&gt;'+txt+'&lt;/a&gt;');
                            //event.preventDefault();
                            context.chromeWindow.gUbiquity.closeWindow();
                            return true;
                          });
                          
                          $('.wiki', pblock).click(function() {  
                            var word=$(this).html();
                            CmdUtils.setSelection(word);
                            //event.preventDefault();
                            context.chromeWindow.gUbiquity.closeWindow();
                            return true;
                          });
                          
                          
                        });
  },
}); 
