const express = require("express");
const router = express.Router();

const MenuItem = require("./../models/menuitem");

// menu items..................................................
router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const newitem = new MenuItem(data);

    // save newPerson to the database
    const response = await newitem.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal Server Error" });
  }
});

router.get("/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType;
    if (tasteType == "sweet" || tasteType == "spicy" || tasteType == "sour") {
      const data = await MenuItem.find({ taste: tasteType });
      console.log("data fetched");
      res.status(200).json(data);
    } else {
      res.status(400).json({ err: "Invalid taste Type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal Server Error" });
  }
});

  router.put("/:id", async (req, res) => {
    try {
      const menuId = req.params.id;
      const updatedMenuData = req.body;
      const response = await Person.findByIdAndUpdate(
        menuId,
        updatedMenuData,
        {
          new: true,
          runValidators: true,
        }
      );
      if (!response) {
        return res.status(404).json({ error: "menu not found" });
      }
      console.log("menu data updated");
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: "Internal Server Error" });
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const menuId = req.params.id;
      const response = await MenuItem.findByIdAndDelete(menuId);
      if (!response) {
        return res.status(404).json({ error: "menu not found" });
      }
      console.log("menu data deleted");
      res.status(200).json({message: 'menu data deleted successfully'});
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: "Internal Server Error" });
    }
});

module.exports = router;
