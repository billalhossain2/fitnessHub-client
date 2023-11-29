import React, { useEffect, useState } from "react";
import useTitle from "../../../../hooks/useTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Spinner from "../../../../components/Spinner";

const ManageMembers = () => {
  useTitle("FitnessHub | Manage Members");
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [bookedMembers, setBookedMembers] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axiosSecure
      .get(`members-booked?trainerEmail=${user?.email}`)
      .then((res) => {
        setBookedMembers(res.data);
        setLoading(false)
      });
  }, [user, axiosSecure]);

  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-600 mb-2">Manage Members</h3>

      {
        loading ? <Spinner></Spinner> :<div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {bookedMembers?.map((member, index) => (
              <tr className="bg-base-200">
                <th>{index+1}</th>
                <td>{member.memberName}</td>
                <td>{member.memberEmail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      }
    </div>
  );
};

export default ManageMembers;
