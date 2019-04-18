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





	new Init(settings);
})();
