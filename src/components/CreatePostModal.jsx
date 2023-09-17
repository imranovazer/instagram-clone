import { Input, Modal, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useContext, useState } from "react";
import { axiosPrivate } from "../axios";
import { useDispatch } from "react-redux";
import { postPost } from "../redux/reducers/userSlice";
import { AlertContex } from "../layouts/AlertLayout";

function CreatePostModal({ open, setOpen }) {
  const { displayAlert } = useContext(AlertContex);
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");
  const handleOk = async () => {
    try {
      dispatch(
        postPost({
          imageUrl: image,
          caption,
          location,
        })
      );
      displayAlert(true, "Post published");
      setOpen((prev) => !prev);
    } catch (error) {
      displayAlert(false, "Unable to post post");
    }
  };

  const handleCancel = () => {
    setOpen((prev) => !prev);
  };
  return (
    <Modal
      okButtonProps={{
        style: {
          backgroundColor: "#279EFF",
        },
      }}
      title="Create post"
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div className="flex flex-col gap-4 mt-4">
        <Input
          placeholder="Image url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <div className="">
          {image ? (
            <img src={image} alt="" srcset="" />
          ) : (
            <h3 className="border border-black p-1 text-center rounded-md  border-dashed">
              Image previev
            </h3>
          )}
        </div>
        <TextArea
          placeholder="Caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          autoSize={{ minRows: 1, maxRows: 4 }}
        />
        <Input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
    </Modal>
  );
}

export default CreatePostModal;
