import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
const Datatable = ({columns}) => {
  // const location = useLocation();
  // const path = location.pathname.split("/")[1];
  const { data, loading, error } = useFetch(`/user`);

  const [list, setList] = useState([]);
  useEffect(() => {
    setList(data);
  }, [data]);


  const handleDelete = (id) => {};

  

  console.log(list)
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    // <div className="datatable">
    //   <div className="datatableTitle">
    //     Add New User
    //     <Link to={`/users/new`} className="link">
    //       Add New
    //     </Link>
    //   </div>
    //   {/* <DataGrid
    //     className="datagrid"
    //     rows={list}
    //     columns={userColumns.concat(actionColumn)}
    //     pageSize={9}
    //     rowsPerPageOptions={[9]}
    //     checkboxSelection
    //     getRowId={(row) => row._id}
    //   /> */}
    // </div>
    <h1>HEllo</h1>
  );
};

export default Datatable;
