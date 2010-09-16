
CmdUtils.CreateCommand({
  names: ["turn down the lights","turn off the lights"],
  homepage: "http://spencerwaterbed.com/soft/ubiquity/lights.html",
  author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
  license: "GPL",
  icon: "http://www.iconarchive.com/download/mozco/symbolic-objects/Light-Bulb.ico",
  preview: function preview(pblock, args) {
    pblock.innerHTML = " darken the page's backround colour";
  },
  execute: function execute(args) {
    
    var $ = jQuery; // Access to jQuery
    
    var doc = CmdUtils.getDocument();
    

           $(doc).find("body").attr({
            style: "color:#DADADA; background:#242929",
            });           
           
            $(doc).find("div").attr({
            style: "color:#DADADA; background:#242929",
            });

           $(doc).find("span").attr({
            style: "color:#DADADA; background:#242929",
            });

              
  }
});
