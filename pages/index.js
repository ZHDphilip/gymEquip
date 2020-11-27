//import Treadmill from '../components/Treadmill'
import { connectToDatabase } from '../util/mongodb'
import Link from 'next/link'

/* pass in data from user and define the display structure of Treadmill*/
function Treadmill({ treadmill }) {
  return (
    <div>
        <button className={treadmill.status===1 ? "treadmillFree" : "treadmillOccupied"}
          onClick={() => fetch("https://gymTracker.zihaodong.repl.co/api/writeToDatabase", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: treadmill.name,
              _id: treadmill._id,
              likedBy: treadmill.Liked_By,
              action: treadmill.status === 1 ? "occupy" : "like",
              password: "n/a",
              }),
            })}>
          <div>{treadmill.name}</div>
        </button>
        <li className="treadInfo">Status: {treadmill.status===1?"free":"occupied"}</li>
        <li className="treadInfo">Powered Up By {treadmill.Liked_By} Users</li>
        <br />
      <style jsx>{`
        .treadmillFree {
          background: #99ccff;
          width: 100px;
          height: 60px;
          margin-top: 5px;
          margin-left: 5px;
          margin-right: 5px;
        }
        .treadmillFree:hover {
          background: #3399ff;
        }
        .treadmillOccupied {
          background: #ffff99;
          width: 100px;
          height: 60px;
          margin-top: 5px;
          margin-left: 5px;
          margin-right: 5px;
        }
        .treadmillOccupied:hover {
          background: #ffff00;
        }
        .treadInfo {
          margin-left: 20px;
          color: #0000ff;
        }
      `}</style>
    </div>
  )
}

/* Styling and formating the page */ 
export default function equipments({ data }) {
  console.log(data)
  return (
    // <button onClick={() => (window.alert("occupy treadmill"))}>
    //   "Treadmill 1"
    <div>
      <h1>
        <div className="UCLA">UCLA</div>
        <div className="Title"> Treadmills At JWC</div>
        <button className="loginButton">
          <Link href="./logIn/login">
            Log In
          </Link>
        </button>
      </h1>
      <div>
        {data.map((treadmill) => (
          <Treadmill key={treadmill._id} treadmill={treadmill}/>
       ))}
      </div>
      /* Drop List allowing users to search for historical data */
      /* img className="JWC" src="/images/JWC.jpg" */
      <style jsx>{`
        h1 {
          background: #3399ff;
          color: #ffffff;
        }
        .Title {
          padding-left: 5px;
        }
        .loginButton {
          background: #ffff00;
          position: absolute;
          top: 25px;
          right: 25px;
          width: 80px;
          height: 35px;
        }
        .loginButton:hover {
          background: #3399ff;
        }
        Link {
          color: #000000;
        }
        .JWC {
          position: absolute;
          top: 120px;
          right: 20px;
          height: 800px;
          width: 500px;
        }
        .UCLA {
          font-style: italic;
          color: #ffff00;
        }
      `}</style>
    </div>
  )
}

/* Get data from mongodb Database so that it can be displayed */
export async function getServerSideProps(){
  const { db } = await connectToDatabase()
  const data = await db
    .collection("Treadmills")
    .find()
    .sort({name: 1})
    .toArray()
  
  // const data = collection.json()
  console.log(data)
  // console.log(data)
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    }
  }
}

/////////////////////////////////////////////////////////////////////////////11_18_2020/////////////////////////////////////////////////////////////////////////////////////////////
/*
export async function createTreadmill(client, treadmill){
  const { db } = await connectToDatabase()
  const result = await db
    .collection("Treadmills")
    .insertOne(treadmill);
  console.log(`New Treadmill created with the following id: ${result.insertedId}`);
}

export async function createTreadmills(newTreadmills){
  const { db } = await connectToDatabase()
  const result = await db.collection("Treadmills").insertMany(newTreadmills);
  console.log(`${result.insertedCount} new treadmill(s) created with the following id(s):`)
  console.log(result.insertedIds);
}

export async function upsertTreadmill(treadmill, updatedTreadmill) 
//update if exists, insert if not
{
  const { db } = await connectToDatabase()
  const result = await db
    .collection("Treadmills")
    .updateOne({ name: treadmill },
              { $set: updatedTreadmill },
              { upsert: true });
    console.log(`${result.matchedCount} Treadmill(s) matched the name.`);

  if (result.upsertedCount > 0) {
      console.log(`One treadmill was inserted with the id ${result.upsertedId._id}`);
  } else {
      console.log(`${result.modifiedCount} treadmill(s) was/were updated.`);
  }
}

export async function updateTreadmill(treadmill, updatedTreadmill) 
//only update, no insertion
{
  const { db } = await connectToDatabase()
  const result = await db
        .collection("Treadmills")
        .updateOne({ name: treadmill }, 
        { $set: updatedTreadmill });
  console.log(`${result.matchedCount} document(s) matched the query criteria.`);
  console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

export async function deleteTreadmills(treadmills) 
//delete all treadmills with a specific name
{
  const { db } = await connectToDatabase()
  result = await db.collection("Treadmills")
          .deleteMany({ "name": treadmills });
  console.log(`${result.deletedCount} document(s) was/were deleted.`);
}
*/