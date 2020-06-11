/**
 * Class representing controller
 *
 * @class welcomeController
 */


class welcomeController {
  /**
   * Welcome message
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} welcome message
   * @memberof welcomeController
   */
  static welcome (req, res) {
    res.status(200).json({message: "Welcome to the mobile phones api"})
  }
}
export default welcomeController
