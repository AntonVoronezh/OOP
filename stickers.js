(function stickers() {

    const settings = {

        notes: document.querySelector('#stickers'),
        sticker: 'sticker',
        sticker_settings: {
            top: 0,
            left: 0
        }

    };


    class Notes {

        constructor() {

            this._objForElems = new Map;

            this._start();

        }

        _start() {

            const mapWork = new MapWork(this._objForElems);

            settings.notes.addEventListener('dblclick', () => {

                // console.log('_start', event.pageX, event.pageY);

                const sticker = new Sticker(mapWork, event.pageX, event.pageY);


            });

        }


    }

    class MapWork {

        constructor(argObjForElems) {

            this._map = argObjForElems;

            this._zIndex = new ZIndex(this._map);

            // this._rightClick();

        }

        console() {

            console.log('_map.size', this._map.size);

            console.log('_num', this._num());

            console.log('_map', this._map);

            console.log('getZIndex', this._zIndex.get());


        }

        addInfo(argInfo) {

            this._setZIndex();

            this._setInfo(argInfo);

            this.console();

        }


        _setInfo(argInfo) {

            this._map.set(this._num(), argInfo);

        }

        _setZIndex() {

            this._zIndex.set(this._num());

        }

        _num() {

            return this._map.size;

        }


    }



    class ZIndex {

        constructor(argMap) {

            // this._stickMap = argMap;

            this._map = new Map;

            // this._num = argNum;

            // this._stickMap.set(100000, this._map);

            this._map.set(0, []);

            // this._stickMap.set(100000, this._map);

            settings.stick_map = this;

            // this._arr = this._map.get(0)

            // this._setZIndex();  


        }


        get() {

            // const arr = this._map.get(0);
            // this.set();

            return this._map.get(0);


        }

        change(argElem) {

            const arr = this._map.get(0);

            let nextNum;

            if (this._getMax(arr) !== Number(argElem.style.zIndex)) {

                nextNum = this._getMax(arr) + 1;

                argElem.style.zIndex = nextNum;

                this.set(nextNum);

            }

            // console.log('change', arr, argElem);

        }

        _getMax(argArr) {

            return Math.max(...argArr);

        }

        set(argNum) {

            const arr = this.get();

            let lastNum;

            // console.log('arr.lenght', arr.length);


            arr.length === 0 ? lastNum = 0 : lastNum = this._getMax(arr) + 1;

            arr.push(lastNum);

            arr[argNum] = lastNum;

            this._map.delete(0);

            this._map.set(0, arr);


        }

    }

    //     let arr = [22,4,7, 0, -9];
    //    console.log(Math.min(...arr));

    class Sticker {

        constructor(argMap, argPageX, argPageY) {

            this._map = argMap;

            this._pageX = argPageX;

            this._pageY = argPageY;

            this._add();

        }

        _add() {

            this._create();

            const arr = this._makeArr();

            this._map.addInfo(arr);

        }


        _create() {

            const elem = document.createElement('textarea');

            elem.classList.add(settings.sticker);

            elem.style.left = `${this._pageX}px`;

            elem.style.top = `${this._pageY}px`;

            elem.draggable = "true";

            this._changePosition(elem);

            this._rightClick(elem);

            this._focus(elem);

            this._blur(elem);


            settings.notes.appendChild(elem);

            elem.focus();

            // console.log('_create', elem);



        }

        _changePosition(argElem) {

            let offsetX, offsetY;

            argElem.addEventListener('dragstart', () => {

                offsetX = event.offsetX;

                offsetY = event.offsetY;

            });

            argElem.addEventListener('dragend', () => {

                argElem.style.top = `${event.pageY - offsetY}px`;

                argElem.style.left = `${event.pageX - offsetX}px`;

                argElem.blur();

            });




        }



    



    }


    new Notes();

})();