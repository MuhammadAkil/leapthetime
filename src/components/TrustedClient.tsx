'use client'
import Image from 'next/image'

import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

export function TrustedClient() {
  const logos = [
    { name: 'Transistor', logo: logoTransistor },
    { name: 'Tuple', logo: logoTuple },
    { name: 'StaticKit', logo: logoStaticKit },
    { name: 'Mirage', logo: logoMirage },
    { name: 'Laravel', logo: logoLaravel },
    { name: 'Statamic', logo: logoStatamic },
    { name: 'StaticKit', logo: logoStaticKit },
    { name: 'Mirage', logo: logoMirage },
  ];

  return (
    <Container className="pb-32 text-center">
      <div className="mt-36 overflow-hidden lg:mt-10">
        <h2 className="font-display text-2xl text-[#ffffffa2]">
          Trusted by teams at
        </h2>
        <div className="mt-14 flex space-x-8 sm:flex-col sm:space-x-0 sm:space-y-10 xl:flex-row xl:space-y-0">
          <div className="animate-marquee flex w-max gap-10">
            {logos.concat(logos).map((company, index) => ( 
              <div key={index} className="flex flex-shrink-0 items-center justify-center gap-x-8 sm:gap-y-10">
                <Image src={company.logo} alt={company.name} unoptimized />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
