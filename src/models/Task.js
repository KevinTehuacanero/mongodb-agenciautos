import { Schema, model } from "mongoose";

const autosSchema = new Schema(
  {
    marca:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    modelo:{
        type: String,
        required: true,
    },
  
    color:{
        type: String,
        required: true,
    },
    precio:{
        type: String,
        required: true,
    },
    done:{
        type: Boolean,
        default: false
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("Auto", autosSchema);
