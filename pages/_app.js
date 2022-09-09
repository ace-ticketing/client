import 'bootstrap/dist/css/bootstrap.css'
// this is how next js applies global styles

export default ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}