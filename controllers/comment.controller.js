const Validator = require('fastest-validator');
const models = require('../models')

function save(req, res) {
    const comment = {
        content: req.body.content,
        postId: req.body.post_id,
        userId: 1
    }

    const schema = {
        content: {type: "string", optional: false, max: "500"},
        postId: {type: "number", optional: false}
    }

    const v = new Validator();
    const validationResponse = v.validate(comment, schema);

    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        });
    }

    models.Post.findByPk(req.body.post_id).then(post => {
        if(post === null){
            res.status(404).json({
                message: "Post not found"
            });
        }else{
            models.Comment.create(comment).then(result => {
                res.status(201).json({
                    message: "Comment created successfully",
                    comment: result
                });
            }).catch(error => {
                res.status(500).json({
                    message: "Something went wrong",
                    error: error
                });
            });
        }

    }).catch(err => {
        res.status(500).json({
            message: "Something went wrong",
            error: err
        });
    });
}


function show(req, res){
    const id = req.params.id;

    models.Comment.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Comment not found!"
            })
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        })
    });
}


function index(req, res){
    models.Comment.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}


function update(req, res){
    const id = req.params.id;
    const updatedComment = {
        content: req.body.content
    }

    const userId = 1;

    const schema = {
        content: {type: "string", optional: false, max: "500"},
    }

    const v = new Validator();
    const validationResponse = v.validate(updatedComment, schema);

    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        });
    }

    models.Comment.update(updatedComment, {where: {id:id, userId: userId}}).then(result => {
        res.status(200).json({
            message: "Comment updated successfully",
            post: updatedComment
        });
    }).catch(error => {
        res.status(200).json({
            message: "Something went wrong",
            error: error
        });
    })
}


function destroy(req, res){
    const id = req.params.id;
    const userId = 1;

    models.Comment.destroy({where:{id:id, userId:userId}}).then(result => {
        res.status(200).json({
            message: "Comment deleted successfully"
        });
    }).catch(error => {
        res.status(200).json({
            message: "Something went wrong",
            error: error
        });
    });
}

module.exports = {
    save: save,
    show: show,
    index: index,
    update: update,
    destroy: destroy
}
