import React from "react";
import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";
import Image from "next/image";

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
  // console.log(user);
  return (
    <div className={styles.container}>
      <Image
        src={user.img? user.img : "/noavatar.png"}
        className={styles.avatar}
        width={50}
        height={50}
        alt=""
      />
      <div className={styles.containerUserRight}>
        <span className={styles.detailTitle}>Author</span>
        <span className={styles.detailValue}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
