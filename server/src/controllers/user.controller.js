const { getUsers, highestUsersWithAvgIncome } = require('../services/user.service')

const _handleUserData = (res, data) => {
    if (data.success) {
        return res.status(200).send({ users: data.users })
    }
    return res.status(500).send({})
}

const condition1Controller = async (_, res) => {
    const condition = {
        $and: [
            { car: { $in: ["BMW", "Mercedes"] } },
            { $expr: { $lt: [{ $toDecimal: { $substrBytes: ["$income", 1, -1] } }, 5] } }
        ]
    }
    const data = await getUsers(condition)
    _handleUserData(res, data)
}

const condition2Controller = async (_, res) => {
    const condition = {
        $and: [
            { gender: "Male" },
            { $expr: { $gt: [{ $toDecimal: "$phone_price" }, 10000] } }
        ]
    }
    const data = await getUsers(condition)
    _handleUserData(res, data)
}

const condition3Controller = async (_, res) => {
    const condition = {
        last_name: /^M/,
        $where: "this.quote.length > 15",
        email: { $regex: /M$/i }
    }
    const data = await getUsers(condition)
    _handleUserData(res, data)
}

const condition4Controller = async (_, res) => {
    const condition = {
        car: { $in: ["BMW", "Mercedes", "Audi"] },
        email: { $not: { $regex: /\d/ } }
    }
    const data = await getUsers(condition)
    _handleUserData(res, data)
}

const condition5Controller = async (_, res) => {
    const data = await highestUsersWithAvgIncome(10)
    _handleUserData(res, data)
}

module.exports = { condition1Controller, condition2Controller, condition3Controller, condition4Controller, condition5Controller }