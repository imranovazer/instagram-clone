import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { LiaCommentAlt } from "react-icons/lia";
import { BsSend } from "react-icons/bs";

<<<<<<< HEAD
export default function PostButtons({
  incrementLikes,
  decrementLikes,
  liked,
  setLiked,
}) {
  const toggleLiked = () => {
    setLiked(!liked);
    if (liked) {
      decrementLikes();
    } else {
      incrementLikes();
    }
  };

=======
export default function PostButtons({ liked, toggleLiked }) {
>>>>>>> new-components
  return (
    <div className="flex ">
      <button className="text-2xl mr-2" onClick={toggleLiked}>
        {liked ? <IoMdHeart style={{ color: "red" }} /> : <IoMdHeartEmpty />}
      </button>
      <button className="text-2xl  p-2">
        <LiaCommentAlt />
      </button>
      <button className="text-lg p-2">
        <BsSend />
      </button>
    </div>
  );
}
