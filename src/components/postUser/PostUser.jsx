import React from "react";
import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";

const getData = async (id) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    { cache: "no-store" }
  );
  if (!result.ok) {
    throw new Error("get user error");
  }
  return result.json();
};

const PostUser = async ({ userId }) => {
  // use API to fetch data
  //const user = await getData(userId);

  // !!! use DATA.js to fetch data
  const user = await getUser(userId);
  //   console.log(user);
  return (
    <div className={styles.container}>
      <p className={styles.detailTitle}>Author</p>
      <p className={styles.detailValue}>{user.username}</p>
    </div>
  );
};

export default PostUser;
