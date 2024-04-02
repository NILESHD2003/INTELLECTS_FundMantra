const MutualFundsData = require('../Models/MutualFundsData');

exports.sip100 = async (req, res) => {
    try{
        const data = await MutualFundsData.find({min_sip: {$gte: 100}});
        const dataCount = await MutualFundsData.countDocuments({min_sip: {$gte: 100}});

        res.status(200).json({
            success: true,
            dataCount: dataCount,
            data: data
        })
    }catch(e){
        console.error(e);

        return res.status(500).json({
            success: false,
            message: "User cannot be registered. Please try again."
        })
    }
}

exports.sip1000 = async (req, res) => {
    try{
        const data = await MutualFundsData.find({min_sip: {$gte: 1000}});
        const dataCount = await MutualFundsData.countDocuments({min_sip: {$gte: 1000}});

        res.status(200).json({
            success: true,
            dataCount: dataCount,
            data: data
        })
    }catch(e){
        console.error(e);

        return res.status(500).json({
            success: false,
            message: "User cannot be registered. Please try again."
        })
    }
}

exports.largeCap = async (req, res) => {
    try{
        const data = await MutualFundsData.find({sub_category: {$regex: /Large/ , $options: 'i'}});
        const dataCount = await MutualFundsData.countDocuments({sub_category: {$regex: /Large/ , $options: 'i'}});

        res.status(200).json({
            success: true,
            dataCount: dataCount,
            data: data
        })
    }catch(e){
        console.error(e);

        return res.status(500).json({
            success: false,
            message: "User cannot be registered. Please try again."
        })
    }
}

exports.midCap = async (req, res) => {
    try{
        const data = await MutualFundsData.find({sub_category: {$regex: /Mid/ , $options: 'i'}});
        const dataCount = await MutualFundsData.countDocuments({sub_category: {$regex: /Mid/ , $options: 'i'}});

        res.status(200).json({
            success: true,
            dataCount: dataCount,
            data: data
        })
    }catch(e){
        console.error(e);

        return res.status(500).json({
            success: false,
            message: "User cannot be registered. Please try again."
        })
    }
}

exports.smallCap = async (req, res) => {
    try{
        const data = await MutualFundsData.find({sub_category: {$regex: /Small/ , $options: 'i'}});
        const dataCount = await MutualFundsData.countDocuments({sub_category: {$regex: /Small/ , $options: 'i'}});

        res.status(200).json({
            success: true,
            dataCount: dataCount,
            data: data
        })
    }catch(e){
        console.error(e);

        return res.status(500).json({
            success: false,
            message: "User cannot be registered. Please try again."
        })
    }
}

exports.detailed_amc = async (req, res) => {
    try{
        const {id} = req.body;
        const data = await MutualFundsData.findOne({_id: id});
        console.log(data);

        if(!data){
            res.status(404).json({
                success: false,
                message: "Unable to find Id"
            })
        }

        res.status(200).json({
            success: true,
            data: data
        })

    }catch(e){
        console.error(e);

        return res.status(500).json({
            success: false,
            message: "Something Went Wrong"
        })
    }
}

exports.detailed_amc_schemeName = async(req, res) => {
    try{
        const { schemeName } = req.body;
        const data = await MutualFundsData.find({scheme_name: schemeName});
        res.status(200).json({
            success: true,
            data: data
        })

    }catch (e) {
        console.log(e);

        res.status(500).json({
            success: true,
            message: 'Internal Server Error'
        })
    }
}

