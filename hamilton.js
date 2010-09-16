CmdUtils.CreateCommand({
    names: ["hamilton library"],
    arguments: [{role: 'object', nountype: noun_arb_text,  label: 'txt'  }],
    description: "search the hamilton library",
    preview: "search the hamilton library",
    author: {
        name: "Spencer Kelly",
        email: "spencerwater@gmail.com"
    },
    homepage: "http://spencerwaterbed.com/soft/ubiquity/hamilton.html",
    icon: "http://www.myhamilton.ca/favicon.ico",
    license: "GPL",

    preview: function(pblock, args) {

        var txt = jQuery.trim(args.object.text);
        pblock.innerHTML = _("search the hamilton library for ") + txt + ' ...';

    },

    execute: function(args) {
        var txt = jQuery.trim(args.object.text);
        Utils.openUrlInBrowser('http://ohip.hpl.ca/ipac20/ipac.jsp?menu=search&profile=web&index=.GN&term=' + txt);
        return true;
    },
})

