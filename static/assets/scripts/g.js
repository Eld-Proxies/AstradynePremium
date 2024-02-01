document.addEventListener('DOMContentLoaded', () => {
  const appsList = [
    {
      name: 'Jelly Mario',
      link: 'https://jellymar.io',
      image: '/assets/media/icons/jellymario.jpg',
      categories: ['all'],
    },
    {
      name: 'Stickman Hook',
      link: '/y/stickman-hook/index.html',
      image: '/assets/media/icons/stickmanhook.jpg',
      categories: ['all', 'local'],
      local: 'true',
    },
    {
      name: 'Candy Jump',
      link: 'https://candyjump.games235.com/',
      image: '/assets/media/icons/candyjump.jpg',
      categories: ['all'],
    },
    {
      name: 'Google Feud',
      link: 'https://googlefeud.com/',
      image: '/assets/media/icons/googlefeud.png',
      categories: ['all'],
    },
    {
      name: 'Jetpack Joyride',
      link: '/y/jetpack-joyride/index.html',
      image: '/assets/media/icons/jetpackjoyride.png',
      categories: ['all', 'local'],
      local: 'true',
    },
    {
      name: 'Fireboy And Watergirl 2 In The Light Temple',
      link: 'https://www.coolmathgames.com/sites/default/files/public_games/40210/',
      image: '/assets/media/icons/fireboyandwatergirllighttemple.jpg',
      categories: ['all', '2P'],
    },
    {
      name: 'Fireboy And Watergirl 4 In The Crystal Temple',
      link: 'https://www.coolmathgames.com/sites/default/files/public_games/40212/',
      image: '/assets/media/icons/fireboyandwatergirlcrystaltemple.jpg',
      categories: ['all', '2P'],
    },
    {
      name: 'Fireboy And Watergirl 5: Elements',
      link: 'https://www.coolmathgames.com/sites/default/files/public_games/40218',
      image: '/assets/media/icons/fireboyandwatergirlelements.jpg',
      categories: ['all', '2P'],
    },
    {
      name: 'Fireboy And Watergirl 6: Fairy Tales',
      link: 'https://html5.gamedistribution.com/rvvASMiM/be3cff113c4e4f069b7614851825ffe9/index.html',
      image: '/assets/media/icons/fireboyandwatergirlfairytales.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'Fireboy And Watergirl In The Forest Temple',
      link: 'https://www.coolmathgames.com/sites/default/files/public_games/40034/',
      image: '/assets/media/icons/fireboyandwatergirlfairytales.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'Duck Life 1',
      link: 'https://www.hoodamath.com/mobile/games/duck-life/game.html',
      image: '/assets/media/icons/ducklife.webp',
      categories: ['all'],
    },
    {
      name: 'Duck Life 2',
      link: 'https://www.hoodamath.com/mobile/games/duck-life-2-world-champion/game.html',
      image: '/assets/media/icons/ducklife.webp',
      categories: ['all'],
    },
    {
      name: 'Duck Life 3',
      link: 'https://www.hoodamath.com/mobile/games/duck-life-3-evolution/game.html',
      image: '/assets/media/icons/ducklife.webp',
      categories: ['all'],
    },
    {
      name: 'Duck Life 4',
      link: 'https://www.hoodamath.com/mobile/games/duck-life-4/game.html',
      image: '/assets/media/icons/ducklife.webp',
      categories: ['all'],
    },
    {
      name: 'Run 3',
      link: 'https://www.coolmathgames.com/0-run-3/play',
      image: '/assets/media/icons/run3.png',
      categories: ['all,', 'flash'],
    },
    {
      name: 'Subway Surfers: San Francisco ',
      link: 'https://raw.githack.com/3kh0/3kh0-assets/main/subway-surfers/index.html',
      image: '/assets/media/icons/SF.webp',
      categories: ['all,', 'emu'],
    },
    {
      name: 'Super Mario Bros',
      link: 'http://topoi.pooq.com/hendrik/notmine/FullScreenMario/mario.html',
      image: '/assets/media/icons/SMB.jpg',
      categories: ['all,', 'emu'],
    },
    {
      name: 'Survivor.io',
      link: 'https://html5.gamedistribution.com/rvvASMiM/f1c451e586c04b4c8cba01b0c50d9090/index.html',
      image: '/assets/media/icons/SVI.png',
      categories: ['all,', 'emu'],
    },
    {
      name: 'Web Retro',
      link: 'https://binbashbanana.github.io/webretro/',
      image: '/assets/media/icons/webretro.png',
      categories: ['all,', 'emu'],
    },
    {
      name: 'Slope',
      link: 'https://watchdocumentaries.com/wp-content/uploads/games/slope/',
      image: '/assets/media/icons/slope.webp',
      categories: ['all'],
    },
    {
      name: '1',
      link: 'https://hgentry.github.io/1/',
      image: '/assets/media/icons/1.webp',
      categories: ['all'],
    },
    {
      name: '1v1.LOL',
      link: 'https://1v1lol.me',
      image: '/assets/media/icons/1v1-lol.webp',
      categories: ['all,', '2P'],
    },
    {
      name: '3D Dino Game',
      link: 'https://lagged.com/api/play2/t-rex-3d2/',
      image: '/assets/media/icons/trex-run-3D.webp',
      categories: ['all'],
    },
    {
      name: 'Basketball Stars',
      link: 'https://html5.gamedistribution.com/69d78d071f704fa183d75b4114ae40ec/',
      image: '/assets/media/icons/basketball-stars.webp',
      categories: ['all'],
    },
    {
      name: 'Basketball Bros',
      link: 'https://www.basketbros.io/',
      image: '/assets/media/icons/basket-bros.webp',
      categories: ['all'],
    },
    {
      name: 'Basketball Legends',
      link: 'https://www.basketballlegends.fun/gamedata/basketball-legends-2020',
      image: '/assets/media/icons/basketball-legends.webp',
      categories: ['all'],
    },
    {
      name: 'Cookie Clicker',
      link: 'https://orteil.dashnet.org/cookieclicker/',
      image: '/assets/media/icons/cookieclicker.webp',
      categories: ['all'],
    },
    {
      name: 'Crossy Road',
      link: 'https://5dd2e1e3-015f-11ea-ad56-9cb6d0d995f7.poki-gdn.com/169dc11d-e718-4b36-9e60-d5ed5bc07a31/index.html',
      image: '/assets/media/icons/cr.webp',
      categories: ['all'],
    },
    {
      name: 'Doge Miner 1',
      link: 'https://dogeminer.se/',
      image: '/assets/media/icons/doge-miner-1.webp',
      categories: ['all'],
    },
    {
      name: 'Drift Boss',
      link: 'https://watchdocumentaries.com/wp-content/uploads/games/drift-boss/',
      image: '/assets/media/icons/db.webp',
      categories: ['all'],
    },
    {
      name: 'Moto X3M',
      link: 'https://html5.gamedistribution.com/rvvASMiM/5b0abd4c0faa4f5eb190a9a16d5a1b4c/index.html',
      image: '/assets/media/icons/mx3m.webp',
      categories: ['all'],
    },
    {
      name: 'MX3M: Pool Party',
      link: 'https://h0jokl1egt0fd4oc8qv3j0tltl9jbqhn-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://649025137-174029463385024710.preview.editmysite.com/uploads/b/139890129-767696982876512205/files/mx3mpp.xml',
      image: '/assets/media/icons/mx3m.webp',
      categories: ['all'],
    },
    {
      name: 'MX3M: Spooky Land',
      link: 'https://html5.gamedistribution.com/rvvASMiM/b8a342904608470a9f3382337aca3558/index.html',
      image: '/assets/media/icons/mx3m-spooky.webp',
      categories: ['all'],
    },
    {
      name: 'MX3M: Winter',
      link: 'https://www-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://sites.google.com/site/s017q3e/moto-x3m-4-winter.xml',
      image: '/assets/media/icons/mx3m-winter.webp',
      categories: ['all'],
    },
    {
      name: 'OvO',
      link: 'https://8rlfg0ch3417et18dp8lvps6uo7c3b2c-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://427396048-642845047394716217.preview.editmysite.com/uploads/b/139890129-761103484729797659/files/ovo.xml',
      image: '/assets/media/icons/ovo.webp',
      categories: ['all'],
    },
    {
      name: 'Minecraft',
      link: 'https://swordslasher.com/games/minecraft1811/',
      image: '/assets/media/icons/mc.webp',
      categories: ['all', '2P', 'emu'],
      local: 'true',
    },
    {
      name: 'Getaway Տhοоtоսt',
      link: 'https://www.twoplayergames.org/embed/getaway-shootout',
      image: '/assets/media/icons/getaway.webp',
      categories: ['all', '2P'],
    },
    
  ]

  function saveToLocal(path) {
    localStorage.setItem('savedPaths', path)
  }

  appsList.sort((a, b) => a.name.localeCompare(b.name))

  const nonPinnedApps = document.querySelector('.container-apps')
  const pinnedApps = document.querySelector('.pinned-apps')
  var pinList = localStorage.getItem('pinnedGames')
  try {
    pinList = pinList.split(',').map(Number)
  } catch {}
  var appInd = 0
  appsList.forEach((app) => {
    let pinNum = appInd
    const columnDiv = document.createElement('div')
    columnDiv.classList.add('column')
    columnDiv.setAttribute('data-category', app.categories.join(' '))

    const pinIcon = document.createElement('i')
    pinIcon.classList.add('fa')
    pinIcon.classList.add('fa-map-pin')
    pinIcon.ariaHidden = true

    const btn = document.createElement('button')
    btn.appendChild(pinIcon)
    btn.style.float = 'right'
    btn.style.backgroundColor = 'rgb(45,45,45)'
    btn.style.borderRadius = '50%'
    btn.style.borderColor = 'transparent'
    btn.style.color = 'white'
    btn.style.top = '-200px'
    btn.style.position = 'relative'
    btn.onclick = function () {
      setPin(pinNum)
    }
    btn.title = 'Pin'

    const link = document.createElement('a')

    function handleClick(app) {
      if (typeof app.say !== 'undefined') {
        alert(app.say)
      }

      if (app.local) {
        saveToLocal(app.link)
        window.location.href = app.link
      } else if (app.localW) {
        saveToLocal(app.link)
        window.location.href = '/w'
      } else if (app.blank) {
        blank(app.link)
      } else if (app.now) {
        now(app.link)
      } else {
        go(app.link)
      }

      return false
    }

    link.onclick = function () {
      handleClick(app)
    }

    const image = document.createElement('img')
    image.width = 145
    image.height = 145
    image.src = app.image
    image.loading = 'lazy'

    const paragraph = document.createElement('p')
    paragraph.textContent = app.name
    if (app.error) {
      paragraph.style.color = 'red'
    }

    link.appendChild(image)
    link.appendChild(paragraph)
    columnDiv.appendChild(link)
    if (appInd != 0) {
      columnDiv.appendChild(btn)
    }

    if (pinList != null && appInd != 0) {
      if (pinContains(appInd, pinList)) {
        pinnedApps.appendChild(columnDiv)
      } else {
        nonPinnedApps.appendChild(columnDiv)
      }
    } else {
      nonPinnedApps.appendChild(columnDiv)
    }
    appInd++
  })
  appsContainer.appendChild(pinnedApps)
  appsContainer.appendChild(nonPinnedApps)
})
function setPin(index) {
  pins = localStorage.getItem('pinnedGames')
  if (pins == null) {
    pins = []
  }
  if (pins == '') {
    pins = []
  } else {
    pins = pins.split(',').map(Number)
  }
  if (pinContains(index, pins)) {
    let remove = pins.indexOf(index)

    pins.splice(remove, 1)
  } else {
    pins.push(index)
  }
  localStorage.setItem('pinnedGames', pins)
  location.reload()
}
function pinContains(i, p) {
  if (p == '') {
    return false
  }
  for (var x = 0; x < p.length; x++) {
    if (p[x] === i) {
      return true
    }
  }
  return false
}

function show_category() {
  var selectedCategories = Array.from(document.querySelectorAll('#category option:checked')).map(
    (option) => option.value
  )
  var games = document.getElementsByClassName('column')

  for (var i = 0; i < games.length; i++) {
    var game = games[i]
    var categories = game.getAttribute('data-category').split(' ')

    if (selectedCategories.length === 0 || selectedCategories.some((category) => categories.includes(category))) {
      game.style.display = 'block'
    } else {
      game.style.display = 'none'
    }
  }
}

function search_bar() {
  var input = document.getElementById('searchbarbottom')
  var filter = input.value.toLowerCase()
  var games = document.getElementsByClassName('column')

  for (var i = 0; i < games.length; i++) {
    var game = games[i]
    var name = game.getElementsByTagName('p')[0].textContent.toLowerCase()

    if (name.includes(filter)) {
      game.style.display = 'block'
    } else {
      game.style.display = 'none'
    }
  }
}
