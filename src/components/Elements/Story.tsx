type Status = "unseen" | "seen"
type Props = {
  status: Status
  src: string
  text: string
  size: number | string
}

export default function Story(props: Props) {
  const containerClasses = ["p-0.5 rounded-full"]

  if (props.status === "seen") containerClasses.push("bg-gray-200")
  else if (props.status === "unseen")
    containerClasses.push("bg-gradient-to-tr from-yellow-400 to-fuchsia-600")
  else containerClasses.push("bg-transparent")

  return (
    <div className={containerClasses.join(" ")}>
      <div
        className="bg-white p-0.5 rounded-full"
        style={{ width: props.size, height: props.size }}
      >
        <img
          className="w-full h-full object-cover rounded-full"
          src={`/img/${props.src}`}
          alt={props.text}
        />
      </div>
    </div>
  )
}
