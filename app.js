const navToggle = document.querySelector('.nav-toggle')
const asideBar = document.querySelector('.aside')
const asideCancel = document.querySelector('.aside-cancel')
const menu = document.querySelector('.main')
navToggle.addEventListener('click', function () {

  asideBar.classList.add('show-sidebar')
  menu.classList.add('trim')
})
asideCancel.addEventListener('click', function () {
  asideBar.classList.remove('show-sidebar')
  menu.classList.remove('trim')
})


const secs = document.querySelectorAll('.sec')
const asideLink = document.querySelectorAll('.aside-link')


asideLink.forEach(function (link) {
  link.addEventListener('click', function (e) {
    let id = e.target.dataset.id
    let bodyWidth = window.screen.width

    if (id) {
      const currSec = document.getElementById(id)
      secs.forEach(function (sec) {
        sec.classList.remove('active')
      })

      currSec.classList.add('active')
      if (bodyWidth < 990) {
        asideBar.classList.remove('show-sidebar')
      }
      
    }

  })
})


function getElement(selector) {
  const id = document.querySelector(selector)
  if (id) {
    return id
  } else {
    throw `error please check ${selector} does not e3xist`
  }
}



function display (sect, foodarray) {
  self = this
  this.element = sect
  this.foodarray = foodarray
  this.sectionContainer = this.element.querySelector('.menu-container')
  this.video = this.element.querySelector('.video-container')
  this.asideLink = document.querySelector('.aside')
  this.btnContainer = this.element.querySelector('.btn-container')
  this.playBtn = this.element.querySelector('.play-btn')
  this.muteBtn = this.element.querySelector('.sound-btn')
  window.addEventListener('DOMContentLoaded', function () {
    this.displayItems(this.foodarray);
    this.displaybutton();
  }.bind(this))
  // filter items displayed with the button
  this.btnContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('food-btn')) {
      const categories = e.target.dataset.category
      let filteredCategory = this.foodarray.filter(function (item) {
        if (item.category === categories) {
          return item
        }
      })
      if (categories === `all`) {
        this.displayItems(this.foodarray)
      } else {
        this.displayItems(filteredCategory)
      }
    }
    
  }.bind(this))

  this.asideLink.addEventListener('click', this.playmuteVideo.bind(this))
  this.playBtn.addEventListener('click', this.playVid.bind(this))
  this.muteBtn.addEventListener('click', this.muteVid.bind(this))

}
// display funxtion
display.prototype.displayItems = function (array) {
  const itemsDisplay = array.map(function (e) {
    return `<article class="menu">
              <div class="menu-image">
                <img src=${e.img} alt=${e.tittle} />
              </div>
              <div class="menu-text">
                <div class="menutext-tittle">
                  <h2>${e.tittle}</h2>
                  <p>${e.cost}</p>
                </div>
                <p class="menutext">
                 ${e.desc}
                </p>
              </div>
            </article>`
  }).join('')
  this.sectionContainer.innerHTML = itemsDisplay
}
// playmute function
display.prototype.playmuteVideo = function () {
  if (this.element.classList.contains('active')) {
    this.video.play()
    this.video.muted = false
  } else if (!this.element.classList.contains('active')) {
    this.video.pause()
    this.video.muted = true
  }
}
// playfunction
display.prototype.muteVid = function () {
  if (!this.muteBtn.classList.contains('slide')) {
    this.muteBtn.classList.add('slide')
    this.video.muted = true
  }
  else {
    this.muteBtn.classList.remove('slide')
    this.video.muted = false
  }
}
display.prototype.playVid = function () {
  if (!this.playBtn.classList.contains('slide')) {
    this.playBtn.classList.add('slide')
    this.video.pause()
  }
  else {
    this.playBtn.classList.remove('slide')
    this.video.play()
  }
}




// filter function
display.prototype.displaybutton = function (e) {
  let btnCategory = this.foodarray.reduce(function (arr, items) {
    if (!arr.includes(items.category)) {
      arr.push(items.category)
    }
    return arr
  }, ['all'])

  this.btnContainer.innerHTML = btnCategory.map(function (each) {
    return `<button class="food-btn btn-1 yoruba-btn" data-category="${each}">
                ${each}
              </button>`
  }).join('')


}


const yoruba = new display(getElement('.yoruba'), yorubaFood)
const igbo = new display(getElement('.igbos'), igboFood)
const hausa = new display(getElement('.hausa'), hausaFood)
const other = new display(getElement('.others'), otherFood)
const general = new display(getElement('.general'), generalFood)
