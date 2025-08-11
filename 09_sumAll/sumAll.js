const sumAll = function(a, b) {
    const range = function(start, stop, step) {
        let length = (a < b) ? Math.ceil((stop - start) / step) + 1 : Math.ceil((start - stop) / step) + 1;
       
        if (a < b) {
            return Array.from({length}, (_, index) => start + index * step);
        }
        else if (a > b) {
            return Array.from({length}, (_, index) => stop + index * step);
        }
    }
    if (a < 0 || b < 0) {
        return 'ERROR';
    } else if ( typeof(a) !== 'number' || typeof(b) !== 'number') {
        return 'ERROR'
    } else if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR'
    }

   return range(a, b, 1).reduce((sum, current) => sum + current, 0);
};

// Do not edit below this line
module.exports = sumAll;
