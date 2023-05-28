const models = require('../db/models');

const registration = async (data) => {
    // TO-DO: validate
    const existing_member = await models.member.findOne({where: { email: data.email } });
    if (existing_member) {
        throw new Error("User already exists. Try signing in.");
    }

    const member = await models.member.create(data);

    return {
        message: "Success",
        member
    }
}

module.exports = registration;
