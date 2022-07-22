module.exports = {
    averageScore : (games) => {
        let res = 0;
        let count = 0;
        if(games.length > 0){
            games = games.map(p => {
                res += p.points
                count++;
            });
            let x = Array.of(res/count).toString().split('',4);
            return parseFloat(x.join(''));
        }
        return 0;
    }
};