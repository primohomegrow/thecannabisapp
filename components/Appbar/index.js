import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBong } from '@fortawesome/pro-thin-svg-icons';

function Appbar() {
  const { data: session, status } = useSession();
  return (
    <div className='navbar'>
      <div className='flex-1' />
      <div className='flex-none gap-2'>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              {!session ? (
                <FontAwesomeIcon icon={faBong} size='2x' />
              ) : (
                <img src={session?.user.image} />
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'>
            <li>
              <a className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={signOut}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Appbar;
