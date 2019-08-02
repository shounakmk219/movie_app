let router=require('express').Router();
let MoviesController=require('./moviesController');
router.get('/',(req,res)=>{
    res.json({
        status : 'API is working',
        message : 'Welcome to REST api'
    })
})

router.route('/movies').post(MoviesController.create);
router.route('/movies/list').get(MoviesController.listAll);
router.route('/movies/:id').post(MoviesController.findById);
router.route('/movies/:name').delete(MoviesController.deleteMovie);

module.exports = router;