import Link from "next/link";
// import styleTest from "../styles/style-test";
import styleTestScss from "../styles/test.scss";
import { ToastContainer, toast } from "react-toastify";
// import styleToast from "react-toastify/dist/ReactToastify.css"; // testing node_modules css

const pageIndex = () => {
  const notify = () => toast("Wow so easy !");

  return (
    <div>
      <style jsx scoped>
        {styleTestScss}
      </style>
      <ToastContainer />
      Hello World. <div className="test">test me</div>
      <button onClick={notify}>Notify !</button>
      {/* <ToastContainer /> */}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
};

export default pageIndex;
