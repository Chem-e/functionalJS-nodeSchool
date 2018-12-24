function getShortMessages(messages) {
    var result = messages.filter(object =>
        object.message.length < 50).map(filteredObject =>
        filteredObject.message)

    return result;
}
module.exports = getShortMessages