module.exports = {
    Percentage : (attemps, points) => {
        let i = 0;
        while(i < attemps){
            points -= 225;
            i++;
        }
        let x = Array.of(points).toString().split('',4);
        return parseFloat(`${x[0]}.${x[1]}${x[2]}`);
    }
};
