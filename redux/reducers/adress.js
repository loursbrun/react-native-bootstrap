const defaultState = {
    adress: [{
        key: '0',
        adress_txt: '10 rue de Paris',
        liked: false,
        favorite: false,
        selected: false
    }, {
        key: '1',
        adress_txt: '25 avenue des champs',
        liked: false,
        favorite: false,
        selected: false
    }, {
        key: '2',
        adress_txt: '12 route de grenoble',
        liked: false,
        favorite: false,
        selected: false
    }, {
        key: '3',
        adress_txt: '25 chemin urban soccer',
        liked: false,
        favorite: false,
        selected: false
    }
    ]
};


export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'ADDADRESS':
            return Object.assign({}, state, {
                adress: action.adress
            });
        case 'REMOVEADRESS':
            return Object.assign({}, state, {
                adress: action.adress
            });
        case 'TOGGLEADRESS':
            return Object.assign({}, state, {
                adress: action.adress
            });

        default:
            return state;
    }
}