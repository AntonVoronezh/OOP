(function stickers() {

    const settings = {

        notes: document.querySelector('#stickers'),
        sticker: 'sticker',
        storage_name: 'stick'

    };

    class Notes {

        constructor() {

            this._start();

        }

        _start() {

            const objForElems = new Map;

            const mapWork = new MapWork(objForElems);

            const zIndex = new ZIndex();

            const storage = new Storage();

            window.addEventListener('load', () => {

                const history = storage.get();

                const install = new Install(mapWork, zIndex, history);

            });

            settings.notes.addEventListener('dblclick', () => {

                new Sticker(mapWork, zIndex, event.pageX, event.pageY);

            });

            window.addEventListener('unload', () => {

                const save = new Save(objForElems, zIndex, storage);

            });

        }

    }

    class MapWork {

        constructor(argObj) {

            this._map = argObj;

        }

        console() {

            // console.log('_map', this._map);
            // console.log('_map.size', this.size());

        }

        add(argStick) {

            this._map.set(this._num(), argStick);

            this.console();

        }

        size() {

            return this._num();

        }

        _num() {

            return this._map.size;

        }

        _for() {

            this._map.forEach((elem, i) => {

                console.log('_for', i, elem);


            });

        }

    }

    class ZIndex {

        constructor() {

            this._map = new Map;

        }

        console() {

            // console.log('_z', this._map);
            // console.log('_z.size', this.size());

        }

        add() {

            if (!this._map.has(this._num())) {

                this._map.set(this._num(), [0]);

            }

            this.console();

        }

        change(argNum) {

            this._map.set(argNum, [this._getNextNum(argNum)]);

            return this._getNextNum(argNum);

        }

        size() {

            return this._num();

        }

        getNum(argNum) {

            return this._map.get(argNum);

        }

        getMin() {

            const arr = this._for();

            arr.length = arr.length - 1;

            return Math.min(...arr);

        }






    }






   

    new Notes();

})();