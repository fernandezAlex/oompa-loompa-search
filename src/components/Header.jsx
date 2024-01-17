import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Link to="/">
      <header className="bg-gray-200 py-4">
        <div className="max-w-6xl mx-auto flex items-center">
          <div className="text-1xl font-bold flex items-center">
            <img
              className="mr-4 w-1/6"
              src="https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png"
              alt="Logo"
            />
            Oompa Loompa's Crew
          </div>
          <nav className="ml-auto"></nav>
        </div>
      </header>
    </Link>
  );
};
