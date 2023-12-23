const yorubaFood = [
  {
    img: `./images/yoruba/akara.jpeg`,
    tittle: `akara`,
    cost: `#1500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `non swallow`
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
    category: `non swallow`
  },
  {
    img: `./images/yoruba/ekuru.jpeg`,
    tittle: `ekuru`,
    cost: `#500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `non swallow`
  },
  {
    img: `./images/yoruba/ewa.jpeg`,
    tittle: `ewa`,
    cost: `#1500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `non swallow`
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
    category: `non swallow`
  },
  {
    img: `./images/yoruba/ofada.jpeg`,
    tittle: `ofada`,
    cost: `#2000`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `non swallow`
  },
  {
    img: `./images/yoruba/rice.jpeg`,
    tittle: `rice`,
    cost: `#1500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `non swallow`
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
    category: `non swallow`
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
    category: `non swallow`
  },
  {
    img: `./images/igbo/nkwobi.jpeg`,
    tittle: `nkwobi`,
    cost: `#500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `non swallow`
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
    category: `non swallow`
  },
  {
    img: `./images/igbo/ukwa.jpeg`,
    tittle: `ukwa`,
    cost: `#2000`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `non swallow`
  },
  {
    img: `./images/igbo/yam_vegetable.jpeg`,
    tittle: `yam`,
    cost: `#1500`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem fugiat reiciendis culpa minima facilis quidem, ipsa,`,
    category: `non swallow`
  },
  
]
const yoruba = document.querySelector('.yoruba-container')
const igbo = document.querySelector('.igbo-container')
const hausa = document.querySelector('.hausa-container')
const other = document.querySelector('.other-container')
const  general= document.querySelector('.general-container')


function displayMenu(foodarr, foodcon) {
  const displayItems = foodarr.map(function (e) {
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

  foodcon.innerHTML = displayItems
}


window.addEventListener('DOMContentLoaded', displayMenu(yorubaFood,yoruba), displayMenu(igboFood,igbo))

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

