import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  idea: {
    type: String,
    required: [true, 'Startup idea is required'],
    trim: true,
    minlength: [1, 'Idea must be at least 1 character'],
  },
  industry: {
    type: String,
    required: [true, 'Industry is required'],
    trim: true,
  },
  country: {
    type: String,
    required: [true, 'Country is required'],
    trim: true,
  },
  status: {
    type: String,
    enum: ['processing', 'completed', 'failed'],
    default: 'processing',
  },
  score: {
    type: Number,
    default: null,
  },
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform(_, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
});

projectSchema.virtual('name').get(function () {
  return this.idea.split(' ').slice(0, 2).join(' ');
});

export default mongoose.model('Project', projectSchema);
