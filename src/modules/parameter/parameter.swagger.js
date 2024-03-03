/**
 * @swagger
 * tags:
 *  name: Paramters
 *  description: Paramters Modules and Routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          CreateParamters:
 *              type: object  
 *              required:
 *                    -    num1
 *                    -    num2
 *                    -    num3
 *                    -    num4
 *                    -    num5
 *                    -    num6
 *                    -    num7
 *                    -    num8
 *                    -    num9
 *              properties:
 *                  num1:
 *                     type: string
 *                  num2:
 *                     type: string
 *                  num3:
 *                     type: string
 *                  num4:
 *                     type: string
 *                  num5:
 *                     type: string
 *                  num6:
 *                     type: string
 *                  num7:
 *                     type: string
 *                  num8:
 *                     type: string
 *                  num9:
 *                     type: string
 *          Addvolunteries:
 *              type: object
 *              required:
 *                  -   name
 *              properties:
 *                  name:
 *                     type: array 
 *          AddPersonel:
 *              type: object
 *              required:
 *                  -   name
 *              properties:
 *                  name:
 *                     type: array
 *          AddSaharTeam:
 *              type: object
 *              required:
 *                  -   name
 *              properties:
 *                  name:
 *                     type: array
 *          AddSahabTeam:
 *              type: object
 *              required:
 *                  -   countWomen
 *                  -   countMen
 *                  -   countPP
 *                  -   countPR
 *                  -   count
 *              properties:
 *                  countWomen:
 *                     type: number
 *                  countMen:
 *                     type: number 
 *                  countPP:
 *                     type: number 
 *                  countPR:
 *                     type: number 
 *                  count:
 *                     type: number 
 */

/**
 * @swagger
 * /paramters/create-paramters:
 *  post:
 *      summary: Create a new Province
 *      tags:
 *          -   Paramters
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateParamters'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateParamters'
 *      responses:
 *          200:
 *              description: success
 */
/**
 * @swagger
 * /paramters/add-volunter:
 *  put:
 *      summary: add volunter Team to a exist  paramters
 *      tags:
 *          -   Paramters
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/Addvolunteries'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Addvolunteries'
 *      responses:
 *          201:
 *              description: update success
 */

/**
 * @swagger
 * /paramters/add-personel:
 *  put:
 *      summary: add personel Team to a exist  paramters
 *      tags:
 *          -   Paramters
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/AddPersonel'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/AddPersonel'
 *      responses:
 *          201:
 *              description: update success
 */
/**
 * @swagger
 * /paramters/add-saharTeam:
 *  put:
 *      summary: add sahar Team to a exist  paramters
 *      tags:
 *          -   Paramters
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/AddSaharTeam'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/AddSaharTeam'
 *      responses:
 *          201:
 *              description: update success
 */

/**
 * @swagger
 * /paramters/add-sahabTeam:
 *  put:
 *      summary: add sahar Team to a exist  paramters
 *      tags:
 *          -   Paramters
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/AddSahabTeam'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/AddSahabTeam'
 *      responses:
 *          201:
 *              description: update success
 */

/**
 * @swagger
 * /paramters/get-paramters/{city}:
 *  get:
 *     summary: find  paramters for city
 *     tags: [Paramters]
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
