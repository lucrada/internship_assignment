const getModels = require('../config/db_config')

let models = null;
(async () => {
    models = await (async () => {
        return await getModels()
    })()
})()


const getUsers = async (condition) => {
    try {
        const fetchedUsers = await models.User.find(condition)
        return { success: true, users: fetchedUsers }
    } catch (e) {
        console.log(e)
        return { success: false }
    }
}

const highestUsersWithAvgIncome = async (number) => {
    try {
        const fetchedUsers = await models.User.aggregate([
            {
                $addFields: {
                    incomeWithoutFirstChar: { $substr: ["$income", 1, -1] },
                    incomeDecimal: { $toDecimal: { $substr: ["$income", 1, -1] } }
                }
            },
            {
                $group: {
                    _id: "$city",
                    count: { $sum: 1 },
                    avgIncome: { $avg: "$incomeDecimal" }
                }
            },
            {
                $sort: { count: -1 }
            },
            {
                $limit: 10
            },
            {
                $project: {
                    _id: 0,
                    city: "$_id",
                    count: 1,
                    avgIncome: {
                        $toString: { $round: ["$avgIncome", 2] }
                    }
                }
            }
        ])


        return { success: true, users: fetchedUsers }
    } catch (e) {
        console.log(e)
        return { success: false }
    }
}

module.exports = { getUsers, highestUsersWithAvgIncome }