import React from "react";
import { useGetUsersQuery } from "../../services/admin/allUser";


const UsersList: React.FC = () => {
  const { data: users, error, isLoading } = useGetUsersQuery();

  console.log("users:", users);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <div>
      <h2>All Users</h2>
     
    </div>
  );
};

export default UsersList;
