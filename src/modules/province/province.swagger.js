/**
 * @swagger
 * tags:
 *  name: Province
 *  description: Province Modules and Routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          CreateProvince:
 *              type: object  
 *              required:
 *                    -    name
 *                    -    owner
 *                    -    count
 *                    -    city
 *                    -    men
 *              properties:
 *                  name:
 *                     type: string
 *                  owner:
 *                     type: string
 *                  count:
 *                      type: number
 *                  city:
 *                      type: array
 *                  men:
 *                      type: array
 *          AddCity:
 *              type: object
 *              required:
 *                  -   name
 *                  -   cityId
 *              properties:
 *                  name:
 *                     type: string
 *                  cityId:
 *                     type: string
 */

/**
 * @swagger
 * /province/create-province:
 *  post:
 *      summary: Create a new Province
 *      tags:
 *          -   Province
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateProvince'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateProvince'
 *      responses:
 *          200:
 *              description: success
 */
/**
 * @swagger
 * /province/add-city:
 *  put:
 *      summary:  Add city to a exist  Province 
 *      tags:
 *          -   Province
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/AddCity'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/AddCity'
 *      responses:
 *          201:
 *              description: update success
 */

/**
 * @swagger
 * /province/find-province/{name}:
 *  get:
 *     summary: find a province with name
 *     tags: [Province]
 *     parameters:
 *         -  in : path
 *            name : name
 *            type : string
 *     responses:
 *              200: 
 *                  description: Success
 *              400: 
 *                  description: Bad Request
 *              401: 
 *                  description: Unauthorization
 *              500: 
 *                  description: Internal Server Error 
 */

/**
 * @swagger
 * /province/show-province/{name}:
 *  get:
 *     summary: show a province with name 
 *     tags: [Province]
 *     parameters:
 *         -  in : path
 *            name : name
 *            type : string
 *     responses:
 *              200: 
 *                  description: Success
 *              400: 
 *                  description: Bad Request
 *              401: 
 *                  description: Unauthorization
 *              500: 
 *                  description: Internal Server Error 
 */

/**
 * @swagger
 * /province/get-city/:
 *  get:
 *     summary: get city a province with Own cookies 
 *     tags: [Province]
 *     responses:
 *              200: 
 *                  description: Success
 *              400: 
 *                  description: Bad Request
 *              401: 
 *                  description: Unauthorization
 *              500: 
 *                  description: Internal Server Error 
 */
/**
 * @swagger
 * /province/get-city/{name}:
 *  get:
 *     summary: get city a province with name 
 *     tags: [Province]
 *     parameters:
 *         -  in : path
 *            name : name
 *            type : string
 *     responses:
 *              200: 
 *                  description: Success
 *              400: 
 *                  description: Bad Request
 *              401: 
 *                  description: Unauthorization
 *              500: 
 *                  description: Internal Server Error 
 */

/**
 * @swagger
 * /province/province-all:
 *  get:
 *     summary: get All data  
 *     tags: [Province]
 *     responses:
 *              200: 
 *                  description: Success
 *              400: 
 *                  description: Bad Request
 *              401: 
 *                  description: Unauthorization
 *              500: 
 *                  description: Internal Server Error 
 */

/**
 * @swagger
 * /province/province-all-paramters:
 *  get:
 *     summary: get All data  
 *     tags: [Province]
 *     responses:
 *              200: 
 *                  description: Success
 *              400: 
 *                  description: Bad Request
 *              401: 
 *                  description: Unauthorization
 *              500: 
 *                  description: Internal Server Error 
 */