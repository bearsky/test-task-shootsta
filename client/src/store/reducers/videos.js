const initialState = []

function videos(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_ALL_VIDEOS':
          return [...action.payload.result.data]
        default:
          return state
      }
}

export default videos
