import { useEffect, useRef, useState } from "react";

export const usePagination = (initialData, getData) => {
  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const observeElementRef = useRef();

  const onSerchQuery = async (query) => {
    setLoader(true);
    const songs = await getData({ query });
    setData(songs);
    setCurrentPage(1);
    setLoader(false);
  };

  const callApiForPagination = async (query) => {
    setLoader(true);
    const data = await getData({ query, page: currentPage + 1 });
    setData((prev) => {
      return {
        paginate: data.paginate,
        results: [...prev.results, ...data.results],
      };
    });
    setCurrentPage((prev) => prev + 1);
    setLoader(false);
  };

  const paginationObserver = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting && !loader && data.paginate) {
      const query = document.getElementsByClassName("search-input")[0].value;
      observeElementRef.current.unobserve(entry.target);
      const name = query !== "" ? query : "latest english";
      callApiForPagination(name);
    }
  };

  useEffect(() => {
    if (data.results.length > 0) {
      const intersectionObserver = new IntersectionObserver(paginationObserver);
      observeElementRef.current = intersectionObserver;
      const spacer = document.getElementById("observer");
      observeElementRef.current.observe(spacer);

      return () => intersectionObserver.disconnect();
    }
  }, [data]);

  return [data, loader, onSerchQuery];
};
