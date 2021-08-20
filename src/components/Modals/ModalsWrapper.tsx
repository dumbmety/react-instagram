import { useEffect } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  open: boolean
  children: any
}

export default function ModalsWrappers(props: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  let modalChildren = null
  if (props.open) {
    modalChildren = (
      <div>
        <div className="fixed inset-0 bg-black bg-opacity-75 z-40" />
        <div className="fixed inset-0 z-50 grid place-items-center">
          {props.children}
        </div>
      </div>
    )
  }

  return createPortal(
    modalChildren,
    document.querySelector('#app-modals') || document.body
  )
}
