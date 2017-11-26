let tagsSeason = {

    spring: 'sunny',
    summer: 'hot',
    autumn: 'rainy',
    winter: 'snowy',
}

function getRandomItem () {
    let randomIntem = Math.floor(Math.random() * (blocks.items.length));

    return blocks.items[randomIntem];
    
}