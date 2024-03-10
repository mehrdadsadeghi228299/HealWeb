const { Authorization, CheckRole } = require('../../common/guard/authorization.guard');
const competitionsController = require('./competitions.controller');
const {upload} =require('../../common/utils/multer');
const { CompetitionsValidator } = require('./competitions.validator');
const router = require('express').Router();

router.post("/create-competitions",CompetitionsValidator,Authorization,CheckRole('admin','creator'),upload.array("images", 3),competitionsController.createCompetitions);
router.get("/find-city-competitions/:city",Authorization,CheckRole('admin','updater'),competitionsController.findCompetitionsByCity);
router.get("/find-title-competitions/:title",Authorization,CheckRole('admin','updater'),competitionsController.findByCompetitionsTitle);
router.get("/find-name-competitions/:name",Authorization,CheckRole('admin','updater'),competitionsController.findCompetitionsByNameVolunter);
router.put("/choose-competitions",Authorization,CheckRole('admin','updater'),competitionsController.chooseWinner);
router.get("/show-competitions",Authorization,CheckRole('admin','updater','normal'),competitionsController.showAllCompetitions);
router.get("/winner-competitions",Authorization,CheckRole('admin','updater','normal'),competitionsController.getAllWiner);


module.exports = {
    
    CompetitionsRouter:router
};