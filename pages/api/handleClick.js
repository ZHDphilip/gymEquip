//import { getServerSideProps } from '../pages/index'

export default function handleClick(method, _id, name, data) {
  const msg = fetch("https://gymTracker.zihaodong.repl.co/api/writeToDatabase", {
            method: method,
            name: name,
            id: _id,
            data: data,
            // body: JSON.stringify(data)
          })
  //getServerSideProps();
}