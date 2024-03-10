/**
 * @swagger
 * tags:
 *  name: Competitions
 *  description: Competitions Modules and Routes
 */

/**
 * @swagger
 *  components:
 *     schemas:
 *         CreateCompetitions:
 *             type: object  
 *             required:
 *                  -    title
 *                  -    name
 *                  -    description
 *                  -    information
 *                  -    cityname
 *                  -    images
 *             properties:
 *                  title:
 *                    type: string
 *                  name:
 *                    type: string
 *                  description:
 *                    type: string
 *                  information:
 *                    type: object
 *                  cityname:
 *                    type: string
 *                  images:
 *                    type: file
 */
/**
 * @swagger
 *  /competitions/create-competitions:
 *   post:
 *      summary: Create a new Competitions 
 *      tags: [Competitions]
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateCompetitions'
 *      responses:
 *          200:
 *              description: success
 */


/**
 * @swagger
 * /competitions/choose-competitions/{nameVolunter}:
 * get:
 *      summary: choose the winner to nameVolunter 
 *      tags: [Competitions]
 *      parameters:
 *         -  in : path
 *            name : nameVolunter
 *            type : string
 *      responses:
 *          201:
 *              description: update success
 */

/**
 * @swagger
 * /competitions/find-competitions/{city}:
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
 * /competitions/find-competitions/{title}:
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
 * /competitions/find-competitions/{nameVolunter}:
 *  get:
 *     summary: find-competitions with 
 *     tags: [Competitions]
 *     parameters:
 *         -  in : path
 *            name : nameVolunter
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