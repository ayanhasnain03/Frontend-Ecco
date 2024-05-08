import moment from "moment";
import {
  useAllUsersQuery,
  useDeleteUserMutation,
  useUpdateUserRoleMutation,
} from "../../redux/api/adminUserApi";
import toast from "react-hot-toast";
import Loader from "../../components/Loader";

const UserManagement = () => {
  const { data } = useAllUsersQuery();
  const [updateUserRole] = useUpdateUserRoleMutation();
  const [deleteUser, { isLoading }] = useDeleteUserMutation();
  const changeUsersRole = async (id) => {
    if (window.confirm("Are You Sure")) {
      const res = await updateUserRole({ id }).unwrap();
      toast.success(res?.message);
    }
  };

  const deleteUserHandler = async (id) => {
    if (window.confirm("Are You Sure")) {
      const res = await deleteUser({ id }).unwrap();
      toast.success(res?.message);
    }
  };
  return (
    <div className=" h-full w-full flex flex-col items-center gap-20">
      {isLoading ? (
        <Loader length={20} />
      ) : (
        <div className="h-[100%] w-full  flex-row items-center p-2 ">
          {data?.user.map((users) => (
            <div className="flex md:flex-row flex-col  items-center md:justify-around md:gap-5 gap-2">
              <div>
                <img
                  src={users.avatar.url}
                  alt=""
                  className="h-[5rem] w-[5rem] overflow-hidden mb-5"
                />
              </div>
              <div>
                <h1>{users.username}</h1>
              </div>
              <div>
                <h1>Email:{users.email}</h1>
              </div>
              <div>
                <h1>Gender:{users.gender}</h1>
              </div>
              <div>
                <h1>Dob:{users.dob}</h1>
              </div>
              <div>
                <h1>Role:{users.role}</h1>
              </div>
              <div>
                <h1>CreatedAt:{moment(users.createAt).format("l")}</h1>
              </div>
              <div>
                <button
                  onClick={() => changeUsersRole(users._id)}
                  className="mr-6 mt-5 md:mt-1
  w-[5rem] text-center rounded-md bg-[#F30000]  py-1.5 text-sm font-semibold  text-white shadow-sm hover:bg-[#f30000e7] 
      "
                >
                  Update
                </button>
                <button
                  onClick={() => deleteUserHandler(users._id)}
                  className="mr-6
  w-[5rem] text-center rounded-md bg-[#F30000]  py-1.5 text-sm font-semibold  text-white shadow-sm hover:bg-[#f30000e7] 
      "
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default UserManagement;
