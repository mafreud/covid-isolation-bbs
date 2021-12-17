import { doc, getFirestore, setDoc, Timestamp } from "firebase/firestore";
import { useForm, SubmitHandler } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

type Inputs = {
  username: string;
  body: string;
};

export default function Reply(props: any) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const replyId = uuidv4();
    await setDoc(doc(getFirestore(), "replies-v1", replyId), {
      username: data.username,
      body: data.body,
      createdAt: Timestamp.now(),
      replyId: replyId,
      threadId: props.threadId,
    });
  };

  console.log(watch("username"));
  console.log(watch("body")); // watch input value by passing the name of it

  return (
    <form action="#" className="relative" onSubmit={handleSubmit(onSubmit)}>
      <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
        <label htmlFor="username" className="sr-only">
          お名前
        </label>
        <input
          {...register("username")}
          type="text"
          className="block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 focus:ring-0"
          placeholder="お名前"
        />
        <label htmlFor="body" className="sr-only">
          本文
        </label>
        <textarea
          {...register("body")}
          rows={2}
          className="block w-full border-0 pt-2.5 py-0 resize-none placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="本文"
          defaultValue={""}
        />

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
          <div className="flex-shrink-0">
            <button
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
