class Dropdown {
    constructor(selector, options) {
        this.$el = document.querySelector(selector);
        this.items = options.items;
        this.$el.querySelector('.dropdown__label').textContent = this.items[0].label;

[        this.$el.addEventListener('click', event => {
            if (event.target.classList.contains('dropdown__label')) {
        })
]

    }






};

const dropdown = new Dropdown('#dropdown', {
    items: [{
            label: 'Москва',
            id: 'msk'
        },
        {
            label: 'Санкт-Петербург',
            id: 'spb'
        },
        {
            label: 'Новосибирск',
            id: 'nsk'
        },
        {
            label: 'Краснодар',
            id: 'krdr'
        }
    ]
});