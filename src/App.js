import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./Components/Table/Table";

export default function App() {
  const [artworkList, setArtworkList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        const res = await axios.get(
          "https://api.artic.edu/api/v1/artworks?fields=id,title,date_display,artist_titles"
        );
        setArtworkList(res.data.data);
      } catch (err) {
        console.log(err);
        setError("Error fetching artwork at this time.");
      }
    };
    fetchArtwork();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div className="App">
      <h1>Chicago Institute of Art – Works of Art</h1>
      <p>
        Render list of artwork in table format showing: Artwork Title, Artist
        Name and Display Date. Table should allow for deleting individual rows
        and sorting by date.
      </p>
      <Table data={artworkList}/>
    </div>
  );
}
