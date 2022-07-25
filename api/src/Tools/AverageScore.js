module.exports = {
    averageScore : (games) => {
        let stats = {};
        let res = 0;
        let count = 0;
        let wins = 0;
        let time = 0;
        if(games.length > 0){
            games = games.map(p => {
                console.log(p)
                res += p.points
                count++;
                time += parseFloat(p.time);
                if(p.winned === true){
                    wins++;
                }
            });
            let x = Array.of(res/count).toString().split('',4);
            stats.averageScore = parseFloat(x.join(''));
            stats.games = count;
            stats.wins = wins;
            stats.losses = count-wins;
            stats.timePlaying = time;
        } else {
            stats.averageScore = 0;
            stats.games = 0;
            stats.wins = 0;
            stats.losses = 0;
            stats.timePlaying = 0;
        }
        return stats;
    }
};