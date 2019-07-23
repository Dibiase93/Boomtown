//actions
const UPDATE_ITEM = "UPDATE_ITEM";
const RESET_ITEM = "RESET_ITEM";
const RESET_ITEM_IMAGE = "RESET_ITEM_IMAGE";

//action creator
export const updateItem = item => ({
  type: UPDATE_ITEM,
  payload: item
});

export const resetItem = () => ({
  type: RESET_ITEM
});

export const resetItemImage = () => ({
  type: RESET_ITEM_IMAGE
});

//initial state
const initialState = {
  title: "Name your item",
  description: "Describe your item",
  created: new Date(),
  itemowner: {},
  tags: [],
  imageurl: "http://via.placeholder.com/350x250?text=Please select an image"
};

//reducer
export default (
  state = {
    initialState
  },
  action
) => {
  switch (action.type) {
    case UPDATE_ITEM: {
      return {
        ...state,
        ...action.payload
      };
    }

    case RESET_ITEM: {
      return {
        ...initialState
      };
    }

    case RESET_ITEM_IMAGE: {
      return {
        ...state,
        imageurl: initialState.imageurl
      };
    }

    default: {
      return initialState;
    }
  }
};
