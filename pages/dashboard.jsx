import Stats from 'components/Stats';
import { useSession, getSession } from 'next-auth/react';
import PlantTable from '../components/PlantTable';

const Dashboard = () => {
  const { data: session } = useSession();
  if (typeof window === 'undefined') return null;

  if (session) {
    return (
      <div>
        <Stats />
        <PlantTable />
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
