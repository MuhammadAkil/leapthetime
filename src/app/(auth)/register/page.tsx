import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { SlimLayout } from '@/components/SlimLayout'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function Register() {
  return (
    <SlimLayout>
      <div className="custom-shadow bg-white/9 flex w-full flex-col items-start justify-start rounded-xl border border border-b border-[#ffffff1a] bg-black p-4 py-3 backdrop-blur-[25px]  lg:bg-transparent lg:backdrop-blur-[25px]">
        <h2 className="text-lg font-semibold text-white">Request Demo</h2>
        <form
          action="#"
          className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
        >
          <TextField
            className="col-span-full"
            label="Full name"
            name="full_name"
            type="text"
            autoComplete="given-name"
            required
          />
          <TextField
            className="col-span-full"
            label="Work Email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            className="col-span-full"
            label="Phone number "
            name="phoneNumber"
            type="tel"
            autoComplete="new-password"
            required
          />
          <TextField
            className="col-span-full"
            label="Company Website  "
            name="companyWebsite"
            type="tel"
            autoComplete="new-password"
            required
          />
          {/* <SelectField
          className="col-span-full"
          label="How did you hear about us?"
          name="referral_source"
        >
          <option>AltaVista search</option>
          <option>Super Bowl commercial</option>
          <option>Our route 34 city bus ad</option>
          <option>The “Never Use This” podcast</option>
        </SelectField> */}
          <div className="col-span-full">
            <Button
              type="submit"
              variant="solid"
              className="bg-primary-color hover:bg-[--primary-color]/80 w-full py-2"
            >
              <span>
                Request Demo <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </div>
    </SlimLayout>
  )
}
