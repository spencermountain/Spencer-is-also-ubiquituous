CmdUtils.CreateCommand({
    names: ["victoria library","gvpl"],
    arguments: [{role: 'object', nountype: noun_arb_text,  label: 'txt'  }],
    description: "search the victoria library",
    preview: "search the victoria library",
    author: {
        name: "Spencer Kelly",
        email: "spencerwater@gmail.com"
    },
    homepage: "http://spencerwaterbed.com/soft/ubiquity/victoria.html",
    icon: "http://www.gvpl.ca/favicon.ico",
    license: "GPL",

    preview: function(pblock, args) {

        var txt = jQuery.trim(args.object.text);
        pblock.innerHTML = _("search the victoria library for ") + txt + ' ...';

    },

    execute: function(args) {
        var txt = jQuery.trim(args.object.text);
        Utils.openUrlInBrowser('http://catalogue.gvpl.ca/search/X?' + txt);
        return true;
    },
})

