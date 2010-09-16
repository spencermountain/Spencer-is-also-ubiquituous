CmdUtils.CreateCommand({
    names: ["barrie library"],
    arguments: [{role: 'object', nountype: noun_arb_text,  label: 'txt'  }],
    description: "search the hamilton library",
    preview: "search the barrie library",
    author: {
        name: "Spencer Kelly",
        email: "spencerwater@gmail.com"
    },
    homepage: "http://spencerwaterbed.com/soft/ubiquity/barrie.html",
    icon: "http://spencerwaterbed.com/soft/ubiquity/read.ico",
    license: "GPL",

    preview: function(pblock, args) {

        var txt = jQuery.trim(args.object.text);
        pblock.innerHTML = _("search the barrie library for ") + txt + ' ...';

    },

    execute: function(args) {
        var txt = jQuery.trim(args.object.text);
        Utils.openUrlInBrowser('http://www2.library.barrie.on.ca/ipac20/ipac.jsp?menu=basic&aspect=subtab27&npp=30&ipp=20&spp=20&profile=bpl&ri=1&source=~!barrie&index=.GW&x=0&y=0&aspect=subtab27&term=' + txt);
        return true;
    },
})

