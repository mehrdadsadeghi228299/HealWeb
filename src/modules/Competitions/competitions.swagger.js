/**
 * @swagger
 * tags:
 *  name: Competitions
 *  description: Competitions Modules and Routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *         CreateCompetitions:
 *             type: object  
 *             required:
 *                  -    title
 *                  -    name
 *                  -    description
 *                  -    information
 *                  -    cityname
 *             properties:
 *                  title:
 *                     type: string
 *                  name:
 *                     type: string
 *                  description:
 *                     type: string
 *                  information:
 *                     type: object
 *                  cityname:
 *                     type: string
 *                  image:
 *                     type: file
 *         chooseWinner:
 *             type: object
 *             required:
 *                  -    title
 *                  -    name
 *             properties:
 *                  title:
 *                    type: string
 *                  name:
 *                    type: string
 */
 
/**
 * @swagger
 * /competitions/create-competitions:
 *  post:
 *      summary: Create a new Competitions
 *      tags: [Competitions]
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateCompetitions'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateCompetitions'
 *      responses:
 *          200:
 *              description: success
 */ 

/**
 * @swagger
 *  /competitions/choose-competitions:
 *   put:
 *      summary: choose the winner to nameVolunter 
 *      tags: [Competitions]
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/chooseWinner'
 *      responses:
 *          200:
 *              description: success
 */

/**
 * @swagger
 * /competitions/find-city-competitions/{city}:
 *  get:
 *     summary: find-competitions with 
 *     tags: [Competitions]
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
 * /competitions/find-title-competitions/{title}:
 *  get:
 *     summary: find-competitions with 
 *     tags: [Competitions]
 *     parameters:
 *         -  in : path
 *            name : title
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
 * /competitions/find-name-competitions/{name}:
 *  get:
 *     summary: find-competitions with 
 *     tags: [Competitions]
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
 * /competitions/show-competitions:
 *  get:
 *     summary: show All competitions
 *     tags: [Competitions]
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
 * /competitions/winner-competitions:
 *  get:
 *     summary:  show winner of competitions 
 *     tags: [Competitions]
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