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


    class Dot {

        constructor(argElem, argObjForElems, argQueue) {

            console.log('Dot');

            this._elem = argElem;

            this._queue = argQueue;

            this._coordinates = new Revision(this._elem).getCoordinates();

            // console.log('_coordinates', this._coordinates);

            argObjForElems.addDot(this._elem, this._coordinates);

            this._makeColor();

        }

        _makeColor() {

            if (!this._elem.classList.contains(settings.occupied)) {

                let cl = this._queue.getNextGamer();

                this._elem.classList.add(cl);

                this._elem.classList.add(settings.occupied);

            }

        }




    };

    class Queue {

        constructor() {

            this._num = 0;

            this._arr = settings.gamers;

        }

        _changeNum() {

            let count = 0;

            for (let key in this._arr) {

                count += 1;

            }

            this._num += 1;

            if (this._num >= count) {

                this._num = 0;

            }

            // console.log('_changeNum', this._num);

        }

        getNextGamer() {

            // let num = 0;

            this._changeNum();

            return Object.keys(this._arr)[this._num];

            // console.log('arr', Object.keys(this._arr)[this._num]);

        }

    };


    class Dots {







    };






    new Game(settings.dots, settings.row, settings.col);

})();   