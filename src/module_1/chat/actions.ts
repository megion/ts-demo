import {
  Message,
  SEND_MESSAGE,
  DELETE_MESSAGE,
  SendMessageAction,
  DeleteMessageAction,
} from "./types"

// action creators
export function sendMessage(newMessage: Message): SendMessageAction {
  return {
    type: SEND_MESSAGE,
    payload: {message: newMessage},
  }
}

export function deleteMessage(timestamp: number): DeleteMessageAction {
  return {
    type: DELETE_MESSAGE,
    payload: {meta: {timestamp}}
  }
}
