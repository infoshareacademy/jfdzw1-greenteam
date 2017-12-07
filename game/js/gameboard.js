

let tags = {
    sunny: 'sunny',
    windy: 'windy',
    hot: 'hot',
    snowy: 'snowy',
    rainy: 'rainy',
    cloudy: 'cloudy',
    cold: 'cold'
}


let blocks = {
    items: [{
        tags: [tags.sunny, tags.hot],
        className: 'spring-board'
    }, {
        tags: [tags.sunny, tags.windy],
        className: 'summer-board'
    }, {
        tags: [tags.cloudy, tags.rainy],
        className: 'autumn-board'
    }, {
        tags: [tags.snowy, tags.cold],
        className: 'winter-board'
    }],
    getRandomItem: function getRandomItem () {
        let randomIntem = Math.floor(Math.random() * (blocks.items.length));

        return blocks.items[randomIntem];
    }
}

let gameboard =
    {
        boards: [
            {
                tag: "winter",
                className: "winterboard"
            },
            {
                tag: "spring",
                className: "springboard"
            },
            {
                tag: "summer",
                className: "summerboard"
            },
            {
                tag: "autumn",
                className: "autumboard"
            }
        ],
        getRandomBoard: function () {
        }
    };

