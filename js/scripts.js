if (!("repeatt" in String.prototype)) {
    
    String.prototype.repeatt = function(x) {
        
        var string = this.valueOf(),
            output = "";

        for (i=0; i<x; i++) {
            output += string;
        }

        return output;
    }
}

console.log("hej".repeatt(5));