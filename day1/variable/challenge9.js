function pow(n, p) {
    let I = 1;
    let s = n;
    while (I < p) {
        I++;
        s *= s;
    }
    return s;
}
function sqrt(n) {
    let e = n / 2;
    let prev;
    do {
        prev = e;
        e = (e + n / e) / 2;
    } while (Math.abs(e - prev) > 1e-10);
    return e;
}
function getxyz(p) {
    let l = p.length;
    let nubrs = [];
    for (let i = 1; i < l; i++) {
        if (p[i] >= '0' && p[i] <= '9') {
            console.log("got : " + p[i]);
            nubrs.push(p[i]);
        }
    }
    return nubrs;
}
const prompt = require("prompt-sync")();
let A = prompt("Position A : ");
let B = prompt("Position B : ");

let p1 = getxyz(A);
let p2 = getxyz(B);
console.log(sqrt(pow(p2[0] - p1[0], 2) + pow(p2[1] - p1[1], 2) + pow(p2[2] - p1[2], 2)));