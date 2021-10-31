import useLocalStorage from "./useLocalStorage";
import { useSelector } from "react-redux";
import { useMemo } from "react";

export default function useViewedHistory(storePartition, id) {
  const overallKnivesList = useSelector(
    (state) => state[storePartition].knives
  );
  const [viewedPagesList, setViewedPagesList] = useLocalStorage(
    storePartition,
    []
  );

  if (!Array.isArray(viewedPagesList)) setViewedPagesList([]);
  let bufferForHistory = [...viewedPagesList];

  if (!viewedPagesList.includes(Number(id))) {
    bufferForHistory.unshift(Number(id));
    if (bufferForHistory.length > 10)
      bufferForHistory = bufferForHistory.slice(0, 10);
    setViewedPagesList(bufferForHistory);
  } else {
    if (bufferForHistory[0] !== Number(id)) {
      bufferForHistory = bufferForHistory.filter(
        (entryId) => entryId !== Number(id)
      );
      bufferForHistory.unshift(Number(id));
      setViewedPagesList(bufferForHistory);
    }
  }

  const knivesHistoryData = useMemo(() => {
    const result = [];
    viewedPagesList.forEach((knifeId) => {
      const entry = overallKnivesList.find((entry) => entry.id === knifeId);
      if (entry) result.push(entry);
    });
    return result;
  }, [viewedPagesList]);

  return knivesHistoryData;
}
