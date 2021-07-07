module.exports = (err) => {
    if (err.name == "SequelizeValidationError" || "SequelizeUniqueConstraintError") 
        return true    
    else
        return false
}