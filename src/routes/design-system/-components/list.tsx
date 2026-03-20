import { Link } from '@tanstack/react-router'

interface Props {
  items: { label: string; route: string }[]
}

export const List = ({ items }: Props) => {
  return (
    <ul className='space-y-4'>
      {items.map((item, index) => (
        <li key={index}>
          <Link
            className='text-sm/7 font-medium text-gray-11 transition-colors hover:text-gray-13'
            to={item.route}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
