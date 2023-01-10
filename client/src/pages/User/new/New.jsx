import "./new.scss";

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import Sidebar from "../../../Components/sidebar/Sidebar";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    let uploadRes;
    let url =
      "https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg";
    if (file !== "") {
      data.append("file", file);
      data.append(
        "upload_preset",
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
      );
      data.append("api_key", process.env.REACT_APP_CLOUDINARY_API_KEY);
      try {
        uploadRes = await axios.post(
          process.env.REACT_APP_CLOUDINARY_URL,
          data
        );
        url = uploadRes.data.url;
      } catch (err) {
        console.log("err in uploading to cloudinary ", err);
      }
    }

    try {
      const newUser = {
        ...info,
        img: url ? url : "No image",
      };

      await axios.post("/auth/register", newUser);
      console.log("user created");
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                  />
                </div>
              ))}
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
