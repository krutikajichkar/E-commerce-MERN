import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema(
  {
    category: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

export const Category = mongoose.model("Category", categoriesSchema);
