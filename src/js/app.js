import Config from './data/config'
import Main from './app/main'

if (__ENV__ === 'dev') {
  Config.isDev = true
}

function init() {
  new Main()
}

init()
