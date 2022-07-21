
let tools = {};

tools.averageScore = (games) => {
    let res = 0;
    let count = 0;
    if(games.length > 0){
        games = games.map(p => {
            res += p.points
            count++;
        });
        return res/count;
    }
    return 0;
};

module.exports = tools;