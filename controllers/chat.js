exports.getChat = (req, res, next) => {
    if (!req.session.username) {
        res.redirect('/auth/login/')
    } else {
        // req.session.chat = req.params.chat;
        res.render('chat', {chat : req.params.chat});
    }
}
