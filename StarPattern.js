function starPattern(n){
    for(let i = 0; i < n; i++){
        let tempRow = "";
        for(let j = 0; j < n; j++) {
            if(j >= (n - (i + 1))) {
                tempRow +="* ";
            } else {
                tempRow += "  ";
            }
        }
        console.log(tempRow);
    }
}

const n = 5;

starPattern(n);