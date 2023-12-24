// sidebar functions
const navToggle = document.querySelector('.nav-toggle')
const asideBar = document.querySelector('.aside')
const asideCancel = document.querySelector('.aside-cancel')
navToggle.addEventListener('click', function () {

  asideBar.classList.add('show-sidebar')
})
asideCancel.addEventListener('click',function () {
  asideBar.classList.remove('show-sidebar')
})









// function to dynamically display menu on each section


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





const yoruba = document.querySelector('.yoruba-container')
const igbo = document.querySelector('.igbo-container')
const hausa = document.querySelector('.hausa-container')
const other = document.querySelector('.other-container')
const  general= document.querySelector('.general-container')


function displayMenu(foodArray, foodContainer) {
  const displayItems = foodArray.map(function (e) {
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

  foodContainer.innerHTML = displayItems
}

window.addEventListener('DOMContentLoaded', displayMenu(yorubaFood, yoruba), displayMenu(igboFood, igbo), displayMenu(hausaFood,hausa), displayMenu(otherFood, other), displayMenu(generalFood, general))

// botton for switching sections functionality
const secs = document.querySelectorAll('.sec')
const btns = document.querySelectorAll('.btn')
const asideLink = document.querySelectorAll('.aside-link')
  
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    let id = e.target.dataset.id
    if (id) {
      const currSec = document.getElementById(id)
     secs.forEach(function (sec) {
      sec.classList.remove('active')
     })
      currSec.classList.add('active')
    }
  })
})

asideLink.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    let id = e.target.dataset.id
  
    if (id) {
      const currSec = document.getElementById(id)
      secs.forEach(function (sec) {
        sec.classList.remove('active')
      })
      
      currSec.classList.add('active')
    }
  })
})

// background video function
const playbtn = document.querySelectorAll('.play-btn')
const soundbtn = document.querySelectorAll('.sound-btn')
const videos = document.querySelectorAll('.video-container')
playbtn.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    let id = e.currentTarget.dataset.id
    const currVideo = document.getElementById(id)
    if (!btn.classList.contains('slide')) {
      btn.classList.add('slide')
      currVideo.pause()
    }
    else {
      btn.classList.remove('slide')
      currVideo.play()
    }
  })
})
soundbtn.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    let id = e.currentTarget.dataset.id
    const currVideo = document.getElementById(id)
    
    videos.forEach(function (vid) {
      if (vid === currVideo) {
        currVideo.muted = false
      }
      else {
        vid.muted = true
      }
    })
    if (!btn.classList.contains('slide')) {
      btn.classList.add('slide')
      currVideo.muted = false
    }
    else {
      btn.classList.remove('slide')
      currVideo.muted = true
    }
    
  })

  
})

// function to filter menu on each section

const yorubaBtn = document.querySelectorAll('.yoruba-btn')
const igboBtn = document.querySelectorAll('.igbo-btn')
const hausaBtn = document.querySelectorAll('.hausa-btn')
const otherBtn = document.querySelectorAll('.other-btn')
const generalBtn = document.querySelectorAll('.general-btn')

yorubaBtn.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    let btnCategory = e.currentTarget.dataset.category
    const menuCategory = yorubaFood.filter(function (items) {
      if (items.category === btnCategory) {
        return items
      }
    })
    if (btnCategory === 'all') {
      displayMenu(yorubaFood,yoruba)
    } else {
      displayMenu(menuCategory,yoruba)
    }
  })
})
igboBtn.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    let btnCategory = e.currentTarget.dataset.category
    const menuCategory = igboFood.filter(function (items) {
      if (items.category === btnCategory) {
        return items
      }
    })
    if (btnCategory === 'all') {
      displayMenu(igboFood,igbo)
    } else {
      displayMenu(menuCategory,igbo)
    }
  })
})
hausaBtn.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    let btnCategory = e.currentTarget.dataset.category
    const menuCategory = hausaFood.filter(function (items) {
      if (items.category === btnCategory) {
        return items
      }
    })
    if (btnCategory === 'all') {
      displayMenu(hausaFood,hausa)
    } else {
      displayMenu(menuCategory,hausa)
    }
  })
})
otherBtn.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    let btnCategory = e.currentTarget.dataset.category
    const menuCategory = otherFood.filter(function (items) {
      if (items.category === btnCategory) {
        return items
      }
    })
    if (btnCategory === 'all') {
      displayMenu(otherFood,other)
    } else {
      displayMenu(menuCategory,other)
    }
  })
})
generalBtn.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    let btnCategory = e.currentTarget.dataset.category
    const menuCategory = generalFood.filter(function (items) {
      if (items.category === btnCategory) {
        return items
      }
    })
    if (btnCategory === 'all') {
      displayMenu(generalFood,general)
    } else {
      displayMenu(menuCategory,general)
    }
  })
})






