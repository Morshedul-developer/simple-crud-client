import AddUserModal from "../components/AddUserModal";
import UsersTable from "../components/UsersTable";
import { createUser, deleteUser } from "../lib/actions";
import { getUsers } from "../lib/data";

const UsersPage = async () => {
    const users = await getUsers();
    return (
        <div className="px-50 pt-5 space-y-5">
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold">User Management</h1>
                <AddUserModal createUserAction={createUser}></AddUserModal>
            </div>
            <p className="text-xl font-semibold">Total users : {users.length}</p>
            <UsersTable users={users} deleteUserAction={deleteUser}></UsersTable>
        </div>
    );
};

export default UsersPage;