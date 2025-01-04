// TODO: Тут разработать свайпер для карточки товара
import Image from 'next/image';

import cls from './ImageSwiper.module.scss';

export interface IImageSwiper {
  imgLink: string;
}

export const ImageSwiper: React.FC<IImageSwiper> = ({ imgLink }) => (
  <section className={cls.image}>
    {/* alt передавать с сервера */}
    <Image src={imgLink} alt="Conf Image" width={302} />
  </section>
)
