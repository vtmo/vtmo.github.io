console.log('Hello world.')
var responseIPApi = await fetch("https://ipapi.co/city/");
var cidade = await responseIPApi.text();
console.log(cidade);