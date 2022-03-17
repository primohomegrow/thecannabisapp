import { useSession, getSession } from 'next-auth/react';

const Dashboard = () => {
  const { data: session } = useSession();
  if (typeof window === 'undefined') return null;

  if (session) {
    return (
      <div>
        <h2 className=''>Dashboard</h2>
      </div>
    );
  }
  return <p>Access Denied</p>;
};
export default Dashboard;

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
