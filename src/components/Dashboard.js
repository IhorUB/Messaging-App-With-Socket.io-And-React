import Sidebar from "./Sidebar";

export default function Dashboard({ id }) {
  return (
    <div className="d-flex h-100vh">
      <Sidebar id={id} />
    </div>
  );
}
