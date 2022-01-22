export default function Backdrop({ show }: { show: boolean }) {
  return show ? (
    <div className="fixed inset-0 w-full h-full z-10 bg-transparent" />
  ) : null
}
