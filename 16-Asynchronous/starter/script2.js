const img = document.querySelector('.images')

const images = ['./img/img-2.jpg', './img/img-3.jpg']

const createImage = function (imgPath) {

    const addImg = document.createElement('img')

    new Promise((resolve,reject) => {
        addImg.src = imgPath
        addImg.addEventListener('load', () => {
            if (addImg) {
                img.insertAdjacentElement('beforeend', addImg)
                resolve()
            }else{
                reject( new Error('Failed to load image ❌'))
            }
        })
    })


     setTimeout(()=>{
        addImg.src =''
     },2000)
}

// createImage(images[1])

// for ( i of images){
//     console.log(i);
//     createImage(i)
// }