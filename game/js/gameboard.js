let gameboard =
    {
        boards: [
            {
                season: "winter",
                className: "winter-board"
            },
            {
                sesaon: "spring",
                className: "spring-board"
            },
            {
                season: "summer",
                className: "summer-board"
            },
            {
                season: "autumn",
                className: "autumn-board"
            }
        ],
        getRandomBoard: function () {
            let randomBoard = Math.floor(Math.random() * (gameboard.boards.length));

            return gameboard.boards[randomBoard];
        }
    };

