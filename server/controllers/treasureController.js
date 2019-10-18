module.exports = {
    dragonTreasure: async(req, res) => {
        const db = req.app.get('db') 
        const pbdragonTreasureGet = await db.get_dragon_treasure(1)
        return res.status(200).send(pbdragonTreasureGet)
    }, 

    getUserTreasure: async(req, res) => {
        const db = req.app.get('db') 
        const gottenUserTreasure = await db.get_user_treasure(req.session.user.id)
        res.status(200).send(gottenUserTreasure)
    }
}