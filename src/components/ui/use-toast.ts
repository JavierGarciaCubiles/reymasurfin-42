
import * as React from "react"
import { useCallback, useEffect, useState } from "react"

type ToasterToast = {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactElement
  variant?: "default" | "destructive"
  duration?: number
}

type ToastAction = {
  type: "ADD_TOAST" | "UPDATE_TOAST" | "DISMISS_TOAST" | "REMOVE_TOAST"
  toast?: ToasterToast
  toastId?: string
}

type State = {
  toasts: ToasterToast[]
}

const DEFAULT_STATE: State = {
  toasts: [],
}

const reducer = (state: State, action: ToastAction): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast!, ...state.toasts].slice(0, 1),
      }
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast!.id ? { ...t, ...action.toast } : t
        ),
      }
    case "DISMISS_TOAST": {
      const { toastId } = action
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
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const ToastContext = React.createContext<{
  toasts: ToasterToast[]
  addToast: (toast: Omit<ToasterToast, "id">) => void
  removeToast: (toastId: string) => void
}>({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
})

type ToastProviderProps = {
  children: React.ReactNode
}

const ToastProvider = ({ children }: ToastProviderProps) => {
  const [state, dispatch] = React.useReducer(reducer, DEFAULT_STATE)

  const addToast = useCallback((toast: Omit<ToasterToast, "id">) => {
    const id = Math.random().toString(36).substr(2, 9)
    dispatch({
      type: "ADD_TOAST",
      toast: {
        ...toast,
        id,
      },
    })
  }, [])

  const removeToast = useCallback((toastId: string) => {
    dispatch({
      type: "REMOVE_TOAST",
      toastId,
    })
  }, [])

  const value = React.useMemo(
    () => ({
      toasts: state.toasts,
      addToast,
      removeToast,
    }),
    [state.toasts, addToast, removeToast]
  )

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  )
}

const useToast = () => {
  const context = React.useContext(ToastContext)

  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider")
  }

  return {
    ...context,
    toast: context.addToast,
    dismiss: (toastId?: string) => {
      if (toastId) {
        context.removeToast(toastId)
      }
    },
  }
}

export { useToast, ToastProvider }
export type { ToasterToast }
