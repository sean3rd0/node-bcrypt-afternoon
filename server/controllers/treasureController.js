module.exports = {
    dragonTreasure: async(req, res) => {
        const db = req.app.get('db') 
        const pbdragonTreasureGet = await db.get_dragon_treasure(1)
        return res.status(200).send(pbdragonTreasureGet)
    }, 

    getUserTreasure: async (req, res) => {
        const db = app.req.get('db')

        const data = await db.get_user_treasure(req.session.user.id)
        res.status(200).send(data)
    }, 

        // async(req, res) => {
        // const db = req.app.get('db') 
        // const gottenUserTreasure = await db.get_user_treasure(req.session.user.id)
        // res.status(200).send(gottenUserTreasure)
    // }, 

    addUserTreasure: async (req, res) => {
        const {treasureURL} = req.body
        const {id} = req.session.user

        const db = req.app.get('db')
        const userTreasure = await db.add_user_treasure(treasureURL, id)

        res.status(200).send(userTreasure)
    }, 

    getAllTreasure:async(req,res)=>{
        const dbResponseFromGetAllTreasureRequest = await req.app.get('db').get_all_treasure()
        res.status(200).send(dbResponseFromGetAllTreasureRequest)
    }
}