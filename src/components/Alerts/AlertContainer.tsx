import "./AlertContainer.css"
import { useEffect } from "react"
import { createPortal } from "react-dom"

type Props = {
  show: boolean
  text: string
  onClose: () => void
}

export default function AlertContainer(props: Props) {
  let children = null
  const classes = ["alert-container"]

  useEffect(() => {
    if (props.show) setTimeout(() => props.onClose(), 3000)
  }, [props.show])

  if (props.show) {
    classes.push("show")
    children = <div className={classes.join(" ")}>{props.text}</div>
  }

  return createPortal(
    children,
    document.getElementById("app-alerts") || document.body
  )
}
