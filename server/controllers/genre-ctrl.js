const Genre = require('../models/genre-model');
const mongoose = require('mongoose');
//const router = express.Router();

createGenre =(req, res ) =>{
    const body = req.body

    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide a genre',
    })
}
const genre = new Genre(body)
if (!genre) {
    return res.status(400).json({ success: false, error: err })
}

genre.save()
.then(()=>{
    return res.status(201).json({
        success: true,
        id: genre._id,
        message: 'Genre added!',
    })
})
.catch(error => {
    return res.status(400).json({
        error,
        message: 'Genre not created!',
    })
})
}

module.exports = createGenre;






/*router.get('/', async (req, res) => {
  const genres = await Genre.find().sort('name');
  res.send(genres);
}

);

router.post('/', async (req, res) => {
//const { error } = validate(req.body);
 //if (error) return res.status(400).send(error.details[0].message);

  let genre = new Genre({ name: req.body.name });
  genre = await genre.save();

  res.send(genre);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name }, {
    new: true
  });

  if (!genre) return res.status(404).send('The genre with the given ID was not found.');

  res.send(genre);
});


router.get('/:id', async (req, res) => {
  const genre = await Genre.findById(req.params.id);

  if (!genre) return res.status(404).send('The genre with the given ID was not found.');

  res.send(genre);
});

module.exports = router;*/