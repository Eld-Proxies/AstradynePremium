document.addEventListener('DOMContentLoaded', () => {
  const appsList = [
    {
      name: 'Amazon',
      link: 'https://amazon.com/',
      image: '/assets/media/icons/apps/amazon.png',
      categories: ['all', 'media'],
    },
    {
      name: 'Chat GPT',
      link: 'https://chat.openai.com',
      image: 'data:image/png;base64,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',
      categories: ["all, 'cloud']
    {
      name: 'Discord',
      link: 'https://canary.discord.com',
      image: '/assets/media/icons/apps/discord.jpg',
      categories: ['all', 'social'],
    },
    {
      name: 'Geforce NOW',
      link: 'https://play.geforcenow.com',
      image: '/assets/media/icons/apps/geforce-now.png',
      categories: ['all', 'stream', 'cloud'],
    },
    {
      name: 'Google',
      link: 'https://google.com',
      image: '/assets/media/icons/apps/google.png',
      categories: ['all', 'media'],
    },
    {
      name: 'Messenger',
      link: 'https://messenger.com/',
      image: '/assets/media/icons/apps/messenger.png',
      categories: ['all', 'social', 'message'],
    },
    {
      name: 'Tiktok',
      link: 'https://tiktok.com',
      image: '/assets/media/icons/apps/tiktok.png',
      categories: ['all', 'social', 'media'],
    },
    {
      name: 'Tumblr',
      link: 'https://tumblr.com/',
      image: '/assets/media/icons/apps/tumblr.png',
      categories: ['all', 'social'],
    },
    {
      name: 'Twitch',
      link: 'https://twitch.tv',
      image: '/assets/media/icons/apps/twitch-tv.png',
      categories: ['all', 'stream', 'media'],
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com',
      image: '/assets/media/icons/apps/twitter.png',
      categories: ['all', 'social', 'media'],
    },
    {
      name: 'YouTube',
      link: 'https://youtube.com',
      image: '/assets/media/icons/apps/yt.png',
      categories: ['all', 'social', 'stream', 'media'],
    },
    {
      name: 'Whatsapp',
      link: 'https://web.whatsapp.com/',
      image: '/assets/media/icons/apps/whatsapp.png',
      categories: ['all', 'message', 'social'],
    },
    {
      name: 'Discord - Login',
      link: 'https://canary.discord.com/login',
      image: '/assets/media/icons/discord.jpg',
      categories: ['all', 'social'],
      blank: 'true',
    },
    {
      name: 'HD Today',
      link: 'https://hdtoday.tv',
      image: '/assets/media/icons/hd.png',
      categories: ['all', 'media', 'stream'],
    },
  ]

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

    if (app.local) {
      link.onclick = function () {
        if (typeof app.say !== 'undefined') {
          alert(app.say)
        }
        window.location.href = app.link
        return false
      }
    } else if (app.blank) {
      link.onclick = function () {
        if (typeof app.say !== 'undefined') {
          alert(app.say)
        }
        blank(app.link)
        return false
      }
    } else if (app.now) {
      link.onclick = function () {
        if (typeof app.say !== 'undefined') {
          alert(app.say)
        }
        now(app.link)
        return false
      }
    } else {
      link.onclick = function () {
        if (typeof app.say !== 'undefined') {
          alert(app.say)
        }
        go(app.link)
        return false
      }
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
  console.log('appsContainer:', appsContainer)
  console.log('pinnedApps:', pinnedApps)
  console.log('nonPinnedApps:', nonPinnedApps)

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
