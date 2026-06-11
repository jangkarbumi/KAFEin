import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICafe extends Document {
  name: string;
  location_area: string;
  address: string;
  description: string;
  image_url: string;
  wifi: {
    available: boolean;
    speed_rating: 'slow' | 'stable' | 'fast';
  };
  plugs: {
    available: boolean;
    quantity: 'none' | 'few' | 'many';
  };
  vibe: 'quiet' | 'moderate' | 'loud';
  price_max: number;
  operating_hours: {
    open: string;
    close: string;
  };
  suitability: string[]; // ['belajar-sendiri', 'kerja-kelompok', 'rapat']
  crowd_estimation: {
    day: string;
    peak_hours: string[];
  }[];
}

const CafeSchema = new Schema<ICafe>(
  {
    name: { type: String, required: true, trim: true },
    location_area: { type: String, required: true, trim: true },
    address: { type: String, default: '' },
    description: { type: String, default: '' },
    image_url: { type: String, default: '' },
    wifi: {
      available: { type: Boolean, default: false },
      speed_rating: {
        type: String,
        enum: ['slow', 'stable', 'fast'],
        default: 'stable',
      },
    },
    plugs: {
      available: { type: Boolean, default: false },
      quantity: {
        type: String,
        enum: ['none', 'few', 'many'],
        default: 'none',
      },
    },
    vibe: {
      type: String,
      enum: ['quiet', 'moderate', 'loud'],
      default: 'moderate',
    },
    price_max: { type: Number, required: true },
    operating_hours: {
      open: { type: String, required: true },
      close: { type: String, required: true },
    },
    suitability: {
      type: [String],
      default: [],
    },
    crowd_estimation: [
      {
        day: { type: String, required: true },
        peak_hours: { type: [String], default: [] },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Hot-reload safe model export
const Cafe: Model<ICafe> =
  mongoose.models.Cafe || mongoose.model<ICafe>('Cafe', CafeSchema);

export default Cafe;
