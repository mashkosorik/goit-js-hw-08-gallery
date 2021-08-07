import gallery from './app.js'

const ulGallery = document.querySelector('.js-gallery')
const lightBox = document.querySelector('.js-lightbox')
const lightBoxButton = document.querySelector('.lightbox__button')
const lightBoxImg = document.querySelector('.lightbox__image')
gallery.forEach((object, index) => {
  const img = document.createElement('img')
  img.classList.add('gallery__image')
  img.setAttribute('src', object.preview)
  img.setAttribute('data-sourse', object.original)
  img.setAttribute('alt', object.description)
  img.setAttribute('data-index', index)

  const link = document.createElement('a')
  link.classList.add('gallery__link')
  link.append(img)

  const item = document.createElement('li')
  item.classList.add('gallery__item')
  item.append(link)
  ulGallery.append(item)
})

ulGallery.addEventListener('click', (event) => {
  const newSrc = event.target.dataset.sourse
  if (event.target.nodeName !== 'IMG') {
    return
  }
  lightBox.classList.add('is-open')
  lightBoxImg.src = newSrc
  window.addEventListener('keydown', handleEccape)
})
const closeLightBox = () => {
  lightBox.classList.remove('is-open')
  lightBoxImg.src = ''
  window.removeEventListener('keydown', handleEccape)
  window.removeEventListener('keydown', handleScroll)
}

lightBoxButton.addEventListener('click', closeLightBox)
function handleEccape(event) {
  if (event.code === 'Escape') {
    closeLightBox()
  }
}
