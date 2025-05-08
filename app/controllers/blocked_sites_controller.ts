import type { HttpContext } from '@adonisjs/core/http'
import BlockedSite from '#models/blocked_site'

export default class BlockedSitesController {

  async index({ response }:HttpContext) {
    const sites = await BlockedSite.all()
    return response.json(sites)
  }

  async store({ request, response }:HttpContext) {
    const data = request.only(['url'])
    const site = await BlockedSite.create(data)
    return response.status(201).json(site)
  }
}