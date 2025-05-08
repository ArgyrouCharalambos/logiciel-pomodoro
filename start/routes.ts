/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'

// start/routes.js
router.get('/', async ({ view }) => {
  return view.render('index', {
    workDuration: 25,
    breakDuration: 5
  })
})

router.group(() => {
  router.get('/blocked-sites', 'BlockedSiteController.index')
  router.post('/blocked-sites', 'BlockedSiteController.store')
})