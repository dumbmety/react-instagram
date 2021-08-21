import './ModalsWrapper.css'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  open: boolean
  children: any
}

export default function ModalsWrappers(props: Props) {
  useEffect(() => {
    if (props.open) document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [props.open])

  let modalChildren = null
  if (props.open) {
    modalChildren = (
      <div className="modals-wrapper">
        <div className="overlay" />
        <div className="content">{props.children}</div>
      </div>
    )
  }

  return createPortal(
    modalChildren,
    document.querySelector('#app-modals') || document.body
  )
}
