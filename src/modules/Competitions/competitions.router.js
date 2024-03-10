const { Authorization, CheckRole } = require('../../common/guard/authorization.guard');
const competitionsController = require('./competitions.controller');
const {upload} =require('../../common/utils/multer');
const { CompetitionsValidator } = require('./competitions.validator');
const router = require('express').Router();

router.post("/create-competitions",CompetitionsValidator,competitionsController.createCompetitions);
router.get("/find-competitions/:city",Authorization,CheckRole('admin','updater'),competitionsController.findCompetitionsByCity);
router.get("/find-competitions/:title",Authorization,CheckRole('admin','updater'),competitionsController.findByCompetitionsTitle);
router.get("/find-competitions/:nameVolunter",Authorization,CheckRole('admin','updater'),competitionsController.findCompetitionsByNameVolunter);
router.get("/choose-competitions/:nameVolunter",Authorization,CheckRole('admin','updater'),competitionsController.chooseWinner);
router.get("/show-competitions",Authorization,CheckRole('admin','updater','creator'),competitionsController.showAllCompetitions);
router.get("/winner-competitions",Authorization,CheckRole('admin','updater'),competitionsController.getAllWiner);


module.exports = {
    
    CompetitionsRouter:router
};