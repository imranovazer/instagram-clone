import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useContext, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../redux/reducers/postModalSlice";
import UserInfo from "../UserInfo";

import { AlertContex } from "../../layouts/AlertLayout";
import { commentPost } from "../../redux/reducers/homeFeedSlice";
import { deletePost } from "../../redux/reducers/userSlice";

function PostModal({ postData, setPostData }) {
  const { displayAlert } = useContext(AlertContex);
  const [text, setText] = useState("");
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const handlePostDelete = () => {
    try {
      dispatch(deletePost(postData.postId));
      dispatch(toggleModal());
      displayAlert(true, "Post deleted");
    } catch (error) {
      displayAlert(false, "Unable to delete post");
    }
  };
  const handleComment = async () => {
    try {
      dispatch(commentPost({ postId: postData.postId, text }));
      setPostData((prev) => ({
        ...prev,
        comments: [...prev.comments, { authorUsername: user.username, text }],
      }));
      // const res = await postModalApi.addComment(postData.postId, text);
      displayAlert(true, "Comment published");

      setText("");
    } catch (error) {
      displayAlert(false, "Unable to comment");
    }
  };
  const closeMod = () => {
    dispatch(toggleModal());
  };
  return (
    <div
      onClick={closeMod}
      className="fixed 	 p-5 top-0 left-0 w-full min-h-screen bg-black/30 flex  justify-center items-center "
    >
      <button
        className="absolute top-[10px] right-[10px] text-white text-[30px]"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(toggleModal());
        }}
      >
        <RxCross2 />
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full transition-opacity max-h-[678px]  max-w-[1140px] bg-white  flex"
      >
        <img src={postData?.imageUrl} className="object-cover w-3/5" alt="" />

        <div className="w-2/5 flex flex-col justify-between ">
          <div className="w-full h-full p-3">
            <div className="flex items-center justify-between w-full">
              <UserInfo userName={postData.authorUsername} />
              {postData.authorUsername === user.username && (
                <Button onClick={handlePostDelete}>Delete</Button>
              )}
            </div>
            <hr />
            <ul className="overflow-y-auto overflow-x-hidden w-full h-[500px] flex flex-col p-2 gap-2">
              {postData.caption && (
                <li>
                  <UserInfo userName={postData.authorUsername} />

                  {postData.caption}
                </li>
              )}
              {postData.comments &&
                postData.comments.map((item, index) => (
                  <li key={index}>
                    <UserInfo userName={item.authorUsername} />

                    {item.text}
                  </li>
                ))}
            </ul>
          </div>
          <div className="p-3  flex items-center gap-2">
            <TextArea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Add a comment..."
              autoSize={{ maxRows: 3, minRows: 1 }}
            />
            <Button onClick={handleComment} className="max-[300px]">
              Post{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostModal;
