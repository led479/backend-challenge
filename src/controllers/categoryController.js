const mongoose = require('mongoose')
const Category = mongoose.model('Categories')

const filterObjectIdAndVersionKey = '-_id -__v'

exports.list_all_categories = (req, res) => {
  Category.paginate({}, req.body)
    .then(categories => {
      res.json(categories)
    })
    .catch(error => {
      res.status(500).send(error)
    })
}

exports.checkChildren = (req, res, next) => {
  const childrenIds = req.body.childrenIds
  Category.find({ id: { $in: childrenIds } })
    .then(children => {
      if (children.length == childrenIds.length) {
        next()
      } else {
        res.status(422).json({ ok: false, error: "InvalidCategories" })
      }
    })
    .catch(error => {
      res.status(500).send(error)
    })
}

exports.create_a_category = (req, res) => {
  let new_category = new Category(req.body)
  new_category.save()
    .then(() => {
      res.status(201).json({ ok: true })
    })
    .catch(error => {
      res.status(422).send(error)
    })
}

exports.read_a_category = (req, res) => {
  Category.findOne({ id: req.params.id }, filterObjectIdAndVersionKey)
    .then(category => {
      if (category) {
        res.json(category)
      } else {
        res.status(404).json( { ok: false, error: 'Not found' })
      }
    })
    .catch(error => {
      res.status(500).send(error)
    })
}


