CmdUtils.CreateCommand({
    names: ["vancouver library","vpl"],
    arguments: [{role: 'object', nountype: noun_arb_text,  label: 'txt'  }],
    description: "search the vancouver library",
    preview: "search the vancouver library",
    author: {
        name: "Spencer Kelly",
        email: "spencerwater@gmail.com"
    },
    homepage: "http://spencerwaterbed.com/soft/ubiquity/vpl.html",
    icon: "http://www.vpl.ca/favicon.ico",
    license: "GPL",

    preview: function(pblock, args) {

        var txt = jQuery.trim(args.object.text);
        pblock.innerHTML = _("search the vancouver library for ") + txt + ' ...';

    },

    execute: function(args) {
        var txt = jQuery.trim(args.object.text);
        Utils.openUrlInBrowser('http://ipac3.vpl.ca/ipac20/ipac.jsp?profile=pac&menu=search&aspect=basic&index=.GW&x=13&y=10&oper=and&aspect=basic&index=.VFMT&term=' + txt);
        return true;
    },
})

