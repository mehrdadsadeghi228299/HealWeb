/**
 * @swagger
 * tags:
 *  name: User
 *  description: user Modules and Routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          CreateUser:
 *              type: object  
 *              required:
 *                    -    name
 *                    -    lastName
 *                    -    personlId
 *                    -    password
 *                    -    codeMeeli
 *                    -    mobile
 *                    -    rule
 *                    -    province
 *                    -    subProvince
 *                    -    accessLevel
 *                    -    CityId
 *                    -    email
 *              properties:
 *                  name:
 *                     type: string
 *                  lastName:
 *                     type: string
 *                  codeMeeli:
 *                      type: number
 *                  mobile:
 *                      type: string
 *                  personlId:
 *                      type: number
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string
 *                  province:
 *                      type: string
 *                  subProvince:
 *                      type: string
 *                  rule:
 *                      type: string
 *                      enum: ["admin","creator","normal","updater"]
 *                      description: >
 *                          Permission Level for access:
 *                            * admin - Owner -  Admin Level.
 *                            * creator - city - can insert in paramters.
 *                            * updater - province - update in paramters.
 *                            * normal - country -just can see pramters and get output of dataBase.
 *                  accessLevel:
 *                      type: string
 *                      description: >
 *                          Permission is hereby granted:
 *                            * one - create - can insert in paramters.
 *                            * two - update - update in paramters.
 *                            * there - see -just can see pramters and get output of dataBase.
 *                      enum: ["one","two","there"]  
 *                  CityId:
 *                      type: string
 */

/**
 * @swagger
 * /user/create-user:
 *  post:
 *      summary: Create a new user
 *      tags:
 *          -   User
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateUser'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateUser'
 *      responses:
 *          200:
 *              description: success
 */
