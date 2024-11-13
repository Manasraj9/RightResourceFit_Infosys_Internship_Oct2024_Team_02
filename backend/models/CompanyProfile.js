const companyProfileSchema = new mongoose.Schema({
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    companyName: { type: String, required: true },
    website: { type: String },
    industry: { type: String },
    description: { type: String },
    logo: { type: String } // URL to the company's logo
});

export default mongoose.model('CompanyProfile', companyProfileSchema);
