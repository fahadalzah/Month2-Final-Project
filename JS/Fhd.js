let body1 = document.getElementById('body')
let firstsection = document.createElement('section')
body1.appendChild(firstsection)
firstsection.id = 'flex'


{
    let dcards = document.createElement('div')
    dcards.id = 'cards'
    firstsection.appendChild(dcards)

    let dphone = document.createElement('div')
    dphone.id = 'phone'
    dcards.appendChild(dphone)

    let imgphone = document.createElement('img')
    dphone.appendChild(imgphone)
    imgphone.src = "../IMG1/no-photo.png"
    imgphone.id = 'imgphone'

    let h3 = document.createElement('h3')
    h3.id = 'h3'
    h3.innerHTML = " تصليح شاشة الجوال"
    dcards.appendChild(h3)

    let h5 = document.createElement('h5')
    h5.id = 'h5'
    h5.innerHTML = ' خصم 37% فتره مححدده'
    dcards.appendChild(h5)

    let dprice = document.createElement('div')
    dprice.id = 'price'
    dcards.appendChild(dprice)

    let p1 = document.createElement('p')
    p1.id = 'p1'
    p1.innerHTML = ' 83 ر.س'
    dprice.appendChild(p1)

    let p2 = document.createElement('p')
    p2.id = 'p2'
    dprice.appendChild(p2)

    let pdel = document.createElement('del')
    p2.appendChild(pdel)
    pdel.innerHTML = '100 ر.س'

    let cartimg = document.createElement('img')
    cartimg.src = "../IMG1/shopping-cart.png"
    cartimg.id = 'cartimg'
    dprice.appendChild(cartimg)
}
{
    let dcards = document.createElement('div')
    dcards.id = 'cards'
    firstsection.appendChild(dcards)

    let dphone = document.createElement('div')
    dphone.id = 'phone'
    dcards.appendChild(dphone)

    let imgphone = document.createElement('img')
    dphone.appendChild(imgphone)
    imgphone.src = "../IMG1/Bphone.png"
    imgphone.id = 'imgphone'

    let h3 = document.createElement('h3')
    h3.id = 'h3'
    h3.innerHTML = 'تصليح الكميرة الاماميه والخلفيه'
    dcards.appendChild(h3)

    let h5 = document.createElement('h5')
    h5.id = 'h5'
    h5.innerHTML = 'خصم 48% فتره مححدده'
    dcards.appendChild(h5)

    let dprice = document.createElement('div')
    dprice.id = 'price'
    dcards.appendChild(dprice)

    let p1 = document.createElement('p')
    p1.id = 'p1'
    p1.innerHTML = ' 83.64 ر.س'
    dprice.appendChild(p1)

    let p2 = document.createElement('p')
    p2.id = 'p2'
    dprice.appendChild(p2)

    let pdel = document.createElement('del')
    p2.appendChild(pdel)
    pdel.innerHTML = '164 ر.س '

    let cartimg = document.createElement('img')
    cartimg.src = "../IMG1/shopping-cart.png"
    cartimg.id = 'cartimg'
    dprice.appendChild(cartimg)
}
