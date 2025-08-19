const fibonacci = function(n) {
    const Fn = [0, 1];
    const num = Number(n);

    if (num === 0) {
        return 0;

    } else if 
        (num === 1) {
        return 1;
        } 

        else if 
        (num < 0) {
        return "OOPS"; 

    }

      else {
        for (let i = 2; i <= num; i++) {
          let nextNum = Fn[i-1] + Fn[i-2];
          Fn.push(nextNum);
        }
    }
    return Fn[num];
        
    
};

// Do not edit below this line
module.exports = fibonacci;
