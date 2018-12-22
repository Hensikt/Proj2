//java

//button1
let punten = document.getElementById('punten');
let button1 = document.getElementById('song1');
let clicks = 0;
let terwijl = 0;
let knopA = "uit";
let knopB = "uit";
let points ="";

button1.addEventListener("click", knopEen);

function knopEen() {
  console.log("Knop 1 aan");

  knopA = "aan";
  clicks++;
  vergelijken();
}

//button2
let button2 = document.getElementById('band1');
button2.addEventListener("click", knopTwee);

function knopTwee() {
  knopB = "aan";
  console.log("Knop 2 aan");
  clicks++;
  vergelijken();
}


//vergelijking
function vergelijken() {
  if (clicks == 2) {
    if (knopB == "aan" && knopA == "aan") {
      console.log("wel een punt");
      points++;
      knopA = "uit";
      knopB = "uit";
}

else {
  console.log("geen punt");
}

clicks = 0;
}
}

//button3
let button3 = document.getElementById('song2');
let knopC = "uit";
let knopD = "uit";

button3.addEventListener("click", knopDrie);

function knopDrie() {
console.log("Knop 3 aan");

  knopC = "aan";
  clicks++;
  vergelijken2();
}

//button4
let button4 = document.getElementById('band2');
button4.addEventListener("click", knopVier);

function knopVier() {
knopD = "aan";
  console.log("Knop 4 aan");
  clicks++;
  vergelijken2();
}

//vergelijking2
function vergelijken2() {
if (clicks == 2) {
    if (knopD == "aan" && knopC == "aan") {
      console.log("wel een punt");
      points++;
      knopC = "uit";
      knopD = "uit";
}

else {
console.log("geen punt");
}

clicks = 0;
}
}

//button5
let button5 = document.getElementById('song3');
let knopE = "uit";
let knopF = "uit";

button5.addEventListener("click", knopVijf);

function knopVijf() {
console.log("Knop 5 aan");

  knopE = "aan";
  clicks++;
  vergelijken3();
}

//button6
let button6 = document.getElementById('band3');
button6.addEventListener("click", knopZes);

function knopZes() {
knopF = "aan";
  console.log("Knop 6 aan");
  clicks++;
  vergelijken3();
}

//vergelijking3
function vergelijken3() {
if (clicks == 2) {
    if (knopE == "aan" && knopF == "aan") {
      console.log("wel een punt");
      points++;
      knopE = "uit";
      knopF = "uit";
}

else {
console.log("geen punt");
}

clicks = 0;
}
}

let button7 = document.getElementById('song4');
let knopG = "uit";
let knopH = "uit";

button7.addEventListener("click", knopZeven);

//button7
function knopZeven() {
console.log("Knop 7 aan");

  knopG = "aan";
  clicks++;
  vergelijken4();
}

//button8
let button8 = document.getElementById('band4');
button8.addEventListener("click", knopAcht);

function knopAcht() {
knopH = "aan";
  console.log("Knop 8 aan");
  clicks++;
  vergelijken4();
}

//vergelijking4
function vergelijken4() {
if (clicks == 2) {
    if (knopG == "aan" && knopH == "aan") {
      console.log("wel een punt");
      points++;
      knopG = "uit";
      knopH = "uit";
}

else {
console.log("geen punt");
}

clicks = 0;
}
}

//button9
let button9 = document.getElementById('song5');
let knopI = "uit";
let knopJ = "uit";

button9.addEventListener("click", knopNegen);

function knopNegen() {
console.log("knop 9 aan");

  knopI = "aan";
  clicks++;
  vergelijken5();
}

//button10
let button0 = document.getElementById('band5');
button0.addEventListener("click", knopTien);

function knopTien() {
knopJ = "aan";
  console.log("Knop 10 aan");
  clicks++;
  vergelijken5();
}

//vergelijking5
function vergelijken5() {
if (clicks == 2) {
    if (knopI == "aan" && knopJ == "aan") {
      console.log("wel een punt");
      points++;
      knopI = "uit";
      knopJ = "uit";
}

else {
console.log("geen punt");
}

clicks = 0;
}
}

