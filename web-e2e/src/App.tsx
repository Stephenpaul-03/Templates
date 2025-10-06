import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"
import FunctionTesterCard from "./netlify_test_script"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="flex min-h-svh flex-col items-center justify-center">
      <ModeToggle/>
      <FunctionTesterCard/>
    </div>
    </ThemeProvider>
  )
}

export default App