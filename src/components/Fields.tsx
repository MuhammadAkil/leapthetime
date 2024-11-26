'use client'

import clsx from 'clsx'
import { useId } from 'react'

const formClasses =
  'block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-black !placeholder-black focus:border-[--primary-color] focus:bg-gray-300 focus:outline-none focus:ring-[--primary-color] sm:text-sm'

function Label({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <label htmlFor={id} className="mb-3 block text-sm font-medium text-white">
      {children}
    </label>
  )
}

export function TextField({
  label,
  type = 'text',
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'input'>, 'id'> & { label: string }) {
  let id = useId()

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  )
}

export function SelectField({
  label,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'select'>, 'id'> & { label: string }) {
  let id = useId()

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, 'pr-8')} />
    </div>
  )
}
