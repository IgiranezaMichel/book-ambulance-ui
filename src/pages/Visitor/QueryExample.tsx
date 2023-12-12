import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../../GraphQl/Query';

const QueryExample = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Access the user data from data.getAllUser
  const users = data.getAllUser;
   console.log(users)
  return (
    <div>
      
    </div>
  );
};

export default QueryExample;
