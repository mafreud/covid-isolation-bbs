import {
  collection,
  doc,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useFirestoreCollectionData, useFirestoreDocData } from "reactfire";
import Feed from "../../../components/Feed";
import Reply from "../../../components/Reply";

export default function Feeds() {
  const router = useRouter();
  const { id } = router.query;

  if (id === undefined || id === null) {
    return <span>loading...</span>;
  }

  return (
    <div className="m-20">
      <Post threadId={id} />

      {/* <Feed sender={"admin"} text={"Hey"} />
      <Feed sender={"admin"} text={"Hey"} />
      <Feed sender={"admin"} text={"Hey"} /> */}
      <Replies threadId={id} />
      <div className="max-w-md mt-10 mx-2">
        <Reply threadId={id} />
      </div>
    </div>
  );
}

function Replies(props: any) {
  // useEffect(() => {
  //   if (props.threadId === undefined) {
  //     return;
  //   }
  // }, []);
  const threadId = props.threadId;
  // if (props.threadId === undefined || props.threadId === null) {
  //   return <p>データを取得中...</p>;
  // }
  const ref = collection(getFirestore(), "replies-v1");
  const q = query(ref, where("threadId", "==", threadId));
  const { status, data: replies } = useFirestoreCollectionData(q);

  if (status === "loading") {
    return <span>loading...</span>;
  }

  return (
    <ul>
      {replies.map((replyData) => (
        <li key={replyData.id}>
          <Feed sender={replyData.username} text={replyData.body} />
        </li>
      ))}
    </ul>
  );
}

function Post(props: any) {
  // if (props.threadId === undefined || props.threadId === null) {
  //   return <p>データを取得中...</p>;
  // }
  const ref = doc(getFirestore(), "threads-v1", props.threadId);
  const { status, data } = useFirestoreDocData(ref);

  if (status === "loading") {
    return <p>データを取得中...</p>;
  }

  return <Feed sender={data.title} text={data.body} />;
}