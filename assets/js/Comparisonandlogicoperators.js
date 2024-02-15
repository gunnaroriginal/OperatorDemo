// COMPARISON OPERATORS

// == (lig med)
console.log("%c== (LIG MED)", "background: #222; color: #bada55");
let x = 5;
let y = 5;

if (x == y) {
  console.log("x er lig med y.");
} else {
  console.log("x er ikke lig med y.");
}

// === (strengt lig med)
console.log("%c=== (STRENGT LIG MED)", "background: #222; color: #bada55");
let a = 5;
let b = "5";

if (a === b) {
  console.log("a er lig med b, inklusive datatyper.");
} else {
  console.log("a er ikke lig med b, eller de er af forskellige typer.");
}

// != (ikke lig med)
console.log("%c!= (IKKE LIG MED)", "background: #222; color: #bada55");
let c = 10;
let d = 5;

if (c != d) {
  console.log("c er ikke lig med d.");
} else {
  console.log("c er lig med d.");
}

// < (mindre end)
console.log("%c< (MINDRE END)", "background: #222; color: #bada55");
let e = 5;
let f = 10;

if (e < f) {
  console.log("e er mindre end f.");
} else {
  console.log("e er ikke mindre end f.");
}

// > (større end)
console.log("%c> (STØRRE END)", "background: #222; color: #bada55");
let g = 15;
let h = 10;

if (g > h) {
  console.log("g er større end h.");
} else {
  console.log("g er ikke større end h.");
}

// <= (mindre end eller lig med)
console.log(
  "%c<= (MINDRE END ELLER LIG MED)",
  "background: #222; color: #bada55"
);
let i = 5;
let j = 5;

if (i <= j) {
  console.log("i er mindre end eller lig med j.");
} else {
  console.log("i er større end j.");
}

// >= (større end eller lig med)
console.log(
  "%c>= (STØRRE END ELLER LIG MED)",
  "background: #222; color: #bada55"
);
let k = 10;
let l = 5;

if (k >= l) {
  console.log("k er større end eller lig med l.");
} else {
  console.log("k er mindre end l.");
}

// LOGIC OPERATORS

// && (and/og)
console.log("%c&& (AND/OG)", "background: #222; color: #bada55");
let m = 1;
n = 2;

if (m < 10 && n > 1) {
  console.log("m er mindre end 10 og n er større end 1");
} else {
  console.log("m er ikke mindre end 10 og n er ikke større end 1");
}

// || (or/eller)
console.log("%c|| (OR/ELLER)", "background: #222; color: #bada55");

let o = 1;
p = 2;

if (o == 5 || p == 5) {
  console.log("O er lig med 5 eller n er lig med 5");
} else {
  console.log("O er ikke lig med 5 eller n er ikke lig med 5");
}

// ! (not/ikke)
console.log("%c! (NOT/IKKE)", "background: #222; color: #bada55");

let q;
console.log(q);

if (!q) {
  console.log("q er undefined");
} else {
  console.log("q er defined");
}

let gunnar = "was here";

if (gunnar == "was here") {
  console.log("Gunnar was here");
} else {
  console.log("Gunnar was NOT here");
}
