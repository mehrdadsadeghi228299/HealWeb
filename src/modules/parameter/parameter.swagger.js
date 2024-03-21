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
 *                    -    isMayor
 *                    -    ishealPrvince
 *                    -    isCountry
 *                    -    iscity
 *                    -    who
 *              properties:
 *                  num1:
 *                     type: number
 *                  num2:
 *                     type: number
 *                  num3:
 *                     type: number
 *                  num4:
 *                     type: number
 *                  num5:
 *                     type: number
 *                  num6:
 *                     type: number
 *                  num7:
 *                     type: number
 *                  num8:
 *                     type: number
 *                  num9:
 *                     type: number 
 *                  ishealPrvince:
 *                     type: boolean 
 *                     default: false
 *                  isMayor:
 *                     type: boolean
 *                     default: false
 *                  isCountry:
 *                     type: boolean
 *                     default: false
 *                  iscity:
 *                     type: boolean
 *                     default: false
 *                  who:
 *                     type: array
 *          UpdateParamters:
 *              type: object  
 *              required:
 *                    -    id
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
 *                  id:
 *                     type: string
 *                  num1:
 *                     type: number
 *                  num2:
 *                     type: number
 *                  num3:
 *                     type: number
 *                  num4:
 *                     type: number
 *                  num5:
 *                     type: number
 *                  num6:
 *                     type: number
 *                  num7:
 *                     type: number
 *                  num8:
 *                     type: number
 *                  num9:
 *                     type: number
 *          Addvolunteries:
 *              type: object
 *              required:
 *                  -   name
 *              properties:
 *                  name:
 *                     type: array 
 *          ConfirmationParamter:
 *              type: object
 *              required:
 *                  -   id
 *              properties:
 *                  id:
 *                     type: string 
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
 * /paramters/update-paramter:
 *  put:
 *      summary: update a exist paramters
 *      tags:
 *          -   Paramters
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/UpdateParamters'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/UpdateParamters'
 *      responses:
 *          201:
 *              description: update success
 */
 
/**
 * @swagger
 * /paramters/conformation-paramter:
 *  put:
 *      summary: update  a exist  paramters
 *      tags:
 *          -   Paramters
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/ConfirmationParamter'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/ConfirmationParamter'
 *      responses:
 *          201:
 *              description: update success
 */
/**
 * @swagger
 * /paramters/add-volunter:
 *  put:
 *      summary: update  a exist  paramters for adding a volunter
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
