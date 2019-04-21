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



	class Search {
		constructor({ table, elemSearch }) {
			this._table = table;
			this._elem = elemSearch;

			this._search();
		}

		_search() {
			const [text, button] = this._elem.querySelectorAll('input');

			button.addEventListener('click', () => {
				const tbody = this._table.querySelector('tbody');
				const tr = tbody.querySelectorAll('tr');
				// console.log('_search', tbody);

				tr.forEach(elem => {
					if (elem.innerText.toLowerCase().indexOf(text.value) === -1) {
						elem.classList.add('hide');
					}
				});
			});
		}
	}

	class AddOptionally {
		constructor({ table, infoRus, elemOptionally }) {
			this._table = table;
			this._infoRus = infoRus;
			this._elem = elemOptionally;

			this._option();
		}

		_option() {
			this._table.querySelector('tbody').addEventListener('click', event => {
				const elems = event.path[1].querySelectorAll('td');
				let result = '';

				elems.forEach(elem => {
					result += `<i>${this._infoRus[elem.dataset.name]}</i> <b>${elem.innerHTML}</b><br>`;
				});

				this._elem.innerHTML = result;
			});
		}
	}

	class Sort {
		constructor({ table }) {
			this._table = table;
			console.log('Sort', table);
			this._sort();
		}

		_sort() {
			this._table.querySelector('thead').addEventListener('click', event => {
				this._getSort(event);
			});
		}

		_getSort({ target }) {
			const order = (target.dataset.order = -(target.dataset.order || -1));
			const index = [...target.parentNode.cells].indexOf(target);
			const collator = new Intl.Collator(['en', 'ru'], { numeric: true });




		}
	}


	class Preloader {
		constructor(settings) {
			this._isLoading = settings.isLoading;
			this._loadElem = settings.load;
			this._parent = settings.elemPreloader;
			settings.isLoading = !this._isLoading;

			this._toggle();
		}

		_toggle() {
			!this._isLoading ? (this._parent.innerHTML = this._loadElem) : (this._parent.innerHTML = '');
		}
	}







	class CreateElement {
		constructor(name, secondArg) {
			this._name = name;
			this._secondArg = secondArg;
			this._elem = this._make();
		}

		_make() {
			let elem = document.createElement(this._name);
			if (this._secondArg && this._name === 'button') {
				elem.innerHTML = this._secondArg;
			}
			return elem;
		}

		get = () => this._elem;
	}

	new Init(settings);
})();
