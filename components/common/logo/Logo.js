import React from 'react';
import Link from 'next/link';
import Image from 'next/dist/client/image';
import styles from './logo.module.scss';

const Logo = () => {
  return (
    <Link href="/" passHref>
      <a href='replace' className={styles.logo}>
        <Image src={'/images/united-defense-logo.png'} alt={'logo'} layout={'responsive'} width={90} height={90} />
      </a>
    </Link>
  )
}

export default Logo