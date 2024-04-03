function parseUrl(url){
    let href = url;
    let protocol = url.slice(0, url.indexOf(":")+1);
    
    url = url.slice(url.indexOf(":")+ 1);
    while (url[0] === "/") url = url.slice(1);
    
    let host = url.slice(0, url.indexOf("/"));
    let hostname = host.slice(0, host.indexOf(":"));
    let port = host.slice(host.indexOf(":")+1);
    
    url = url.slice(url.indexOf("/"));

    let hash = "";
    if(url.lastIndexOf("#"!=-1)){
        hash = url.slice(url.lastIndexOf("#"));
        url = url.slice(0, url.lastIndexOf("#"));
    }
    let search = ""
    if(url.indexOf("?")!=-1){
        search = url.slice(url.lastIndexOf("?"));
        url = url.slice(0, url.lastIndexOf("?"));
    }
    let pathname = url;

    let origin = href.slice(0, href.indexOf(pathname));

    return { href, protocol, host, hostname, port, hash, search, pathname, origin}

}

let a = parseUrl('http://sys.it-co.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo')

// Вернет объект, в котором будут следующие свойства:
console.log( a.href == "http://sys.it-co.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo" )
console.log( a.hash == "#foo" )
console.log( a.port == "8080" )
console.log( a.host == "sys.it-co.ru:8080" )
console.log( a.protocol == "http:" )
console.log( a.hostname == "sys.it-co.ru"  )
console.log( a.pathname == "/do/any.php" )
console.log( a.origin == "http://sys.it-co.ru:8080" )