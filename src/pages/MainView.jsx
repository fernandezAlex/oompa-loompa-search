import { useState, useEffect } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  initialFetchOompaLoompas,
  fetchMoreOompaLoompas,
} from "../actions/oompaLoompaActions";
import { Card } from "./../components/Card";
import { Loading } from "../components/Loading";

export const MainView = () => {
  const [search, setSearch] = useState("");
  const { data, loading, hasMore, error } = useSelector(
    (state) => state.oompaLoompa
  );
  const dispatch = useDispatch();

  const filteredData =
    data &&
    data.filter(
      (item) =>
        item.first_name.toLowerCase().includes(search.toLowerCase()) ||
        item.last_name.toLowerCase().includes(search.toLowerCase()) ||
        item.profession.toLowerCase().includes(search.toLowerCase())
    );

  useEffect(() => {
    dispatch(initialFetchOompaLoompas());
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 100 &&
        hasMore &&
        !loading
      ) {
        dispatch(fetchMoreOompaLoompas());
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, hasMore, loading]);

  return (
    <>
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex mx-auto justify-end mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-neutral-600 rounded-md "
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute right-3 top-3 text-gray-400"
              />
            </div>
          </div>
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Find your Oompa Loompa</h1>
            <p className="text-xl">There are more than 100k</p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {error && <div className="error-message">{error}</div>}
            {filteredData.map((item, index) => (
              <Card
                key={index}
                image={item.image}
                firstName={item.first_name}
                gender={item.gender}
                profession={item.profession}
                id={item.id}
              />
            ))}
          </div>
          {loading && <Loading />}
        </div>
      </div>
    </>
  );
};
