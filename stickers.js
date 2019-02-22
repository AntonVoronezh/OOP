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







    new Notes();

})();