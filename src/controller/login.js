const models = require('../db/models');

const login = async (data) => {
    // validate
    const existing_member = await models.member.findOne({where: { email: data.email } });
    
    if (!existing_member) {
        throw new Error("User does not exist.");
    }

    return {
        message: "Success",
        member: existing_member
    }
}

module.exports = login;
