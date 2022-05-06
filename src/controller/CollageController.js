const collage = require('../models/collagemodel')

const createCollage = async (req,res) => {
    try {
        let data = req.body
        if (!Object.keys(data).length)
            return res.status(400).send({ status: false, message: "Please Enter The Data " })
        if (!data.name)
            return res.status(400).send({ status: false, message: "Collage name is mendatory" })
        if (!data.fullName)
            return res.status(400).send({ status: false, message: "fullname is mendatory" })

        if (!data.logoLink)
            return res.status(400).send({ status: false, message: "LogoLink is mendantory" })

      let created = await collage.create(data)
      res.status(201).send({status:true, data:created})

    } catch (error) {
        console.log(error)
        res.status(500).send({ status: false, msg: error.message })
    }
}

module.exports = createCollage