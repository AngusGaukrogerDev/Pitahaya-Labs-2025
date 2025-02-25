'use client'
import Image from 'next/image';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AboutSection() {
  const textRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  const imageRef = useScrollAnimation();

  return (
    <section id="about" className="py-20 min-h-[800px] bg-white flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div ref={textRef as React.RefObject<HTMLDivElement>} className="fade-up">
              <h2 className="text-black text-4xl font-extrabold">
                Who We Are
              </h2>
              <p className="text-black text-lg mt-4">
                Pitahaya Labs is more than just a Software Agency. We are the technical co-founders you need to take you from a vision, to the fully functional app you
                need to fill your gap in the market. We guarantee you a high quality product, built using cutting edge technologies all while keeping you in the loop, every step of the way. Take a look at our case studies and reviews to 
                see how we have transformed our clients&apos; ideas into reality.
              </p>
            </div>
            <div ref={statsRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-2 gap-6 fade-up">
              <div className="space-y-2">
                <h4 className="text-xl font-medium text-yellow">6+</h4>
                <p>Years of Experience</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-medium text-yellow">10+</h4>
                <p>Projects Completed</p>
              </div>
            </div>
          </div>
          <div ref={imageRef as React.RefObject<HTMLDivElement>} className="relative h-[400px] rotate-90 -scale-y-100 flex w-full items-end justify-end slide-in-right">
            <Image 
              src="https://store.brth.uk/pitahaya/patternrightcornertablet.png"
              alt="Pattern design"
              // fill
              width={250}
              height={250}
              style={{ objectFit: 'cover' }}
            />
              {/* <Image src="/Yellow pattern.png" alt="Pattern design" width={350} height={350} style={{ objectFit: 'cover' }} /> */}

          </div>
        </div>
      </div>
    </section>
  );
} 