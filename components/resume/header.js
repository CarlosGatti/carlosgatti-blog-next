import cn from 'classnames'
import Image from 'next/image'

export default function CoverImage() {
  return (
    <div className="sm:mx-0">
        <Image
        width={1500}
        height={500}
        alt={`Cover Image fora`}
        src="/desk.jpg"
        className={cn('shadow-small', {
            'hover:shadow-medium transition-shadow duration-200': 0,
          })}
      />
    </div>
  )
}




import React from 'react';
import Contact from './contact';

const Header = ({ name, role, contacts }) => (
  <header className="border-b border-neutral-300 pb-2 md:flex items-center justify-between">
    <div>
      <h1 className="text-primary-500 text-4xl md:text-5xl font-bold tracking-wide leading-tight">
        {name}
      </h1>
      <h2 className="font-light text-lg md:text-2xl text-primary-900 leading-relaxed tracking-widest">
        {role}
      </h2>
    </div>
    <div className="mt-5 md:mt-0 md:border-l md:border-neutral-300 md:pl-4">
      {contacts &&
        Object.keys(contacts).map(key => (
          <Contact key={key} field={key} value={contacts[key]} />
        ))}
    </div>
  </header>
);

export default Header;
