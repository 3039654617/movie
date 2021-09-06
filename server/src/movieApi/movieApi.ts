
import Express from "express"
import {MovieServers} from '../serverMovie/movieServers'

const Router = Express.Router();

Router.post('/', async (req, res) => {
    const addRes = await MovieServers.add(req.body);

    if(Array.isArray(addRes)) {
        const errData = addRes.join(';')
        res.send({
            err: errData,
            data: '',
            status: "失败"
        })
    } else {
        res.send({
            err: '',
            data: addRes,
            status: "成功"
        })
    }


})

Router.delete('/:id', async (req, res) => {
    const deleteData = await MovieServers.delete(req.params.id);
    res.send({
        data: deleteData,
        status: `删除了${deleteData.deletedCount}条数据`
    })
})

Router.put('/:id', async (req, res) => {
    const editData = await MovieServers.edit(req.params.id, req.body)
    res.send({
        data: editData
    })
})

Router.get('/', async (req, res) => {
    const queryData = await MovieServers.conditionQuery(req.query)

    res.send({
        data: queryData
    })
})

Router.get('/:id', async (req, res) => {
    const findOne = await MovieServers.query(req.params.id);
    res.send({
        data: findOne,
        status: 'success'
    })
})

export { Router }