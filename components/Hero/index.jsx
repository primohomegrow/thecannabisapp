import { useSession, signIn, signOut } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBong } from '@fortawesome/pro-thin-svg-icons';

const Hero = () => {
  const { data: session, status } = useSession();

  return (
    <div className='hero min-h-screen '>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold '>Merry meet,</h1>
          <p className='py-6'>
            Lord and Lady, Spirits of Nature, Elements around me,
          </p>
          <p className='py-6'>
            Bless me as I move through the world today. May I bring joy and
            tranquility to every life I touch. May my actions bring only harmony
            to the world. May I heal pain and soothe anger, May I create joy and
            balance as I walk my path. Support me and guide me, spirits of
            Nature, This day and all days ahead of me. This I ask of you, as a
            green witch, And thank you for your many blessings.
          </p>
          <p className='py-6'>- So Mote It Be</p>

          <div className='flex space-x-4 items-center justify-center'>
            <FontAwesomeIcon icon={faBong} size='2x' />
            <button className='btn btn-primary' onClick={() => signIn()}>
              let's grow primo!
            </button>
            <FontAwesomeIcon icon={faBong} size='2x' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
