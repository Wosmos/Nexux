const UserProfile = ({ params }: any) => {
  return (
    <div className="flex flex-col justify-center items-center  min-h-screen">
      <h1 className="text-2xl ">
        profile page :{' '}
        <span className="bg-orange-900 text-yellow-400 p-2  rounded">
          {params.id}
        </span>
      </h1>
    </div>
  );
};

export default UserProfile;
