(function() {
	const settings = {
		elem: document.querySelector('#sort'),
		bigDataPath: 'http://127.0.0.1:5500/data/big.json',
		smallDataPath: 'http://127.0.0.1:5500/data/small.json',
		info: ['id', 'name', 'username', 'email', 'website'],
		infoRus: {
			id: 'Выбран пользователь с ID: ',
			name: 'Его имя: ',
			username: 'Его никнейм: ',
			email: 'Его почта: ',
			website: 'Его сайт: ',
		},
		elemPreloader: document.querySelector('#preloader'),
		isLoading: false,
		load: 'загружаю...',
		elemOptionally: document.querySelector('#optionally'),
		elemSearch: document.querySelector('#search'),
		chunkSize: 50,
	};

	class Init {
		constructor(settings) {
			this._settings = settings;
			this._start();
		}

		_start() {
			const { elem: parent, bigDataPath, smallDataPath } = this._settings;

			const buttonSmall = new CreateElement('button', 'Мало данных').get();
			const buttonBig = new CreateElement('button', 'Много данных').get();

			buttonSmall.addEventListener('click', () => {
				new Clean(parent);
				new Draw(smallDataPath, this._settings);
				new Sort(this._settings);
				new AddOptionally(this._settings);
				new Search(this._settings);
				new Chunk(this._settings);
			});

			buttonBig.addEventListener('click', () => {
				new Clean(parent);
				new Draw(bigDataPath, this._settings);
				new Sort(this._settings);
				new AddOptionally(this._settings);
				new Search(this._settings);
				new Chunk(this._settings);
			});

			parent.appendChild(buttonSmall);
			parent.appendChild(buttonBig);
		}
	}



	class CreateElement {
		constructor(name, secondArg) {
			this._name = name;
			this._secondArg = secondArg;
			this._elem = this._make();
		}

		_make() {
			return elem;
		}
	}

	new Init(settings);
})();
