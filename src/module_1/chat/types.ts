import { Action } from "redux"

// Describing the shape of the chat's slice of state
export interface Message {
  user: string
  message: string
  timestamp: number
}

export interface ChatState {
  messages: Message[]
}

// Describing the different ACTION NAMES available
export const SEND_MESSAGE = "SEND_MESSAGE"
export const DELETE_MESSAGE = "DELETE_MESSAGE"

export interface SendMessageAction extends Action<typeof SEND_MESSAGE> {
  payload: { message: Message }
}

export interface DeleteMessageAction extends Action<typeof DELETE_MESSAGE> {
  payload: {
    meta: {
      timestamp: number
    }
  }
}

export type ChatActionTypes = SendMessageAction | DeleteMessageAction
