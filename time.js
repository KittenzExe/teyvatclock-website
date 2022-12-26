var dt = new Date();
document.getElementById('date-time').innerHTML=dt;

//Asia Server Time Code
const utcGMT8AS = new Date("January 1, 2022 20:00:00");
let asServer = utcGMT8AS.getHours()+8;
let asServer2 = asServer - 24;
var asServerF = asServer2;
console.log(asServerF);
var decimalTimeString = asServerF;
var s = new Date(0,0);
s.setMinutes(+decimalTimeString * 60);
var ASresult = s.toTimeString().slice(0, 5);
console.log(ASresult);
document.getElementById('ASresult').innerHTML=ASresult;

//Europe Server Time Code
const utcGMT1EU = new Date("January 1, 2022 03:00:00");
let euServer = utcGMT1EU.getHours()+1;
let euServer2 = euServer - 24;
var euServerF = euServer2;
console.log(euServerF);
var decimalTimeString = euServerF;
var e = new Date(0,0);
e.setMinutes(+decimalTimeString * 60);
var EUresult = e.toTimeString().slice(0, 5);
console.log(EUresult);
document.getElementById('EUresult').innerHTML=EUresult;

//America Server Time Code
const utcGMT5AM = new Date("January 1, 2022 09:00:00");
let amServer = utcGMT5AM.getHours()-5;
let amServer2 = amServer - 24;
var amServerF = amServer2;
console.log(amServerF);
var decimalTimeString = amServerF;
var a = new Date(0,0);
a.setMinutes(+decimalTimeString * 60);
var AMresult = a.toTimeString().slice(0, 5);
console.log(AMresult);
document.getElementById('AMresult').innerHTML=AMresult;


//Local Time Code
client0 = new Date().getTimezoneOffset();
console.log(client0)
client00 = client0 / -60 //convert to hour difference pogU
console.log(client00)

//Local Time Code AS
let asLocal = utcGMT8AS.getHours()+client00;
let asLocal2 = asLocal - 24;
var asLocalF = asLocal2;
console.log(asLocalF)
var decimalTimeString = asLocalF;
var n = new Date(0,0);
n.setMinutes(+decimalTimeString * 60);
var LocalresultAS = n.toTimeString().slice(0, 5);
console.log(LocalresultAS);
document.getElementById('localresultas').innerHTML=LocalresultAS;

//Local Time Code EU
let euLocal = utcGMT1EU.getHours()+client00;
let euLocal2 = euLocal - 24;
var euLocalF = euLocal2;
console.log(euLocalF)
var decimalTimeString = euLocalF;
var m = new Date(0,0);
m.setMinutes(+decimalTimeString * 60);
var LocalresultEU = m.toTimeString().slice(0, 5);
console.log(LocalresultEU);
document.getElementById('localresulteu').innerHTML=LocalresultEU;

//Local Time Code AM
let amLocal = utcGMT5AM.getHours()+client00;
let amLocal2 = amLocal - 24;
var amLocalF = amLocal2;
console.log(amLocalF)
var decimalTimeString = amLocalF;
var o = new Date(0,0);
o.setMinutes(+decimalTimeString * 60);
var LocalresultAM = o.toTimeString().slice(0, 5);
console.log(LocalresultAM);
document.getElementById('localresultam').innerHTML=LocalresultAM;