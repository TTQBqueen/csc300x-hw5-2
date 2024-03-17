
**Error Handling:**

# *jokebook* API Documentation

## Endpoint 1 - Get Joke Categories

 *  jokebook/joke/categories Get Joke Categories
 * @apiGroup jokebook
 * @apiDescription This endpoint retrieves the available joke categories.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     ["funnyJoke", "lameJoke"]
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 */

## Endpoint 2 - Get Jokes in a Category
/**
 * @api {GET} /jokebook/joke/:category Get Jokes in a Category
 * @apiGroup jokebook
 * @apiDescription This endpoint retrieves jokes in a specified category.
 * @apiParam {String} category Category of jokes to retrieve.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "joke": "Why did the student eat his homework?",
 *         "response": "Because the teacher told him it was a piece of cake!"
 *       },
 *       {
 *         "joke": "What kind of tree fits in your hand?",
 *         "response": "A palm tree"
 *       }
 *     ]
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 */

## Endpoint 3 - Add a New Joke
/**
 * @api {POST} /jokebook/joke/new Add a New Joke
 * @apiGroup jokebook
 * @apiDescription This endpoint allows users to add a new joke to the specified category.
 * @apiParam {String} category Category of the new joke (funnyJoke or lameJoke).
 * @apiParam {String} joke The joke to be added.
 * @apiParam {String} response The response to the joke.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "joke": "Why don't scientists trust atoms?",
 *       "response": "Because they make up everything!"
 *     }
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 */

## Endpoint 4 - Get All Jokes
/**
 * @api {GET} /jokebook/joke/all Get All Jokes
 * @apiGroup jokebook
 * @apiDescription This endpoint retrieves all jokes from all categories.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "joke": "Why did the student eat his homework?",
 *         "response": "Because the teacher told him it was a piece of cake!"
 *       },
 *       {
 *         "joke": "What kind of tree fits in your hand?",
 *         "response": "A palm tree"
 *       },
 *       {
 *         "joke": "Which bear is the most condescending?",
 *         "response": "Pan-DUH"
 *       },
 *       {
 *         "joke": "What would the Terminator be called in his retirement?",
 *         "response": "The Exterminator"
 *       }
 *     ]
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 */
