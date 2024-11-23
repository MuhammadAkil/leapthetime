'use client'

import { Button } from '@/components/Button'
import ContactCard from '@/components/ContactCard'
import { Container } from '@/components/Container'

export default function Contact() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-black py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center ">
          <h2 className="gradient-text font-display text-3xl tracking-tight text-white sm:text-4xl">
            Hey, How can we help?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Let us know if you have any questions about your AI needs. You can
            either visit our FAQ or send us a message using the button below.
          </p>
          <Button
            href="mailto:hi@leapthelimit.com?subject=Integrating%20AI%20into%20My%20Workplace"
            color="white"
            className="mt-10 hover:bg-white/80"
          >
            Contact Us
          </Button>
        </div>
        <div className="body-font custom-shadow -m-2 mx-auto mt-16 flex h-full max-w-[1024px] flex-wrap justify-start overflow-visible !rounded-xl border border-solid border-white/15 text-gray-600 backdrop-blur-[25px]">
          <ContactCard
            title="LeapTheLimit HQ"
            address="King George St 20, Jerusalem, 9426208"
            phone="+972 (58) 626 5737"
            mapButton="View On Map"
            mapLink="https://www.google.com/maps/dir/31.4438716,74.3704765/leap+the+limit/@30.7524896,44.1524617,5z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x150329bc3bedcfc9:0x64944f0a6e8c6fa2!2m2!1d35.2160709!2d31.7815176?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
          />
          <ContactCard
            title="Careers at LeapTheTime"
            description="Help us build a world without barriers!"
            mapButton="View Careers"
            mapLink="/careers"
          />
          <ContactCard
            title="US Office"
            address="1930, N Orange St. 4th Floor . Wilmington, DE, New Castle, US, 19801"
            phone="+1 (878)8880958"
            mapButton="View On Map"
            mapLink="https://www.google.com/maps/dir/31.4438716,74.3704765/leap+the+limit/@30.7524896,44.1524617,5z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x150329bc3bedcfc9:0x64944f0a6e8c6fa2!2m2!1d35.2160709!2d31.7815176?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
          />
          <ContactCard
            title="Press & Media"
            description="For all press inquiries, we're just an email away. Reach out to us at"
            email="press@leapthelimit.com"
          />
        </div>
      </Container>
    </section>
  )
}
