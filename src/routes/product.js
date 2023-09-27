const express = require("express");
const productSchema = require("../models/product");

const router = express.Router();

// get all products
router.get("/products", (req, res) => {
  productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Ruta para buscar un producto por el atributo "ide"
router.get("/products/:ide", (req, res) => {
  const ide = req.params.ide;
  productSchema
    .findOne({ ide: ide }) // Busca un producto con el atributo "ide" igual al valor proporcionado
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ message: "Producto no encontrado" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});


// Ruta para buscar un producto por el atributo "ram" con un número específico
router.get("/products/ram/:ram", (req, res) => {
  const ram = req.params.ram;

  // Utiliza una expresión regular que busque solo números exactos en el atributo "ram"
  productSchema
    .find({ ram: new RegExp(`\\b${ram}\\b`, "i") })
    .then((data) => {
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.status(404).json({ message: "Producto no encontrado" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

// Ruta para buscar un producto por el atributo "camera" con un número específico
router.get("/products/camera/:camera", (req, res) => {
  const camera = req.params.camera;

  // Utiliza una expresión regular que busque solo números exactos en el atributo "ram"
  productSchema
    .find({ camera: new RegExp(`\\b${camera}\\b`, "i") })
    .then((data) => {
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.status(404).json({ message: "Producto no encontrado" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

// Ruta para buscar un producto por el atributo "screen" con valor exacto
router.get("/products/screen/:screen", (req, res) => {
  let screen = req.params.screen;

  // Si el parámetro no incluye "PULGADAS", agrega automáticamente " PULGADAS" al final
  if (!screen.includes("PULGADAS")) {
    screen += " PULGADAS";
  }

  // Utiliza una expresión regular que busca el valor exacto en el atributo "screen"
  productSchema
    .find({ screen: new RegExp(`^${screen}$`, "i") })
    .then((data) => {
      if (data && data.length > 0) {
        // Si se encuentran productos, los envía en la respuesta
        res.json(data);
      } else {
        // Si no se encuentran productos, devuelve un mensaje de error
        res.status(404).json({ message: "Producto no encontrado" });
      }
    })
    .catch((error) => {
      // Manejo de errores
      res.status(500).json({ message: error });
    });
});


module.exports = router;
