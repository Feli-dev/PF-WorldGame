const ncrypt = require("ncrypt-js");
const ncryptObject = new ncrypt('key');

module.exports = {
    showUsers: (user, averageScore) => {
        return {
            id:user.id,
            name: user.name,
            username: user.username,
            password: ncryptObject.decrypt(user.password),
            country: user.country,
            email: user.email,
            points: user.points,
            premium: user.premium,
            state: user.state,
            connect: user.connect,
            authorization: user.authorization,
            avatar: user.avatar,
            friends: user.Friends,
            reviews: user.reviews,
            payment: user.payment,
            games: user.games,
            stats: averageScore,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        };
    }
}