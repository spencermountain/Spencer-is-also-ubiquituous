
  CmdUtils.CreateCommand({
  names: ["spell","aspell"],
  arguments: [ {role: 'object', nountype: noun_arb_text, label: 'txt'} ],
  description: "spell something correctly",
  preview:  "spell something correctly",
  author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
  homepage: "http://spencerwaterbed.com/soft/ubiquity/spell.html",
  icon: "http://spencerwaterbed.com/soft/ubiquity/spell.ico",
  license: "GPL",
  
  
  preview: function(pblock, args ) {
  
  var txt = jQuery.trim( args.object.text );
  
  var $ = jQuery; // Access to jQuery
  
  
  pblock.innerHTML = _("querying ") + txt+' ...';
  
  CmdUtils.previewGet(pblock, 'http://suggest.aspell.net/index.php?spelling=english&dict=normal&sugmode=slow&word='+txt, function (htm) {
  var end='';
  var el=$(htm).find('a[target="aspell-def"]').each(function (i) {
  var href=$(this).attr("href");
  end+='<a href="'+href+'">'+$(this).html()+'</a><br/>';
  });
  
  
  pblock.innerHTML = end;
  return true;
  });
  },
  
  
  execute: function( args ){
  var txt = jQuery.trim( args.object.text );
  
  
  
  Utils.openUrlInBrowser( 'http://suggest.aspell.net/index.php?spelling=english&dict=normal&sugmode=slow&word='+txt );
  return true;
  },
  })

