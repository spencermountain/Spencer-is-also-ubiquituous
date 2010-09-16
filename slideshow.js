CmdUtils.CreateCommand({
    names: ["slideshow2", "slide show", "flickr slideshow"],
    arguments: [{role: 'object', nountype: noun_arb_text,  label: 'txt'  }],
    description: "watch a image slideshow from flicker ",
    preview: "slideshow from flicker",
    author: {
        name: "Spencer Kelly",
        email: "spencerwater@gmail.com"
    },
    homepage: "http://spencerwaterbed.com/soft/ubiquity/slideshow.html",
    icon: "http://www.flickr.com/favicon.ico",
    license: "GPL",

    preview: function(pblock, args) {

        var txt = jQuery.trim(args.object.text);
        pblock.innerHTML = _("view a slideshow about ") + txt + ' ...';

    },

    execute: function(args) {
        var txt = jQuery.trim(args.object.text);
        Utils.openUrlInBrowser('http://www.flickr.com/search/show/?q=' + txt);
        return true;
    },
})

