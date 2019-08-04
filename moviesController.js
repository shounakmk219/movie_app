let Movie = require('./movieModel');
exports.create = function(req,res){
    let movie=new Movie();
    movie.name= req.body.name;
	movie.director= req.body.director;
	movie.duration= req.body.duration;
	movie.rating= req.body.rating;
    movie.save(function(err){
        res.json({
            status : 'Success',
            data : movie
        })
    })
    
};

exports.listAll = function(req,res){
    Movie.find(function(err,list){
        if(err)
            console.log(`error: ${err}`)
        res.json({
            status : 'Success',
            data : list
        })
    })

};

exports.findById = function(req,res){
    Movie.findById(req.params.id,function(err,movie){
        if(err){
            console.log('aee error ala');
            res.json({
                status : 'Error',
                cause : err
            })
        }
        else{
            res.json({
                status : 'Success',
                data : movie
            })
        }
    })

};

exports.deleteMovie = function(req,res){
    Movie.remove({name:req.params.name},function(err,movie){
        if(err){
            console.log('aee error ala');
            res.json({
                status : 'Error',
                cause : err
            })
        }
        else{
            res.json({
                status : 'Success',
                data : movie
            })
        }
    })

};
