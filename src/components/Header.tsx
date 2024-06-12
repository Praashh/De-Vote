import { Link } from 'react-router-dom';
import ConnectPage from './ConnectPage';

const Header = () => {
  return (
    <div>
         <header className="bg-white px-4 lg:px-6 h-16 flex items-center justify-between shadow-sm dark:bg-slate-950 dark:text-gray-50">
        <Link to="#" className="flex items-center gap-2" >
          <TicketIcon className="h-6 w-6" />
          <span className="font-semibold w-full md:text-lg">De-Vote</span>
        </Link>
        <ConnectPage/>
        
      </header>
    </div>
  )
}

export default Header;



function TicketIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M13 5v2" />
        <path d="M13 17v2" />
        <path d="M13 11v2" />
      </svg>
    )
  }
