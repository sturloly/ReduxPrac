// action creator
export const selectUser = (user) => {
  console.log("a user is clicked", user.name);

  // a action >>
  return {
    type: "USER_SELECTED",  // object type
    payload:user    // name can be anything (payload -- convention)
  }
};
