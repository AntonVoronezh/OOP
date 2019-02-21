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

            const elem = settings.table;

            const allDots = new Dots();

            const queue = new Queue();

            elem.addEventListener('click', () => {

                if (event.target.classList.contains(settings.table_class.col)) {

                    if (!this._endGame) {

                        new Dot(event.target, allDots, queue);

                    }
                }

            });

        }

        end(argGamer) {

            this._endGame = true;

            settings.table.firstChild.classList.add(settings.win);

            settings.table.firstChild.innerHTML = settings.win_text + ' ' + argGamer;

        }

    };










    const game = new Game(settings.dots, settings.row, settings.col);

})();   