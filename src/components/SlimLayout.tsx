'use client'

export function SlimLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative mt-[80px] flex shrink-0 justify-center md:px-12 lg:px-0">
        <div className="bg- relative z-10 flex flex-1 flex-col rounded-lg bg-transparent px-4 py-10 shadow-2xl backdrop-blur-[25px] sm:justify-center md:flex-none md:px-28">
          <main className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}
