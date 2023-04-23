const { condition1Controller, condition2Controller, condition3Controller, condition4Controller, condition5Controller } = require('../controllers/user.controller')
const router = require('express').Router();

router.get('/condition1', condition1Controller)
router.get('/condition2', condition2Controller)
router.get('/condition3', condition3Controller)
router.get('/condition4', condition4Controller)
router.get('/condition5', condition5Controller)

module.exports = router;