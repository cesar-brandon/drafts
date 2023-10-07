import slide1 from '../../public/slide1.jpg';
import slide2 from '../../public/slide2.jpg';
import slide3 from '../../public/slide3.jpg';
import slide4 from '../../public/slide4.jpg';

export const images = [slide1, slide2, slide3, slide4]

export default function imageByIndex(index: number) {
  return images[index % images.length]
}
