

function intervalCount(cb, count, delay){
    const intervalObj = setInterval(function (){
        cb();

        count--;
        if(count === 0) clearInterval(intervalObj);
    }, delay*1000);
}

intervalCount(function() {
    console.log('inline test');
}, 3, 0.5);
