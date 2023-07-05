import { Stack } from "expo-router";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default () => {
    return (<>
        <Stack screenOptions={{
            statusBarTranslucent: true,
            header: Header
        }} />
        <Footer />
    </>)
}