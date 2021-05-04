import React, { useState } from "react";
import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "MccE42w65OvxBsO09gSwDB8Swqu9apnazEVVjuG-E0w",
  headers: { "X-Custom-Header": "foo" },
  //...other fetch options
});

unsplash.photos.get(
  { photoId: "123" },
  // `fetch` options to be sent only with _this_ request
  { headers: { "X-Custom-Header-2": "bar" } }
);

const controller = new AbortController();
const signal = controller.signal;

unsplash.photos.get({ photoId: "123" }, { signal }).catch((err) => {
  if (err.name === "AbortError") {
    console.log("Fetch aborted");
  }
});

controller.abort();

const browserApi = createApi({
  apiUrl: "https://mywebsite.com/unsplash-proxy",
  //...other fetch options
});

export default function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);

  const searchPhotos = async (e) => {
    e.preventDefault();
    unsplash.search.getPhotos({
        query: query,
      }).then((result) => {console.log(result)});
  };

  return (
    <div>
      <form className="form" onSubmit={searchPhotos}>
        <label className="label" htmlFor="query">
          {" "}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "dog" or "apple"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">{pics.map((pic) => pic.id)}</div>
    </div>
  );
}
