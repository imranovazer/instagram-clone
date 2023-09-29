import { axiosPrivate } from "../axios"

export const getUserFeed = async () => {

    try {

        const res = await axiosPrivate.get('/user/feed');
        return res.data;

    } catch (error) {
        console.log(error);
    }
}
export const getUserInfo = async (username) => {
    try {
        const res = await axiosPrivate.get(`/user?username=${username}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const likePost = async (postId) => {


    const res = await axiosPrivate.post(`/post/like`, {
        postId
    })
    return res.data

}
export const removeLike = async (postId) => {
    try {
        const res = await axiosPrivate.delete(`/post/like?postId=${postId}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}


export const commentPost = async ({ postId, text }) => {

    const res = await axiosPrivate.post('/post/comment', {
        postId, text
    })

    return [res.data.data, postId];

}
export const deleteComment = async (commentId) => {
    try {
        const res = await axiosPrivate.delete(`/post/comment?commentId=${commentId}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
