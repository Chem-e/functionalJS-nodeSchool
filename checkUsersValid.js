function checkUsersValid(goodUsers) {
    return function(submittedUsers) {
        var everyElement = submittedUsers.every(function(submittedUserList) {

            var someElements = goodUsers.some(function(goodUserList) {

                return submittedUserList.id === goodUserList.id;
            });
            return someElements;
        });
        return everyElement;
    };
}

module.exports = checkUsersValid;