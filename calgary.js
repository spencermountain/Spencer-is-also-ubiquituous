CmdUtils.CreateCommand({
    names: ["calgary library"],
    arguments: [{role: 'object', nountype: noun_arb_text,  label: 'txt'  }],
    description: "search the calgary library",
    preview: "search the calgary library",
    author: {
        name: "Spencer Kelly",
        email: "spencerwater@gmail.com"
    },
    homepage: "http://spencerwaterbed.com/soft/ubiquity/calgary.html",
    icon: "http://calgarypubliclibrary.com/favicon.ico",
    license: "GPL",

    preview: function(pblock, args) {

        var txt = jQuery.trim(args.object.text);
        pblock.innerHTML = _("search the calgary library for ") + txt + ' ...';

    },

    execute: function(args) {
        var txt = jQuery.trim(args.object.text);
        Utils.openUrlInBrowser('https://catalogue.calgarypubliclibrary.com/uhtbin/cgisirsi/x/LIBPOLNAME/0/5?srchfield1=GENERAL^SUBJECT^GENERAL^^words+or+phrase&searchdata1=' + txt);
        return true;
    },
})

