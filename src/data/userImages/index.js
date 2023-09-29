import img1 from './user-1.jpg'
import img2 from './user-2.jpg'
import img3 from './user-3.jpg'
import img4 from './user-4.jpg'
import img5 from './user-5.jpg'
import img6 from './user-6.jpg'
import img7 from './user-7.jpg'
import img8 from './user-8.jpg'
import img9 from './user-9.jpg'
import img10 from './user-10.jpg'
import img11 from './user-11.jpg'
import img12 from './user-12.jpg'
import img13 from './user-13.jpg'
import img14 from './user-14.jpg'
import img15 from './user-15.jpg'
import img16 from './user-16.jpg'
import img17 from './user-17.jpg'
import img18 from './user-18.jpg'
import img19 from './user-19.jpg'
import img20 from './user-20.jpg'

const arr = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20]

const getRandomImage = () => {
    return arr[Math.floor(Math.random() * arr.length)]
}
export default getRandomImage