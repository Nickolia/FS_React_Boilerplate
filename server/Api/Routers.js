import express from 'express';
import * as ERRORS from '../../app/constants/Errors';
import AbstractPage from '../classes/AbstractPage/AbstractPage';
import User from '../classes/User/User';

import rootPagePresenter from '../Pages/root/rootPagePresenter';
import IndexPagePresenter from '../Pages/root/indexPage/IndexPagePresenter';
import OptionPagePresenter from '../Pages/root/optionsPage/OptionPagePresenter';

const router = express.Router();

debugger;

router.route('/')
    .get(User.userVerification, function(req, res) {
        res.send(AbstractPage({
            ...rootPagePresenter(req.currentUser),
            ...IndexPagePresenter(req.currentUser),
        }));
    })
    .post(User.userVerification, function(req, res) {
        res.send({
            ...rootPagePresenter(req.currentUser),
            ...IndexPagePresenter(req.currentUser),
        });
    });

router.route('/options')
    .get(User.userVerification, function(req, res) {
        res.send(AbstractPage({
            ...rootPagePresenter(req.currentUser),
            ...OptionPagePresenter(req.currentUser),
        }));
    })
    .post(User.userVerification, function(req, res) {
        res.send({
            ...rootPagePresenter(req.currentUser),
            ...OptionPagePresenter(req.currentUser),
        });
    });

router.route('/login')
    .get(User.userVerification, function(req, res) {
        res.send(AbstractPage({
            ...rootPagePresenter(req.currentUser),
            page: {},
        }));
    })
    .post(User.userVerification, function(req, res) {
        res.send({
            ...rootPagePresenter(req.currentUser),
            page: {},
        });
    });

router.route('/registration')
    .get(User.userVerification, function(req, res) {
        res.send(AbstractPage({
            ...rootPagePresenter(req.currentUser),
            page: {},
        }));
    })
    .post(User.userVerification, function(req, res) {
        res.send({
            ...rootPagePresenter(req.currentUser),
            page: {},
        });
    });

router.route('/author/:authorId')
    .get(User.userVerification, function(req, res) {
        res.send(AbstractPage({
            ...rootPagePresenter(req.currentUser),
            ...IndexPagePresenter(req.currentUser),
        }));
    })
    .post(User.userVerification, function(req, res) {
        res.send({
            ...rootPagePresenter(req.currentUser),
            ...IndexPagePresenter(req.currentUser),
        });
    });


router.route('*')
    .get(User.userVerification, function(req, res) {
        res.send(AbstractPage({
            ...rootPagePresenter(req.currentUser)
        }));
    })
    .post(User.userVerification, function(req, res) {
        res.send({
            error: ERRORS,
            ...rootPagePresenter(req.currentUser),
        });
    });

export default router;
