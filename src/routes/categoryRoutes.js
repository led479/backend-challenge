module.exports = (app) => {
  const categoryController = require('../controllers/categoryController');

  app.route('/categories')
    .get(categoryController.list_all_categories)
    .post(categoryController.checkChildren, categoryController.create_a_category)

  app.route('/categories/:id')
    .get(categoryController.read_a_category)
}
