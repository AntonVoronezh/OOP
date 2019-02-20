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
        occupied: 'occupied'

    };

    class Game {

        constructor(argParentElem, argRowNum, argColNum) {

            this._endGame = false;

            this._parent = argParentElem;

            this._row = argRowNum;

            this._col = argColNum;

            const game = new Html(this._parent, this._row, this._col).createField();

            this._run();

        }

        _run() {

            console.log('settings', settings);

            const elem = settings.table;

            const allDots = new Dots();

            const queue = new Queue();

            elem.addEventListener('click', (event) => {

                if (event.target.classList.contains(settings.table_class.col)) {

                    // console.log(event.target);

                    new Dot(event.target, allDots, queue);

                    // allDots.addDot(dot);
                    allDots.getObj();

                }

            });



        }


    };










    new Game(settings.dots, settings.row, settings.col);

})();   