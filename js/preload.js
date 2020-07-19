function parseURLParams(e){var n,t,l,o,r=e.indexOf("?")+1,p=e.indexOf("#")+1||e.length+1,i=e.slice(r,p-1),s=i.replace(/\+/g," ").split("&"),a={};if(i!==e&&""!==i){for(n=0;n<s.length;n++)o=s[n].split("=",2),t=decodeURIComponent(o[0]),l=decodeURIComponent(o[1]),a.hasOwnProperty(t)||(a[t]=[]),a[t].push(2===o.length?l:null);return a}}
if(parseURLParams(window.location.href)){
    var urlParams = parseURLParams(window.location.href).re[0].split("/");
    if(urlParams[1]=="v") {
        location.href = "https://www.youtube.com/watch?v="+urlParams[2];
    }
    
}
