/**
 * @swagger
 * tags:
 *  name: City
 *  description: City Modules and Routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          CreateCity:
 *              type: object  
 *              required:
 *                    -    name
 *                    -    title
 *                    -    description
 *                    -    lat
 *                    -    lng
 *                    -    key
 *              properties:
 *                  name:
 *                     type: string
 *                  title:
 *                     type: string
 *                  description:
 *                     type: string
 *                  lat:
 *                     type: string
 *                  lng:
 *                     type: string
 *                  key:
 *                     type: number
 *          Addparamters:
 *              type: object  
 *              required:
 *                    -    nameCity
 *                    -    id_paramters
 *              properties:
 *                  nameCity:
 *                    type: string
 *                  id_paramters:
 *                    type: string
 */

/**
 * @swagger
 * /city/create-city:
 *  post:
 *      summary: Create a new city
 *      tags:
 *          -   City
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateCity'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateCity'
 *      responses:
 *          200:
 *              description: success
 */

/**
 * @swagger
 * /city/add-paramter:
 *  put:
 *      summary:  Add parameters to city 
 *      tags:
 *          -   City
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/Addparamters'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Addparamters'
 *      responses:
 *          201:
 *              description: update success
 */

/**
 * @swagger
 * /city/find-city/{city}:
 *  get:
 *     summary: find a city with name
 *     tags: [City]
 *     parameters:
 *         -  in : path
 *            name : city
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
 * /city/show-paramter:
 *  get:
 *     summary: show a City with  paramter
 *     tags: [City]
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