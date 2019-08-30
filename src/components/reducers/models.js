const initialState = [
    {
        name: 'Users',
        icon: 'people',
        path: '/users',
        fields: [
            'id',
            'name',
            'email',
            'username',
        ],
        datas: [
            {
                id: 1,
                name: 'Amir',
                email : 'amir@gmail.com',
                username: 'amir'
            }
        ]
    }
]

export const modelsReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_MODEL':
            action.payload.datas = [];
            console.log(action.payload);
            return [...state, action.payload];
        case 'ADD_DATA_MODEL':
            const payload = action.payload;
            let models = state.filter((model) => {
                return model.name !== payload.model
            });
            let model = state.filter((model) => {
                return model.name === payload.model
            });
            model = model[0];
            model.datas = [...model.datas, payload.data];
            models.push(model);
            return models;
        default:
            return state;
    }
};