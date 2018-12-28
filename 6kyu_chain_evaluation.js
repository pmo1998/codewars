//(3).add(5).multiply(2) -->6

Number.prototype.add=function(a) {
    return +this.valueOf()+a;
}

Number.prototype.subtract=function(a) {
    return +this.valueOf()-a;
}

Number.prototype.multiply=function(a) {
    return +this.valueOf()*a;
}

Number.prototype.divide=function(a) {
    return +this.valueOf()/a;
}

Number.prototype.square=function() {
    return Math.pow(+this.valueOf(),2);
}
