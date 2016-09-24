export function fetchUser() {
  return {
    type: "FETCH_USER_FULLFILLED",
    payload: {
      name: "Will",
      age: 35,
    }
  }
}
