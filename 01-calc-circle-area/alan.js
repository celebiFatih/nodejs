let args = process.argv.slice(2);

const calcArea = (r) => {
    const PI = Math.PI;
    const result = PI * r**2;
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${result}`)
}

calcArea(args[0]*1)