import { BookActionCardCollection as UIBookActionCardCollection } from "../../ui-components";
import bookCollectionOverrides from "./bookCollectionOverrides";

const BookCollection: React.FC = () => {
  return <UIBookActionCardCollection overrides={bookCollectionOverrides} />;
};

export default BookCollection;
