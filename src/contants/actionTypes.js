// export const FETCH_TRENDING = "FETCH_TRENDING";
// export const FETCH_NETFLIX_ORIGINALS = "FETCH_NETFLIX_ORIGINALS";
// export const FETCH_TOP_RATED = "FETCH_TOP_RATED";
// export const FETCH_ACTION_MOVIES = "FETCH_ACTION_MOVIES";
// export const FETCH_COMEDY_MOVIES = "FETCH_COMEDY_MOVIES";
// export const FETCH_HORROR_MOVIES = "FETCH_HORROR_MOVIES";
// export const FETCH_ROMANCE_MOVIES = "FETCH_ROMANCE_MOVIES";
// export const FETCH_DOCUMENTARIES = "FETCH_DOCUMENTARIES";

export const FETCH_LABELS = "FETCH_LABELS";
export const ADD_LABEL = "ADD_LABEL";
export const DELETE_LABEL = "DELETE_LABEL";
export const ADD_MEMO_TO_LABEL = "ADD_MEMO_TO_LABEL";
export const DELTE_MEMO_FROM_LABEL = "DELTE_MEMO_FROM_LABEL";
export const UPDATE_MEMO_FROM_LABEL = "UPDATE_MEMO_FROM_LABEL";

export const FETCH_MEMO = "FETCH_MEMO";
export const ADD_MEMO = "ADD_MEMO";
export const UPDATE_MEMO = "UPDATE_MEMO";

// 필요한 API
/**
 * 1. 라벨추가 (POST)
 * localhost:3002/labels
 * {
	"title": "title"
    }
 * 
 * 2. 라벨 삭제 (DELETE)
 * localhost:3002/labels/5ddf1e384c81292f8c81938f
 * 
 * 3. 라벨 이름 변경 (PUT)
 * localhost:3002/labels/5ddf1e9c4c81292f8c819394
 *   {
	"title": "title"
    }

 * 4. 메모를 라벨에 추가하기 (POST)
 localhost:3002/labels/5ddf1e994c81292f8c819390/memos
 {
	"memoIds": ["5ddf050334403f358c8b996b"],
	"title": "zzzzzz",
	"content": "zzzzzzzzzz"
}
 * 5. 메모를 라벨에서 삭제하기 (DELTE)
 localhost:3002/labels/5ddf1e994c81292f8c819390/memos
 {
	"memoIds": ["5ddf050334403f358c8b996b"],
	"title": "zzzzzz",
	"content": "zzzzzzzzzz"
}
 * 6. 전체 라벨 가져오기 (GET)
 * localhost:3002/labels
 * 
 * 7. 메모 가져오기 (GET)
 * localhost:3002/memos
 * 
 * 6. 특정 메모 가져오기 (GET)
 *  * localhost:3002/memos/id
 * 7. 특정 메모 지우기 (DELETE)
 *  *  * localhost:3002/memos/id
 * 8. 특정 메모 변경하기 (PUT)
 *  *  * localhost:3002/memos/id
 * {title, content}
 */
