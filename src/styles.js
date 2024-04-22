const body = document.getElementsByTagName('body')
const navLink = document.getElementsByTagName('a')

export function changeBgImage(pathname){
  switch(pathname){
    case '/universe':
      body[0].style.backgroundImage = `url('../assets/universe-bg.svg')`
      navLink[1].style.color = '#fff'
      navLink[1].style.fontWeight = 'bold'
      break
    case '/exploration':
      body[0].style.backgroundImage = `url('../assets/explorer-bg.svg')`
      navLink[2].style.color = '#fff'
      navLink[2].style.fontWeight = 'bold'
      break
    default:
      body[0].style.backgroundImage = `url('./assets/main-bg.svg')`
      navLink[0].style.color = '#fff'
      navLink[0].style.fontWeight = 'bold'
      break
  }
}

console.log(navLink)