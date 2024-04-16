const {getArticleById} = require('../models/articles.models')

exports.findArticleById = (request, response, next) => {
    const {article_id} = request.params
    getArticleById(article_id)
    .then((article) => {
        response.status(200).send(article)
    })
    .catch(next)
}