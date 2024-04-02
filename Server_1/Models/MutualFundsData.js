const mongoose = require('mongoose');

const MutualFundsDataSchema = new mongoose.Schema({
    alpha: {
        type: Number,
        required: true,
        trim: true,
    },
    amc_name: {
        type: String,
        required: true,
        trim: true,
    },
    amc_name_encoded: {
        type: Number,
        required: true,
        trim: true,
    },
    beta: {
        type: Number,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    category_encoded: {
        type: Number,
        required: true,
        trim: true,
    },
    expense_ratio: {
        type: Number,
        required: true,
        trim: true,
    },
    fund_age_yr: {
        type: Number,
        required: true,
        trim: true,
    },
    fund_manager: {
        type: String,
        required: true,
        trim: true,
    },
    fund_manager_encoded: {
        type: Number,
        required: true,
        trim: true,
    },
    fund_size_cr: {
        type: Number,
        required: true,
        trim: true,
    },
    links_url: {
        type: String,
        required: true,
        trim: true,
    },
    min_lumpsum: {
        type: Number,
        required: true,
        trim: true,
    },
    min_sip: {
        type: Number,
        required: true,
        trim: true,
    },
    rating: {
        type: Number,
        required: true,
        trim: true,
    },
    returns_1yr: {
        type: Number,
        required: true,
        trim: true,
    },
    returns_3yr: {
        type: Number,
        required: true,
        trim: true,
    },
    returns_5yr: {
        type: Number,
        required: true,
        trim: true,
    },
    risk_level: {
        type: Number,
        required: true,
        trim: true,
    },
    scheme_name: {
        type: String,
        required: true,
        trim: true,
    },
    scheme_name_encoded: {
        type: Number,
        required: true,
        trim: true,
    },
    sd: {
        type: Number,
        required: true,
        trim: true,
    },
    sharpe: {
        type: Number,
        required: true,
        trim: true,
    },
    sortino: {
        type: Number,
        required: true,
        trim: true,
    },
    sub_category: {
        type: String,
        required: true,
        trim: true,
    },
    sub_category_encoded:{
        type: Number,
        required: true,
        trim: true,
    },
});

module.exports = mongoose.model("MutualFundsData", MutualFundsDataSchema);
