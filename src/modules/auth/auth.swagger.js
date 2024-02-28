/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Auth Modules and Routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          Login:
 *              type: object  
 *              required:
 *                     -    codemeeli
 *                     -    password
 *              properties:
 *                  codemeeli:
 *                      type: number
 *                  password:
 *                      type: string
 *          SendOTP:
 *              type: object
 *              required:
 *                  -   mobile
 *              properties:
 *                  mobile:
 *                      type: string
 *          CheckOTP:
 *              type: object
 *              required:
 *                  -   mobile
 *                  -   code
 *              properties:
 *                  mobile:
 *                      type: string
 *                  code:
 *                      type: string
 */

/**
 * @swagger
 * 
 * /auth/login:
 *  post:
 *      summary: login with codemeill and password
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/Login'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Login'
 *      responses:
 *          200:
 *              description: success
 */


/**
 * @swagger
 * 
 * /auth/send-otp:
 *  post:
 *      summary: login with OTP in this end-point
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/SendOTP'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/SendOTP'
 *      responses:
 *          200:
 *              description: success
 */

/**
 * @swagger
 * 
 * /auth/check-otp:
 *  post:
 *      summary: check otp for login user
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/CheckOTP'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CheckOTP'
 *      responses:
 *          200:
 *              description: success
 */
/**
 * @swagger
 * 
 * /auth/logout:
 *  get:
 *      summary: logout user 
 *      tags:
 *          -   Auth
 *      responses:
 *          200:
 *              description: success
 */


