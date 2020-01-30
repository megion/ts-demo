import {
  ChatState,
  SEND_MESSAGE,
  DELETE_MESSAGE,
  ChatActionTypes,
} from "./types"

const initialState: ChatState = {
  messages: [],
}

export function chatReducer(
  state = initialState,
  action: ChatActionTypes,
): ChatState {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        messages: [...state.messages, action.payload.message],
      }
    case DELETE_MESSAGE:
      return {
        messages: state.messages.filter(
          message => message.timestamp !== action.payload.meta.timestamp,
        ),
      }
    default:
      return state
  }
}
