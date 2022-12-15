// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// Up Mongoose 7 standard settings
mongoose.set("strictQuery", false);

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGO_URI;

// mongoose
//   .connect(MONGO_URI)
//   .then((x) => {
//     const dbName = x.connections[0].name;
//     console.log(`Connected to Mongo! Database name: "${dbName}"`);
//   })
//   .catch((err) => {
//     console.error("Error connecting to mongo: ", err);
//   });

// const mongoConnect = () => {
//   return mongoose
//     .connect(MONGO_URI)
//     .then((x) => {
//       const dbName = x.connections[0].name;
//       console.log(`Connected to Mongo! Database name: "${dbName}"`);
//     })
//     .catch((err) => {
//       console.error("Error connecting to mongo: ", err);
//     });
// };

// export const mongoConnect = async () => {
// mongoose.set("strictQuery", false);
// const mongoose = require("mongoose");

//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// }
