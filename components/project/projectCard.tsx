import Image from 'next/image';
import Link from 'next/link';

import style from '@/style_modules/projectCard.module.css'

export default function ProjectCard(props: any) {
  const image = props.image;
  const description = props.description;
  const route = props.route;

  return (
    <Link href={route} style={{ textDecoration: 'none' }}>

<div className={style.card}>
    <div className={style.content}>
      <p className={style.description}>{description}</p>
    </div>
    <img src={`/assets/projects/${image}`} alt="" />
  </div>
    </Link>
  );

}