import { connect } from "mongoose";

( async () => {
  try {
    const db = await connect("mongodb://localhost/agenciautos");
    console.log("DB connected to", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
