import HeroText from "./components/HeroText";
import { useTheme } from "./hooks/useTheme";

function App() {
    const { theme, handleThemeChange } = useTheme();
    return (
        <>
            <HeroText />
        </>
    );
}

export default App;
