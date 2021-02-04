export const initialState = {
    basket: [],
    userData: { user: undefined },
    user: null,
    alert1: false,
    alert2: false,
    menuOn: false
}


export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        case "USERDATA":
            return {
                ...state,
                userData: { user: action.user1 }
            };
        case "MENUON":
            return {
                ...state,
                menuOn: action.menuOn1
            };
        case "ALERT1":
            return {
                ...state,
                alert1: action.alert1
            };
        case "ALERT2":
            return {
                ...state,
                alert2: action.alert2
            };

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                )
            }
            return {
                ...state,
                basket: newBasket
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer