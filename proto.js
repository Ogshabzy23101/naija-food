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
    // e.preventDefault()
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
      // videos.forEach(function (vid) {
      //  vid.muted = true
      // })
    }

  })
})


const yorubaFood = [
  {
    img: `./images/yoruba/akara.jpeg`,
    tittle: `akara`,
    cost: `#1500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/yoruba/amala.jpeg`,
    tittle: `amala`,
    cost: `#2500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `swallow`
  },
  {
    img: `./images/yoruba/asaro.jpeg`,
    tittle: `asaro`,
    cost: `#1000`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/yoruba/ekuru.jpeg`,
    tittle: `ekuru`,
    cost: `#500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/yoruba/ewa.jpeg`,
    tittle: `ewa`,
    cost: `#1500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/yoruba/iyan.jpeg`,
    tittle: `iyan`,
    cost: `#3500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `swallow`
  },
  {
    img: `./images/yoruba/moimoi.jpeg`,
    tittle: `moimoi`,
    cost: `#700`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/yoruba/ofada.jpeg`,
    tittle: `ofada`,
    cost: `#2000`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/yoruba/rice.jpeg`,
    tittle: `rice`,
    cost: `#1500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/yoruba/semo.jpeg`,
    tittle: `semo`,
    cost: `#2500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `swallow`
  }
]
const igboFood = [
  {
    img: `./images/igbo/abacha.jpeg`,
    tittle: `abacha`,
    cost: `#1500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/igbo/egusi.jpeg`,
    tittle: `egusi`,
    cost: `#2500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `swallow`
  },
  {
    img: `./images/igbo/fio_fio.jpeg`,
    tittle: `fio fio`,
    cost: `#1000`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/igbo/nkwobi.jpeg`,
    tittle: `nkwobi`,
    cost: `#500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/igbo/ogbono.jpeg`,
    tittle: `ogbono`,
    cost: `#1500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `swallow`
  },
  {
    img: `./images/igbo/okpa.jpeg`,
    tittle: `okpa`,
    cost: `#3500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `non swallow`
  },
  {
    img: `./images/igbo/ona.jpeg`,
    tittle: `ona`,
    cost: `#700`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/igbo/ukwa.jpeg`,
    tittle: `ukwa`,
    cost: `#2000`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/igbo/yam_vegetable.jpeg`,
    tittle: `yam`,
    cost: `#1500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },

]
const hausaFood = [
  {
    img: `./images/hausa/awara.jpeg`,
    tittle: `awara`,
    cost: `#1500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/hausa/bambara.jpeg`,
    tittle: `bambara`,
    cost: `#2500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/hausa/danwaka.jpeg`,
    tittle: `danwaka`,
    cost: `#1000`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/hausa/gote_acha.jpeg`,
    tittle: `gote`,
    cost: `#500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `swallow`
  },
  {
    img: `./images/hausa/gurasa.jpeg`,
    tittle: `gurasa`,
    cost: `#1500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/hausa/koko.jpeg`,
    tittle: `koko`,
    cost: `#3500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/hausa/kosai.jpeg`,
    tittle: `kosai`,
    cost: `#700`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/hausa/masa.jpeg`,
    tittle: `masa`,
    cost: `#2000`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/hausa/pate_ache.jpeg`,
    tittle: `pate`,
    cost: `#1500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },

  {
    img: `./images/hausa/tuwo-shinkafa.jpeg`,
    tittle: `tuwo`,
    cost: `#900`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `swallow`
  },
  {
    img: `./images/hausa/waina.jpeg`,
    tittle: `waina`,
    cost: `#900`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  }

]
const otherFood = [
  {
    img: `./images/others/afang.jpeg`,
    tittle: `afang`,
    cost: `#1500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `swallow`
  },
  {
    img: `./images/others/atama.jpeg`,
    tittle: `atama`,
    cost: `#2500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `swallow`
  },
  {
    img: `./images/others/edikaiikong.jpeg`,
    tittle: `edikaikong`,
    cost: `#1000`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `swallow`
  },
  {
    img: `./images/others/fisherman_soup.jpeg`,
    tittle: `fisherman`,
    cost: `#500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `swallow`
  },
  {
    img: `./images/others/ijaw.jpeg`,
    tittle: `ijaw`,
    cost: `#1500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `swallow`
  },
  {
    img: `./images/others/nkukwo.jpeg`,
    tittle: `nkukwo`,
    cost: `#3500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/others/ofe_nsala.jpeg`,
    tittle: `ofe nsala`,
    cost: `#700`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `swallow`
  },
  {
    img: `./images/others/owoh.jpeg`,
    tittle: `owoh`,
    cost: `#2000`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `swallow`
  },
  {
    img: `./images/others/rivers_native_soup.jpeg`,
    tittle: `native soup`,
    cost: `#1500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `swallow`
  },

  {
    img: `./images/others/starch.jpg`,
    tittle: `starch`,
    cost: `#900`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `swallow`
  }
]
const generalFood = [
  {
    img: `./images/general/bread_and_beans.jpeg`,
    tittle: `bread`,
    cost: `#1500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/general/fried_rice.jpeg`,
    tittle: `fried rice`,
    cost: `#2500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/general/garri.jpeg`,
    tittle: `garri`,
    cost: `#1000`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/general/grill_fish.jpeg`,
    tittle: `grill fish`,
    cost: `#500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/general/jollof_rice.jpeg`,
    tittle: `jollof rice`,
    cost: `#1500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/general/okro.jpeg`,
    tittle: `okro`,
    cost: `#3500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `swallow`
  },
  {
    img: `./images/general/pepper_soup.jpeg`,
    tittle: `pepper soup`,
    cost: `#700`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/general/puff_puff.jpeg`,
    tittle: `puff puff`,
    cost: `#2000`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },
  {
    img: `./images/general/suya.jpeg`,
    tittle: `suya`,
    cost: `#1500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `nonswallow`
  },



]


function getElement(selector) {
  const id = document.querySelector(selector)
  if (id) {
    return id
  } else {
    throw `error please check ${selector} does not e3xist`
  }
}



function display(sect, foodarray) {
  self = this
  this.element = sect
  this.foodarray = foodarray
  this.sectionContainer = this.element.querySelector('.menu-container')
  this.video = this.element.querySelector('.video-container')
  this.asideLink = document.querySelector('.aside')
  this.btn = this.element.querySelector('.btn-container')
  this.playBtn = this.element.querySelector('.play-btn')
  this.muteBtn = this.element.querySelector('.sound-btn')
  this.asideLink.addEventListener('click', this.displayItems.bind(this))
  this.asideLink.addEventListener('click', this.playmuteVideo.bind(this))
  this.playBtn.addEventListener('click', this.playVid.bind(this) )
  this.muteBtn.addEventListener('click', this.muteVid.bind(this))
  
}
// display funxtion
display.prototype.displayItems = function () {
  const itemsDisplay = this.foodarray.map(function (e) {
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
// display.prototype.filterItems = function (e) {
//   let categories = e.Target.dataset.id
//   let filterCategory = this.foodarray.filter(function (item) {
//     if (item.category === categories) {
//       return item
//     }
//   }).join('')

//   if (categories === 'all') {
//     this.sectionContainer.innerHTML = this.foodarray.map(function (ite) {
//       return `<article class="menu">
//               <div class="menu-image">
//                 <img src=${ite.img} alt=${ite.tittle} />
//               </div>
//               <div class="menu-text">
//                 <div class="menutext-tittle">
//                   <h2>${ite.tittle}</h2>
//                   <p>${ite.cost}</p>
//                 </div>
//                 <p class="menutext">
//                  ${ite.desc}
//                 </p>
//               </div>
//             </article>`
//     }).join('')
//   } else {
//     this.sectionContainer.innerHTML = filterCategory.map(function (ite) {
//       return `<article class="menu">
//               <div class="menu-image">
//                 <img src=${ite.img} alt=${ite.tittle} />
//               </div>
//               <div class="menu-text">
//                 <div class="menutext-tittle">
//                   <h2>${ite.tittle}</h2>
//                   <p>${ite.cost}</p>
//                 </div>
//                 <p class="menutext">
//                  ${ite.desc}
//                 </p>
//               </div>
//             </article>`
//     }).join('')
//   }
// }






// const home = new display(getElement('.head'),)
const yoruba = new display(getElement('.yoruba'), yorubaFood)
const igbo = new display(getElement('.igbos'), igboFood)
const hausa = new display(getElement('.hausa'), hausaFood)
const other = new display(getElement('.others'), otherFood)
const general = new display(getElement('.general'), generalFood)


