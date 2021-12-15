import { collection, getFirestore, orderBy, query } from "firebase/firestore";
import { useFirestoreCollectionData } from "reactfire";
import CardHeadings from "../components/CardHeadings";
import Header from "../components/Header";
import StackedList from "../components/StackedList";

export default function Home() {
  return (
    <>
      <Header />
      <div className="m-5">
        <CardHeadings />
        <ListView />
      </div>
    </>
  );
}

function ListView() {
  const threadsV1Col = collection(getFirestore(), "threads-v1");
  const threadsV1Query = query(threadsV1Col, orderBy("createdAt", "desc"));

  const { status, data: threads } = useFirestoreCollectionData(threadsV1Query, {
    idField: "id", // this field will be added to the object created from each document
  });

  if (status === "loading") {
    return <p>データを取得中...</p>;
  }

  return (
    <ul>
      {threads.map((threadData) => (
        <li key={threadData.id}>
          <StackedList
            title={threadData.title}
            body={threadData.body}
            threadId={threadData.threadId}
          />
        </li>
      ))}
    </ul>
  );
}
