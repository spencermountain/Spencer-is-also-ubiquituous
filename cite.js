
CmdUtils.CreateCommand( {
  names: [ "cite"],
  arguments: [ {role: 'object', nountype: noun_arb_text, label: 'txt'} ],
  description: "cite the current page in wikipedia",
  icon: "http://www.iconarchive.com/icons/simiographics/mixed/48/Pencil-icon.png",
  homepage: "http://spencerwaterbed.com/soft/ubiquity/cite.html",
  author: { name: "Spencer Kelly", email: "spencerwater@gmail.com"},
  license: "GPL",
  
  
  execute: function( args ){
    
    return true;
  },
  
  preview: function(pblock, args ) {
    var theurl = context.focusedWindow.document.location;
    theurl=''+theurl+'';
    pblock.innerHTML = _("grabbing citation for "+theurl+"..") ;
    



var chosen=''; var page=''; var author=''; var first=''; var last=''; var title=''; var publisher=''; var datemade='';
var txt='';

var doc = CmdUtils.getDocument();
txt = jQuery.trim( args.object.text );

///////
//general parameters
var title=$('title',doc).html();

var time=new Date();
var month=time.getMonth()+1; month=''+month+'';
if(month.length==1){month='0'+month;}
var day=''+time.getDate()+'';
if(day.length==1){day='0'+day;}
var year=time.getFullYear();
var accessdate= year+'-'+month+'-'+day;
 


//meta stuff (some sites like wired.com, publish this stuff properly)

      var m= doc.getElementsByTagName('meta'); // grab all metadata
      for (var i in m){
        var name= m[i].getAttribute('name'); 
        var content=m[i].getAttribute('content');
        if(name=='title'||name=='Title'){title=content;}
        if(name=='PublishDate'||name=='Publishdate'||name=='publishdate'){datemade=content;} 
        if(name=='Author'||name=='author'){author=content;
              author=author.replace('By ','');
              var tmp=author.split(' ');
              var first=tmp[0];
              var last=author.replace(first,'');last=jQuery.trim(last);
              if(last.match(' ')&& !last.match(/^[a-z]\.? /)){last=''; first='';}//if bungled name
            } 
        content='';
      }



////////////





 //specific websites
try{

////googlebooks
if (theurl.match('books.google'))
{
var author= $(".addmd",doc).html();
author=author.replace('By ','');
author=jQuery.trim(author);
var tmp=author.split(' ');
var first=tmp[0];
var last=author.replace(first,'');
if(last.match(' ')&& !last.match(/^[a-z]\.? /)){last='';}//if bugled last name

var title= $(".title",doc).html();

var page= $("#page_label",doc).html();
page=page.replace('Page ','');
chosen='googlebooks';
}


/////amazon////
if (theurl.match('www.amazon.'))
{
var author= $(".buying a:nth-child(2)",doc).html();
author=author.replace('By ','');
author=jQuery.trim(author);
var tmp=author.split(' ');
var first=tmp[0];
var last=author.replace(first,'');last=jQuery.trim(last);
if(last.match(' ')&& !last.match(/^[a-z]\.? /)){last=''; first='';}//if bungled name
var title= $("#btAsinTitle",doc).html();
chosen='amazon';
}

///cbc/////
if (theurl.match('cbc.ca'))
{
var datemade= $(".lastupdated",doc).html();
datemade= datemade.replace('Last Updated:','');

var publisher='[[Canadian_Broadcasting_Corporation]]'

var title= $(".headline",doc).html();
chosen='cbc';
}
////////

///guardian/////
if (theurl.match('guardian.co.uk'))
{

//var datemade= $(".publication",doc).html();
//datemade= datemade.replace(/*.?, /,'');

var author= $(".byline a",doc).html();
author=jQuery.trim(author);
var tmp=author.split(' ');
var first=tmp[0];
var last=author.replace(first,'');last=jQuery.trim(last);
if(last.match(' ')&& !last.match(/^[a-z]\.? /)){last=''; first='';}//if bungled name

var publisher='[[guardian.co.uk]]';

var title= $("h1",doc).html();
chosen='guardian';
}
////////


///nytimes/////
if (theurl.match('nytimes.com'))
{
var author= $(".byline a",doc).html();
author=jQuery.trim(author);
var tmp=author.split(' ');
var first=tmp[0];
var last=author.replace(first,'');last=jQuery.trim(last);
if(last.match(' ')&& !last.match(/^[a-z]\.? /)){last=''; first='';}//if bungled name

var datemade= $(".timestamp",doc).html();
datemade= datemade.replace('Published: ','');

var publisher='[[The New York Times]]'

var title= $("nyt_headline",doc).html();
chosen='nytimes';
}
////////


///cnn/////
if (theurl.match('cnn.com'))
{
var datemade= $(".cnn_strytmstmp",doc).html();

var publisher='[[CNN]]'

var title= $("#cnnContentContainer h1",doc).html();
chosen='cnn';
}
////////

///bbc/////
if (theurl.match('bbc.co.uk'))
{
var datemade= $(".ds",doc).html();
datemade= datemade.replace('Last Updated:','');

var publisher='[[BBC]]'

var title= $(".sh",doc).html();
chosen='cnn';
}
////////

///abc/////
if (theurl.match('abc.net.au'))
{
var author= $(".author a",doc).html();
author=jQuery.trim(author);
var tmp=author.split(' ');
var first=tmp[0];
var last=author.replace(first,'');last=jQuery.trim(last);
if(last.match(' ')&& !last.match(/^[a-z]\.? /)){last=''; first='';}//if bungled name

var datemade= $(".timestamp",doc).html();
datemade= datemade.replace('Last Updated:','');
if(datemade.match(' ago')){datemade='';}

var publisher='[[Australian Broadcasting Corporation]]'

var title= $("h1",doc).html();
}
////////

///aljazeera/////
if (theurl.match('aljazeera.net'))
{
var publisher='[[Al Jazeera]]'

var title= $("#DetailedTitle",doc).html();
}
////////


///theglobeandmail/////
if (theurl.match('theglobeandmail.com'))
{

var author= $("#byline",doc).html();
author=jQuery.trim(author);
var tmp=author.split(' ');
var first=tmp[0];
var last=author.replace(first,'');last=jQuery.trim(last);
if(last.match(' ')&& !last.match(/^[a-z]\.? /)){last=''; first='';}//if bungled name

var datemade= $(".dateline",doc).html();
datemade= datemade.replace('Published on ','');

var publisher='[[The Globe and Mail]]'

var title= $("#teaser h3",doc).html();
}
////////

///arxiv/////
if (theurl.match('arxiv.org'))
{
var author= $(".authors a",doc).html();
author=jQuery.trim(author);
var tmp=author.split(' ');
var first=tmp[0];
var last=author.replace(first,'');last=jQuery.trim(last);
if(last.match(' ')&& !last.match(/^[a-z]\.? /)){last=''; first='';}//if bungled name

var datemade= $(".dateline",doc).html();
datemade= datemade.replace('(Submitted on','');
datemade= datemade.replace(')','');

var publisher='[[arXiv]]'

var title= $(".title",doc).html();
}
////////

///wikinews/////
if (theurl.match('wikinews.org'))
{
var datemade= $(".published",doc).html();

var publisher='[[Wikinews]]'

var title= $("#firstHeading",doc).html();
}
////////

///nbc/////
if (theurl.match('msnbc.msn.com'))
{
var datemade= $(".date",doc).html();

var publisher='[[NBC News]]'

var title= $("h1",doc).html();
}
////////

///foxnews/////
if (theurl.match('foxnews.com'))
{
var datemade= $(".published",doc).html();

var publisher='[[Fox News Channel]]'

var title= $(".head",doc).html();
}
////////



///newscientist/////
if (theurl.match('newscientist.com'))
{
var datemade= $("#pgtop li:nth-child(1)",doc).html();
var tmp=datemade.split('by');
try{datemade=tmp[0];}catch(e){datemade='';}

var author= $("#pgtop a:nth-child(1) b",doc).html();
author=jQuery.trim(author);
var tmp=author.split(' ');
var first=tmp[0];
var last=author.replace(first,'');last=jQuery.trim(last);
if(last.match(' ')&& !last.match(/^[a-z]\.? /)){last=''; first='';}//if bungled name

var publisher='[[New_Scientist]]'

var title= $("h1",doc).html();
}
////////


///thetimes/////
if (theurl.match('timesonline.co.uk'))
{
var datemade= $("div.color-666",doc).html();

var publisher='[[The_Times]]'

var title= $(".heading",doc).html();
}
////////

///harpers/////
if (theurl.match('harpers.org'))
{
var datemade= $("div.color-666",doc).html();

var publisher="[[Harper's Magazine]]";

var title= $("h1",doc).html();
}
////////

///washingtonpost/////
if (theurl.match('washingtonpost.com'))
{
var author= $("#byline",doc).html();
author=author.replace('By ','');
author=jQuery.trim(author);
var tmp=author.split(' ');
var first=tmp[0];
var last=author.replace(first,'');last=jQuery.trim(last);
if(last.match(' ')&& !last.match(/^[a-z]\.? /)){last=''; first='';}//if bungled name

var publisher="[[The Washington Post]]";

var title= $("h1",doc).html();
}
////////


///csmonitor/////
if (theurl.match('csmonitor.com'))
{
var author= $(".sByline a",doc).html();
author=jQuery.trim(author);
var tmp=author.split(' ');
var first=tmp[0];
var last=author.replace(first,'');last=jQuery.trim(last);
if(last.match(' ')&& !last.match(/^[a-z]\.? /)){last=''; first='';}//if bungled name

var publisher=" [[The Christian Science Monitor]]";

var title= $(".head",doc).html();
}
////////


///telegraph///// (it uses meta tags)
if (theurl.match('telegraph.co.uk'))
{
var publisher="[[The Daily Telegraph]]";
}
////////



///cbs/////
if (theurl.match('cbsnews.com'))
{
var author= $(".sByline",doc).html();
author=author.replace('By ','');
author=jQuery.trim(author);
var tmp=author.split(' ');
var first=tmp[0];
var last=author.replace(first,'');last=jQuery.trim(last);
if(last.match(' ')&& !last.match(/^[a-z]\.? /)){last=''; first=''; author='';}//if bungled name

var publisher=" [[CBS News]]";

var title= $("h1",doc).html();
}
////////



///india times/////
if (theurl.match('timesofindia.indiatimes.com'))
{
var publisher="[[The Times of India]]";

var title= $("h1",doc).html();
}
////////

///skynews/////
if (theurl.match('news.sky.com'))
{
var publisher="[[Sky News]]";

var title= $("h1",doc).html();
var datemade= $(".articleUpdate",doc).html();
var author=''; var first=''; var last='';
}
////////

///latimes/////
if (theurl.match('latimes.com'))
{
var publisher="[[LA Times]]";

var title= $("h1",doc).html();
}
////////


}catch(e){}



if(publisher==''){
///////
//try to discover publisher based on the url
/////////
    CmdUtils.previewGet(pblock, 'http://referee.freebaseapps.com/?url='+theurl,
                        function (htm) {
                        publisher = htm||''; 
                        publisher = jQuery.trim( publisher );
//double it because its asynchronous
if(publisher!=''){
var citation=makeit(theurl,title,author,first,last,page,txt,publisher,datemade,accessdate);
publish(citation);
}       
                        });
}




var citation=makeit(theurl,title,author,first,last,page,txt,publisher,datemade,accessdate);

publish(citation);




////////////

function makeit(theurl,title,author,first,last,page,txt,publisher,datemade,accessdate)
{
//make the citation
var citation='{{cite web ';
if(theurl!=''){citation+="\n| url = "+theurl;}
if(title!=''){citation+="\n| title = "+title;}
if(author!=''){citation+="\n| author = "+author;}
if(first!=''){citation+="\n| first = "+first;}
if(last!=''){citation+="\n| last = "+last;}
if(page!=''){citation+="\n| page = "+page;}
if(txt!=''){citation+="\n| quote = "+txt;}
if(publisher!=''){citation+="\n| publisher = "+publisher;}
if(datemade!=''){citation+="\n| date = "+datemade;}
if(accessdate!=''){citation+="\n| accessdate = "+accessdate;}
citation+="\n}}";

citation=citation.replace('\n\n','');
citation=citation.replace(/<.*?>/g,'');
citation='<ref>'+citation+'</ref>';
return citation;
}


function publish(citation){
  pblock.innerHTML ='<textarea id="tarea" rows="20" style="width:90%; color:white; background:black;">'+citation+'</textarea><br/><a id="copy">copy to clipboard</a>';
                         
 $('#copy', pblock).click(function(pblock) {  
 const gClipboardHelper = Components.classes["@mozilla.org/widget/clipboardhelper;1"].  
  getService(Components.interfaces.nsIClipboardHelper);  
  gClipboardHelper.copyString(citation); 
                            context.chromeWindow.gUbiquity.closeWindow();
                            return true;
                          });




}

  }
}); 
