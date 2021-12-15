import { doc, getFirestore, setDoc, Timestamp } from "firebase/firestore";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Reply(props: any) {
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");

  return (
    <form action="#" className="relative">
      <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
        <label htmlFor="username" className="sr-only">
          お名前
        </label>
        <input
          onChange={(e) => {
            const value = e.target.value;
            console.log(value);
            setUsername(value);
          }}
          type="text"
          // name="username"
          // id="username"
          className="block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 focus:ring-0"
          placeholder="お名前"
        />
        <label htmlFor="body" className="sr-only">
          本文
        </label>
        <textarea
          onChange={(e) => {
            const value = e.target.value;
            console.log(value);
            setBody(value);
          }}
          rows={2}
          // name="description"
          // id="description"
          className="block w-full border-0 pt-2.5 py-0 resize-none placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="本文"
          defaultValue={""}
        />

        {/* Spacer element to match the height of the toolbar */}
        <div aria-hidden="true">
          <div className="py-2">
            <div className="h-9" />
          </div>
          <div className="h-px" />
          <div className="py-2">
            <div className="py-px">
              <div className="h-9" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-px">
        <div className="border-t border-gray-200 px-2 py-2 flex justify-between items-center space-x-3 sm:px-3">
          {/* <div className="flex">
            <button
              type="button"
              className="-ml-2 -my-2 rounded-full px-3 py-2 inline-flex items-center text-left text-gray-400 group"
            >
              <PaperClipIcon
                className="-ml-1 h-5 w-5 mr-2 group-hover:text-gray-500"
                aria-hidden="true"
              />
              <span className="text-sm text-gray-500 group-hover:text-gray-600 italic">
                Attach a file
              </span>
            </button>
          </div> */}
          <div className="flex-shrink-0">
            <button
              onClick={async () => {
                console.log(username, body);
                const replyId = uuidv4();
                await setDoc(doc(getFirestore(), "replies-v1", replyId), {
                  username: username,
                  body: body,
                  createdAt: Timestamp.now(),
                  replyId: replyId,
                  threadId: props.threadId,
                });
              }}
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              返信
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
