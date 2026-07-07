import Project from '../models/Project.js';

export async function getHistory(req, res, next) {
  try {
    const projects = await Project.find()
      .sort({ createdAt: -1 })
      .limit(50)
      .lean();

    const history = projects.map((p) => ({
      id: p._id.toString(),
      name: p.idea.split(' ').slice(0, 2).join(' '),
      industry: p.industry,
      score: p.score || 0,
      date: p.createdAt ? new Date(p.createdAt).toISOString().split('T')[0] : '',
      status: p.status,
    }));

    res.json(history);
  } catch (error) {
    next(error);
  }
}
