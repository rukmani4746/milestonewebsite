import BloodSample from '../models/bloodSample.js'

export const bloodinfo = async (req, res) => {
    try {
        req.body.hospitalId = req.user.userId
        const created = await BloodSample.create(req.body)
        if (created)
            res.status(200).send('blood info added successfully')
    } catch (error) {
        res.status(500).send(error.message)
    }
}
export const updatebloodinfo = async (req, res) => {
    try {

        const bloodSampleDoc = await BloodSample.findOne({ _id: req.params.bloodsampleId, isDeleted: false })
        if (!bloodSampleDoc)
            res.status(404).send("blood sample not found")
        else {
            Object.assign(bloodSampleDoc, req.body)
            bloodSampleDoc.save()
        }
        if (created)
            res.status(200).send('blood info updated successfully')
    } catch (error) {
        res.status(500).send(error.message)

    }
}
export const deletebloodinfo = async (req, res) => {
    try {

        const bloodSampleDoc = await BloodSample.findOne({ _id: req.params.bloodsampleId, isDeleted: false })
        if (!bloodSampleDoc)
            res.status(404).send("blood sample not found")
        else {
            Object.assign(bloodSampleDoc, { isDeleted: true })
            bloodSampleDoc.save()
        }
        if (deletedDoc)
            res.status(200).send('blood info deleted successfully')
    } catch (error) {
        res.status(500).send(error.message)
    }

}

export const getbloodinfo = async (req, res) => {
    try {
        const bloodSampleDocs = await BloodSample.find({ isDeleted: false })
        if (!bloodSampleDocs)
            res.status(404).send("blood sample not found")
        res.status(200).send({ data: bloodSampleDocs })
    } catch (error) {
        res.status(500).send(error.message)
    }

}
