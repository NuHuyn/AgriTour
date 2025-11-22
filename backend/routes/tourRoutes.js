const express = require("express");
const router = express.Router();
const tourController = require("../controllers/tourController");
const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "uploads", "tours"));
  },
  filename: function (req, file, cb) {
    const uniqueName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

const upload = multer({ storage });



/**
 * @swagger
 * tags:
 *   name: Tours
 *   description: API for managing tours
 */

/**
 * @swagger
 * /api/tours/admin/all:
 *   get:
 *     summary: Get all tours (Admin only)
 *     tags: [Tours]
 *     responses:
 *       200:
 *         description: List of all tours for admin
 */
router.get("/admin/all", tourController.getAllToursForAdmin);


/**
 * @swagger
 * /api/tours/review/{tour_id}:
 *   put:
 *     summary: Review / Approve / Reject a tour
 *     tags: [Tours]
 *     parameters:
 *       - in: path
 *         name: tour_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the tour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [pending, approved, rejected]
 *               review_note:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tour review updated
 *       404:
 *         description: Tour not found
 */
router.put("/review/:tour_id", tourController.reviewTour);


/**
 * @swagger
 * /api/tours:
 *   get:
 *     summary: Get all tours (public)
 *     tags: [Tours]
 *     responses:
 *       200:
 *         description: List of all tours
 */
router.get("/", tourController.getAllTours);



/**
 * @swagger
 * /api/tours/filter/by-region/{region_id}:
 *   get:
 *     summary: Get tours by region
 *     tags: [Tours]
 *     parameters:
 *       - in: path
 *         name: region_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the region
 *     responses:
 *       200:
 *         description: Tours in selected region
 */
router.get("/filter/by-region/:region_id", tourController.getToursByRegion);


/**
 * @swagger
 * /api/tours/filter/by-category/{category_id}:
 *   get:
 *     summary: Get tours by category
 *     tags: [Tours]
 *     parameters:
 *       - in: path
 *         name: category_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the category
 *     responses:
 *       200:
 *         description: Tours in selected category
 */
router.get("/filter/by-category/:category_id", tourController.getToursByCategory);

/**
 * @swagger
 * /api/tours:
 *   post:
 *     summary: Create a new tour (Partner)
 *     tags: [Tours]
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               region_id:
 *                 type: integer
 *               category_id:
 *                 type: integer
 *               created_by:
 *                 type: integer
 *               image:
 *                 type: string
 *                 format: binary
 *             required:
 *               - name
 *               - price
 *               - region_id
 *               - category_id
 *     responses:
 *       201:
 *         description: Tour created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", upload.single("image"), tourController.createTour);


/**
 * @swagger
 * /api/tours/update/{tour_id}:
 *   put:
 *     summary: Update a tour (Partner)
 *     tags: [Tours]
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: path
 *         name: tour_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the tour to update
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               region_id:
 *                 type: integer
 *               category_id:
 *                 type: integer
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Tour updated successfully
 *       404:
 *         description: Tour not found
 */
router.put("/update/:tour_id", upload.single("image"), tourController.updateTour);



/**
 * @swagger
 * /api/tours/delete/{tour_id}:
 *   delete:
 *     summary: Delete a tour (Partner/Admin)
 *     tags: [Tours]
 *     parameters:
 *       - in: path
 *         name: tour_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the tour
 *     responses:
 *       200:
 *         description: Tour deleted successfully
 *       404:
 *         description: Tour not found
 */
router.delete("/delete/:tour_id", tourController.deleteTour);


/**
 * @swagger
 * /api/tours/{tour_id}:
 *   get:
 *     summary: Get tour details by ID
 *     tags: [Tours]
 *     parameters:
 *       - in: path
 *         name: tour_id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tour details
 *       404:
 *         description: Tour not found
 */
router.get("/:tour_id", tourController.getTourById);

module.exports = router;

