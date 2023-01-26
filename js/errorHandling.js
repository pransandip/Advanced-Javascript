/**
 * Try, Catch, Finally:-
 * Try block only can handle runtime error,
 * it can't handle the parse time error (wrong syntax)
 */
try {
    console.log('Start of try run')
    unicycle;
    console.log('End of try run -- never reached')
} catch (err) {
    console.log("error has ocurred:• " + err) // err.stack
} finally {
    console.log('This is always run')
}
console.log('...Then the execution continues')


// Custom errors
let data = '{ "age": 28 }';

try {
    let user = JSON.parse(data)
    console.log(user)
    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name");
    }
    console.log(user)
} catch (e) {
    console.log("JSON error:• ", e.name)
    console.log("JSON error:• ", e.message)
    console.log("JSON error:• ", e)
}