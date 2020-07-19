var generateButton = document.getElementById("generate-button");
var link = document.getElementById("link-input");
var result = document.getElementById("result");

var safeDomains = [
    "youtube",
    "youtu.be"
];

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

function getDomain(url){
    
    return url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0];

}

function getDomainName(url){
    var split  = url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0].split(".");
    return split[split.length-2];

}

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

generateButton.addEventListener("click", function(){
    
    var domainName = getDomainName(link.value);
    var fullDomain = getDomain(link.value);

    if( validURL(link.value) && safeDomains.includes(domainName) || safeDomains.includes(fullDomain)) {
        if(domainName == "youtube" || fullDomain == "youtu.be") {
            result.value = window.location.href + "?re=/v/"+youtube_parser(link.value);
            result.select();
            document.execCommand("copy");
        }
    }
    else {
        result.value = "URL isn't compatible";
    }

});