//button11
let button11 = document.getElementById('song6');
let knopK = "uit";
let knopL = "uit";

button11.addEventListener("click", knopElf);

function knopElf() {
console.log("Knop 11 aan");

  knopK = "aan";
  clicks++;
  vergelijken6();
}

//button12
let button12 = document.getElementById('band6');
button12.addEventListener("click", knopTwaalf);

function knopTwaalf() {
knopL = "aan";
  console.log("Knop 12 aan");
  clicks++;
  vergelijken6();
}

//vergelijking6
function vergelijken6() {
if (clicks == 2) {
    if (knopK == "aan" && knopL == "aan") {
      console.log("wel een punt");
      points++;
      knopK = "uit";
      knopL = "uit";
}

else {
console.log("geen punt");
}

clicks = 0;
}
}

//button13
let button13 = document.getElementById('song7');
let knopM = "uit";
let knopN = "uit";

button13.addEventListener("click", knopDertien);

function knopDertien() {
console.log("Knop 13 aan");

  knopM = "aan";
  clicks++;
  vergelijken7();
}

//button14
let button14 = document.getElementById('band7');
button14.addEventListener("click", knopVeertien);

function knopVeertien() {
knopN = "aan";
  console.log("Knop 14 Aan");
  clicks++;
  vergelijken7();
}

//vergelijking7
function vergelijken7() {
if (clicks == 2) {
    if (knopM == "aan" && knopN == "aan") {
      console.log("wel een punt");
      points++;
      knopM = "uit";
      knopN = "uit";
}

else {
console.log("geen punt");
}

clicks = 0;
}
}

//button15
let button15 = document.getElementById('song8');
let knopO = "uit";
let knopP = "uit";

button15.addEventListener("click", knopVijftien);

function knopVijftien() {
console.log("Knop 15 aan");

  knopO = "aan";
  clicks++;
  vergelijken8();
}

//button16
let button16 = document.getElementById('band8');
button16.addEventListener("click", knopZestien);

function knopZestien() {
knopP = "aan";
  console.log("Knop 16 aan");
  clicks++;
  vergelijken8();
}

//vergelijking8
function vergelijken8() {
if (clicks == 2) {
    if (knopO == "aan" && knopP == "aan") {
      console.log("wel een punt");
      points++;
      knopO = "uit";
      knopP = "uit";
}

else {
console.log("geen punt");
}

clicks = 0;
}
}

//button17
let button17 = document.getElementById('song9');
let knopQ = "uit";
let knopR = "uit";

button17.addEventListener("click", knopZeventien);

function knopZeventien() {
console.log("Knop 17 aan");

  knopQ = "aan";
  clicks++;
  vergelijken9();
}

//button18
let button18 = document.getElementById('band9');
button18.addEventListener("click", knopAchtien);

function knopAchtien() {
knopR = "aan";
  console.log("Knop 18 aan");
  clicks++;
  vergelijken9();
}

//vergelijking9
function vergelijken9() {
if (clicks == 2) {
    if (knopQ == "aan" && knopR == "aan") {
      console.log("wel een punt");
      points++;
      knopQ = "uit";
      knopDR = "uit";
}

else {
console.log("geen punt");
}

clicks = 0;
}
}

//button19
let button19 = document.getElementById('song0');
let knopS = "uit";
let knopT = "uit";

button19.addEventListener("click", knopNegentien);

function knopNegentien() {
console.log("knop 19 aan");

  knopS = "aan";
  clicks++;
  vergelijken10();
}

//button20
let button20 = document.getElementById('band0');
button20.addEventListener("click", knopTwintig);

function knopTwintig() {
knopT = "aan";
  console.log("Knop 20 aan");
  clicks++;
  vergelijken10();
}

//vergelijking10
function vergelijken10() {
if (clicks == 2) {
    if (knopS == "aan" && knopT == "aan") {
      console.log("wel een punt");
      points++;
      knopS = "uit";
      knopT = "uit";
}

else {
console.log("geen punt");
}

clicks = 0;
}
}
