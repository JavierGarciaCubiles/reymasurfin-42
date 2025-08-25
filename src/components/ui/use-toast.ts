
import * as React from "react"
import { useCallback, useEffect, useState } from "react"
import { useIsomorphicLayoutEffect } from "@/hooks/use-isomorphic-layout-effect"

import { ToastActionElement, ToastProps } from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

type ActionType = typeof actionTypes

type ToastAction =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  toastTimeouts.set(
    toastId,
    setTimeout(() => {
      toastState.dispatch({
        type: actionTypes.REMOVE_TOAST,
        toastId: toastId,
      })
    }, TOAST_REMOVE_DELAY)
  )
}

export const reducer = (state: State, action: ToastAction): State => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case actionTypes.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case actionTypes.DISMISS_TOAST: {
      const { toastId } = action
      // ! Side effects ! - This could be extracted into a middleware.
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case actionTypes.REMOVE_TOAST:
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const DEFAULT_STATE: State = {
  toasts: [],
}

const ToastContext = React.createContext<{
  ...State
  dispatch: React.Dispatch<ToastAction>
}>({
  ...DEFAULT_STATE,
  dispatch: () => {},
})

type ToastProviderProps = {
  children: React.ReactNode
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [state, dispatch] = React.useReducer(reducer, DEFAULT_STATE)
  const value = React.useMemo(
    () => ({
      ...state,
      dispatch,
    }),
    [state, dispatch]
  )

  return React.createElement(ToastContext.Provider, { value }, children)
}

export function useToast() {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

function genId() {
  return Math.random().toString(36).substr(2, 9)
}

export const toast = (
  { ...props }: ToastProps & { id?: string }
) => {
  const id = props.id ?? genId()

  toastState.dispatch({
    type: actionTypes.ADD_TOAST,
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) {
          toastState.dispatch({
            type: actionTypes.DISMISS_TOAST,
            toastId: id,
          })
        }
      },
    },
  })
}

let count = 0

const TOAST_LIMIT2 = 2

const toasts: {
  title: string
  variant: "default" | "destructive"
}[] = []

export const useToast2 = () => {
  const [mounted, setMounted] = useState(false)

  useIsomorphicLayoutEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) {
      return undefined
    }

    const handleAddToast = () => {
      count = (count + 1) % 10

      const newToast = {
        title: `Scheduled Check ${count + 1}`,
        variant: count % 2 === 0 ? "default" : "destructive",
      }

      toasts.unshift(newToast)
    }

    const intervalId = setInterval(handleAddToast, 3000)

    return () => clearInterval(intervalId)
  }, [mounted])

  return {
    toasts,
  }
}

let toastState: {
  state: State
  dispatch: React.Dispatch<ToastAction>
}

export const useToast3 = () => {
  const [state, dispatch] = React.useReducer(reducer, DEFAULT_STATE)

  toastState = { state, dispatch }

  return {
    ...toastState,
    toast,
  }
}
