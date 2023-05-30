export const ErrorComponent = ({status, msg}) => {
    return (
        <main>
            <h1>{status}</h1>
            <h2>{msg}</h2>
        </main>
    )
}