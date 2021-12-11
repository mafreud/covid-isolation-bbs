import CardHeadings from "../components/CardHeadings";
import Header from "../components/Header";
import StackedList from "../components/StackedList";

export default function Home() {
  return (
    <>
      <Header />
      <div className="m-5">
        <CardHeadings />
        <StackedList />
      </div>
    </>
  );
}
