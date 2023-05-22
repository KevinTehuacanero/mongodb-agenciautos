import Task from "../models/Task";

export const renderTasks = async (req, res) => {
  const autos = await Task.find().lean();

  res.render("index", { autos: autos });
};

export const createTask = async (req, res) => {
  try {
    const auto = Task(req.body);

    await auto.save();

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const renderTaskEdit = async (req, res) => {
  try {
    const auto = await Task.findById(req.params.id).lean();

    res.render("edit", { auto });
  } catch (error) {
    console.log(error.message);
  }
};

export const editTask = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndUpdate(id, req.body);

  res.redirect("/");
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndDelete(id);

  res.redirect("/");
};

export const taskToggleDone = async (req, res) => {
  const { id } = req.params;

  const auto = await Task.findById(id);

  auto.done = !auto.done;

  await auto.save();

  res.redirect("/");
};
