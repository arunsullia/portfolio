// import db from "../config/fbconfig";

export const sendQuery = (data) => {
  return new Promise((resolve, reject) => {
    resolve({
      status: 200,
      data: [],
    });
    // db.collection("todos")
    // .add({
    //   name: newTodo,
    //   pending: true,
    //   createAt: new Date(),
    // })
    // .catch((err) => {
    //   reject(err);
    // });
  });
};
