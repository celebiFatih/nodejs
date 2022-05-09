const PI = Math.PI;

const circleArea = (r) => {
    const result = PI * r ** 2;
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${result}`)
}

const circleCircumference = (r) => {
    const result = 2 * PI * r;
    console.log(`Yarıçapı ${r} olan dairenin çevresi: ${result}`)
}

module.exports = {circleArea, circleCircumference};