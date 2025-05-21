"use client"

import { toast as sonnerToast } from "sonner"
import { cn } from "@/lib/utils"
import { 
  CheckCircle,
  AlertCircle,
  InfoIcon,
  AlertTriangle,
  X
} from "lucide-react"

type ToastType = "success" | "error" | "info" | "warning" | "default"

interface ToastProps {
  message: string
  description?: string
  type?: ToastType
  duration?: number
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center"
  dismissible?: boolean
}

const icons = {
  success: <CheckCircle className="h-5 w-5 text-green-500" />,
  error: <AlertCircle className="h-5 w-5 text-red-500" />,
  info: <InfoIcon className="h-5 w-5 text-blue-500" />,
  warning: <AlertTriangle className="h-5 w-5 text-amber-500" />,
  default: null
}

export function toast({
  message,
  description,
  type = "default",
  duration = 5000,
  position = "top-right",
  dismissible = true,
}: ToastProps) {
  return sonnerToast(
    <div className="flex items-start gap-3">
      {icons[type]}
      <div className="flex-1">
        <p className="font-medium">{message}</p>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      {dismissible && (
        <button 
          onClick={() => sonnerToast.dismiss()} 
          className="text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>,
    {
      duration,
      position,
      className: cn(
        "px-4 py-3 rounded-md border shadow-lg",
        type === "success" && "bg-green-50 border-green-200 dark:bg-green-950/30 dark:border-green-800",
        type === "error" && "bg-red-50 border-red-200 dark:bg-red-950/30 dark:border-red-800",
        type === "info" && "bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800",
        type === "warning" && "bg-amber-50 border-amber-200 dark:bg-amber-950/30 dark:border-amber-800",
      )
    }
  )
}

// Example usage:
//
// import { toast } from "@/components/toast"
//
// toast({
//   message: "Successfully saved!",
//   description: "Your changes have been saved successfully.",
//   type: "success"
// })
//
// toast({
//   message: "Error occurred",
//   description: "Could not save changes. Please try again.",
//   type: "error"
// })
