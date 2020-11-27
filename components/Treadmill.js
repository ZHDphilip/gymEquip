import Link from 'next/link'
//import fetch from 'isomorphic-unfetch'
//import { getServerSideProps } from '../pages/index'
//import handler from '../pages/api/writeToDatabase'
//
// function Treadmill({ treadmill }) {
//   return (
//     <div>
//         <button className="TreadmillButton"
//           onClick={()=> fetch ("https://gymTracker.zihaodong.repl.co/api/writeToDatabase", {
//             method: 'POST', 
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: {
//               name: treadmill.name,
//               _id: treadmill._id,
//               action: treadmill.status===1 ? "occupy" : "like"
//               },
//             })}>
//           <div>{treadmill.name}</div>
//           <div>Status: {treadmill.status===1?"free":"occupied"}</div>
//         </button>
//       <style jsx>{`
//         .TreadmillButton {
//           background: #99ccff;
//           width: 100px;
//           height: 60px;
//           margin-top: 5px;
//           margin-left: 5px;
//           margin-right: 5px;
//         }
//         .TreadmillButton:hover {
//           background: #3399ff;
//         }
        
//       `}</style>
//       </div>
//   )
  // return (
  //   // <li>
  //   //   <Link href="/treadmill/[id]" as={`/treadmill/${treadmill.id}`}>
  //   //     <a>Treadmill No.{treadmill.id}</a>
  //   //   </Link>
  //   //   <button onClick={()=>window.alert(treadmill.status==="free" ? "Occupied Treadmill.":"Liked usr's exercise")}>
  //   //     {treadmill.status==="free" ? "Occupy" : "like"}
  //   //   </button>
  //   // </li>
  // )
// }

// export default Treadmill;