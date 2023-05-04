const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll().then((categoryData)=>{
    res.json(categoryData);
  })
  .catch((err)=>{
    console.log(err);
    res.status(500).json({ msg: 'Error occurred', err})
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id).then((categoryData) => {
    res.json(categoryData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({ msg: "error occurred", err });
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(
    req.body
).then(newCategory=>{
    res.json(newCategory)
}).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err})
})
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    req.body
,{
    where:{
        id:req.params.id
    }
}).then((editCategory) => {
    res.json(editCategory);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({ msg: "error occurred", err });
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where:{
        id:req.params.id
    }
}).then((delCategory) => {
    res.json(delCategory);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({ msg: "error occurred", err });
  });
});

module.exports = router;
