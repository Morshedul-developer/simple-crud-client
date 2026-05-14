import UsersTable from "../components/UsersTable";
import { deleteUser } from "../lib/actions";
import { getUsers } from "../lib/data";

const UsersPage = async () => {
    const users = await getUsers();
    return (
        <div className="px-50 pt-5 space-y-5">
            <h1 className="text-4xl font-bold">User Management</h1>
            <p className="text-xl font-semibold">Total users : {users.length}</p>
            <UsersTable users={users} deleteUserAction={deleteUser}></UsersTable>
        </div>
    );
};

export default UsersPage;