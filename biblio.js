CmdUtils.CreateCommand({
    names: ["bibliotheques","montreal library"],
    arguments: [{role: 'object', nountype: noun_arb_text,  label: 'txt'  }],
    description: "search the montreal library",
    preview: "search the montreal library",
    author: {
        name: "Spencer Kelly",
        email: "spencerwater@gmail.com"
    },
    homepage: "http://spencerwaterbed.com/soft/ubiquity/biblio.html",
    icon: "http://ville.montreal.qc.ca/favicon.ico",
    license: "GPL",

    preview: function(pblock, args) {

        var txt = jQuery.trim(args.object.text);
        pblock.innerHTML = _("search the montreal library for ") + txt + ' ...';

    },

    execute: function(args) {
        var txt = jQuery.trim(args.object.text);
        Utils.openUrlInBrowser('http://nelligan.ville.montreal.qc.ca/search/a?searchtype=Y&searchscope=58&extended=0&SORT=D&submit.x=0&submit.y=0&submit=Chercher&searcharg=' + txt);
        return true;
    },
})

