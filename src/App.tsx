import {ThemeProvider} from "@mui/material";
import {theme} from "./theme";
import QueryProvider from "./provider/QueryProvider.tsx";
import Routes from "./routes";
import {Toaster} from "react-hot-toast";
import UpdaterProvider from "./provider/UpdaterProvider.tsx";


function App() {
    return (
        <ThemeProvider theme={theme}>
            <QueryProvider>
                <UpdaterProvider>
                    <Routes/>
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                </UpdaterProvider>
            </QueryProvider>
        </ThemeProvider>
    )
}

export default App
