import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  preferences: {
    preferred_vibe: ('quiet' | 'moderate' | 'loud')[];
    max_budget: number;
    needs_wifi: boolean;
    needs_plugs: boolean;
  };
  search_history: {
    query: string;
    timestamp: Date;
    results_count: number;
  }[];
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    preferences: {
      preferred_vibe: {
        type: [String],
        enum: ['quiet', 'moderate', 'loud'],
        default: [],
      },
      max_budget: { type: Number, default: 50000 },
      needs_wifi: { type: Boolean, default: true },
      needs_plugs: { type: Boolean, default: true },
    },
    search_history: [
      {
        query: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
        results_count: { type: Number, default: 0 },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Hot-reload safe model export
const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
