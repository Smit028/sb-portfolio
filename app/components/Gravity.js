'use client'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './TextEffect.module.css';
import right from '../assets/right.svg'
import Image from 'next/image';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function TextEffect() {
  const textRefs = useRef([]);

  useEffect(() => {
    const textElements = textRefs.current;

    textElements.forEach((text) => {
      if (text) {
        gsap.to(text, {
          backgroundSize: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: text,
            start: 'center 100%',
            end: 'center 20%',
            scrub: true,
          },
        });
      }
    });
  }, []);

  return (
    <div className="flex flex-col items-end md:justify-end md:h-[70vh] h-full font-bold">
      <Image src={right} alt="main"/>
      <h1 className={styles.text} ref={(el) => (textRefs.current[0] = el)}>#MERN <span className="text-white">Stack</span></h1>
      <h1 className={styles.text} ref={(el) => (textRefs.current[1] = el)}>#Node.js #Next.js<span className="text-white">Framework</span></h1>
      <h1 className={styles.text} ref={(el) => (textRefs.current[2] = el)}> #React.js<span className="text-white">Library</span></h1>
      <h1 className={styles.text} ref={(el) => (textRefs.current[3] = el)}>#Azure<span className="text-white">Cloud</span></h1>
      <h1 className={styles.text} ref={(el) => (textRefs.current[4] = el)}>#Wordpress<span className="text-white">Hosting</span></h1>
    </div>
  );
}
