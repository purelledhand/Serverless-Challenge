module.exports = async function (context, req) {
    const reqArr = ['Yes', 'No'];
    const Result = Math.floor(Math.random() * (3 - 1));
    context.res = {
        status: 200, /* Defaults to 200 */
        body: JSON.stringify({'ans': reqArr[Result]}),
    };
};