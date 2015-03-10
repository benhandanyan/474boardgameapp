## API CONTRACTS

GET /games - return all games ordered alphabetically
GET /games?maxplayers=x - return all games where the maximum number of players is x
GET /games?minplayers=x - return all games where the minimum number of players is x
GET /games?numplayers=x - return all games that can be played with x players
GET /games?rating=x - return all games with an average rating between x and x.99
GET /games?weight=x - return all games with an average weight between x and x.99
GET /games?topten - return the top ten rated games ordered by highest to lowest average rating