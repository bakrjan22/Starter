function masquerCarte(numeroCarte) {
    return "************" + numeroCarte.slice(numeroCarte.length - 4,numeroCarte.length);
}
console.log(masquerCarte("1234567812345678"));
