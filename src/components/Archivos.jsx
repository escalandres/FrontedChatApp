// import "./styles.css";
import axios from 'axios'
import fileDownload from 'js-file-download'
export default function Archivos() {
    // const url = 'https://avatars.githubusercontent.com/u/9919?s=280&v=4';
    const url = 'http://localhost:3000/';
    const filename = 'Tour.png';
  const handleClick = () => {
    axios.get(url, {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, filename)
    })
  }
  return (
    <div className="App">
      <button onClick={handleClick}>
        Download the File</button>
    </div>
  );
}