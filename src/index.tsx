import "./index.css"

import { createRoot } from "react-dom/client"
import App from "./containers/App"

const container = document.getElementById("app") as HTMLElement
createRoot(container).render(<App />)
