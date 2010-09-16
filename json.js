CmdUtils.CreateCommand({
    names: ["JSON viewer", "beautify-JSON", "format JSON"],
    arguments: [{
        role: 'object',
        nountype: noun_arb_text,
        label: 'txt'
    }],
    description: "format json text ",
    preview: "format json text",
    author: {
        name: "Spencer Kelly",
        email: "spencerwater@gmail.com"
    },
    homepage: "http://spencerwaterbed.com/soft/ubiquity/json.html",
    icon: "http://www.JSON.org/favicon.ico",
    license: "GPL",

    preview: function(pblock, args) {

        var txt = jQuery.trim(args.object.text);
        pblock.innerHTML = _("format json text..") ;
    },

    execute: function(args) {
        var txt = jQuery.trim(args.object.text);
       var post={"json":txt};

       Utils.openUrlInBrowser('http://ubiquity.freebaseapps.com/viewjson', post);

    },
})
