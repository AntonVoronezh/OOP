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






    }



    new Notes();

})();