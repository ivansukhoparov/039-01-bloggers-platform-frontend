const headerArea = document.querySelector("header")


export const addMainHeader = (sprint, hw) => {
    headerArea.innerHTML = `
    <h1>BLoggers Platform </h1>
    <h2>Sprint#${sprint} hw#${hw}</h2>
`
}