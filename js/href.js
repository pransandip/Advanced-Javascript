// we can take current URL in a variable in this way

var temp$url = window.location.href; 
console.log(temp$url) // http://127.0.0.1:5500/

temp$url = temp$url.split('/') // spliting URL respect to right slash
console.log(temp$url)  // ['http:', '', '127.0.0.1:5500', '']

console.log(temp$url[0]) // http:
console.log(temp$url.slice(0,1)) // ['http:']
console.log(typeof(temp$url.slice(0,1))) // object

// window.location.href = '/test' // GET http://127.0.0.1:5500/test 404 (Not Found)


// Sets or gets the URL for the current document :- (property) Document.URL: string

/** To retrieve just the URL as a string, the read-only document.URL property can also be used.
If the current document is not in a browsing context, the returned value is null. */

console.log(document.URL) // http://127.0.0.1:5500/

/**The Document.location read-only property returns a Location object, 
 * which contains information about the URL of the document and provides
 *  methods for changing that URL and loading another URL. */

console.log(document.location) 

// it will print location object
// Location {ancestorOrigins: DOMStringList, href: 'http://127.0.0.1:5500/', 
// origin: 'http://127.0.0.1:5500', protocol: 'http:', host: '127.0.0.1:5500', …}

console.log(window.location) // both will print same object

// If you assign URL string to it, browser will load the website you assigned.
// document.location= 'https://developer.mozilla.org' 
// document.location.href = 'https://developer.mozilla.org' // both same

console.log(document.location.pathname) // /index.html


// // Let an <a id="myAnchor" href="/en-US/docs/Location.search?q=123"> element be in the document
// var anchor = document.getElementById("myAnchor");
// var queryString = anchor.search; // Returns:'?q=123'

// // Further parsing:
// let params = new URLSearchParams(queryString);
// let q = parseInt(params.get("q")); // is the number 123