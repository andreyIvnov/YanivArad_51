import { v4 as uuidv4 } from 'uuid'

const initialState = {
    deleteFromFb: [],
    cars: []
}


const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CAR": {
            if (!action.payload.model) {
                return state;
            }
            return { ...state, cars: [...state.cars, {...action.payload, id: uuidv4()}] };
        }

        case "SET_CARS_ONLOAD": {
            return { ...state, cars: action.payload }
        }

        case "DELETE_CAR": {
            const carToDeleteFromFb = state.cars.find((car) => car.id === action.payload && car.source === 'fb');
            if (carToDeleteFromFb) {
                state.deleteFromFb = [...state.deleteFromFb, carToDeleteFromFb]
            }
            const cars = state.cars.filter((car) => car.id !== action.payload);
            return { ...state, cars };
        }

        default:
            return state;
    }
}

export default carsReducer