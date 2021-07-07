module.exports = (res, objName) => {
    res.status(404).send(`${objName} not found`)
}