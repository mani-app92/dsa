
function LoopInLoop() {
    for(let i = 5; i > 0; i--){
        for(let j = 0; j < i; j++){
            console.log(i,j);
        }
    }
}

LoopInLoop();