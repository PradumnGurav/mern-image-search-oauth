import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  provider: String,    // google/github/facebook
  oauthId: String      // id from provider
}, { timestamps: true });

export default mongoose.model('User', userSchema);
