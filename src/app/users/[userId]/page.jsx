import { getUserFromId } from "@/app/lib/data";

const UserDetailPage = async({params}) => {
    const {userId} = await params;
    const user = await getUserFromId(userId);
    return (
        <div>
            <h2 className="text-3xl font-bold">User Detail Page</h2>
            <h4>User Name : {user.name}</h4>
        </div>
    );
};

export default UserDetailPage;