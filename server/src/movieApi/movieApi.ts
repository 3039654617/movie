
import Express from "express"
import {MovieServers} from '../serverMovie/movieServers'

const Router = Express.Router();

Router.post('/', (req, res) => {
    const addRes = MovieServers.add(req.body);

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
            data: [],
            status: "成功"
        })
    }


})

Router.delete('/:id', async (req, res) => {
    const deleteData = await MovieServers.delete(req.params.id);
    res.send({
        status: "删除成功"
    })
})

Router.put('/:id', (req, res) => {
    const editData = MovieServers.edit(req.params.id, req.body)
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
        data: findOne
    })
})

export { Router }