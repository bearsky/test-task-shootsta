import API from "../../helpers/APIRequest.js";

export const fetchVideos = () => {
    return async (dispatch) => {
        try {
            const result = await API({ url: `/videos`, method: "GET" })
            dispatch({
                type: 'FETCH_ALL_VIDEOS',
                payload: {
                    result
                }
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const uploadVideo = ({file}) => {
    return async (dispatch) => {
        try {
            const formData = new FormData();
            formData.append('videoFile', file)
            const result = await API({
                url: `/upload`,
                contentType: "multipart/form-data",
                method: "POST",
                data: formData
            })
            dispatch({
                type: 'FETCH_ALL_VIDEOS',
                payload: {
                    result
                }
            })
        } catch (err) {
            console.log(err)
        }
    }
}