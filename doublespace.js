CmdUtils.CreateCommand({
    names: ["doublespace","double space"],
    homepage: "http://spencerwaterbed.com/soft/ubiquity/doublespace.html",
    author: {
        name: "Spencer Kelly",
        email: "spencerwater@gmail.com"
    },
    license: "GPL",
  icon: "http://spencerwaterbed.com/soft/ubiquity/read.ico",
    preview: function preview(pblock, args) {
        pblock.innerHTML = " double space the text on the page";
    },
    execute: function execute(args) {

        var $ = jQuery; // Access to jQuery
        var doc = CmdUtils.getDocument();

        $(doc).find("body").attr({
            style: " line-height: 2em;",
        });        
       $(doc).find("div").attr({
            style: " line-height: 2em;",
        });        
       $(doc).find("span").attr({
            style: " line-height: 2em;",
        });

    }
});
