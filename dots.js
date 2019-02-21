(function dots() {

    // const dots = document.querySelector('#dots');

    const settings = {

        dots: document.querySelector('#dots'),
        row: 30,
        col: 30,
        table_class: {
            table: 'dots__table',
            row: 'dots__tr',
            col: 'dots__td'
        },
        gamers: {
            gamer1: 'gamer1',
            gamer2: 'gamer2'

        },
        occupied: 'occupied',
        win: 'win',
        win_text: 'Победа'

    };












    const game = new Game(settings.dots, settings.row, settings.col);

})();   