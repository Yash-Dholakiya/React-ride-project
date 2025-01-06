const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
    token: { type: String,
            required: true,
            unique: true
        },  // Token to be blacklisted
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '86400' }    // 24h in secondSet token expiration time        
});

module.exports = mongoose.model('BlacklistToken', blacklistTokenSchema);