import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "../dev";


function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <Component {...pageProps} />
            </DevSupport>
        </>
    )

}

export default MyApp
