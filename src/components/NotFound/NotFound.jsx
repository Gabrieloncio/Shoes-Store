import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="w-full bg-notfound bg-no-repeat bg-cover bg-center h-screen flex flex-col justify-center items-center gap-2 p-10">
      <p className="text-4xl font-bold font-serif text-[#F3F3F3]">
        Are you lost dude?
      </p>
      <p className="text-4xl font-bold font-serif text-[#F3F3F3]">
        Let's go back to a{' '}
        <NavLink
          to="/home"
          className="text-red-600 underline decoration-[#F3F3F3]">
          Better Place
        </NavLink>
      </p>
    </section>
  )
}

export default NotFound
