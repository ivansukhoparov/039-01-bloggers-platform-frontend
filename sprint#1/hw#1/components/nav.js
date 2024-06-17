const navMenuArea = document.querySelector("nav")

export const addMainNav =(navItems)=>{
    const navItemsLinks = navItems.map(el=>{
        return ` <a href="${el[1]}">${el[2]}</a>`
    })
    navMenuArea.innerHTML=`
        ${
        navItemsLinks.join()
    }
`
}
