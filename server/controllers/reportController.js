import Project from '../models/Project.js';
import Report from '../models/Report.js';

export async function getReport(req, res, next) {
  try {
    const { id } = req.params;

    const report = await Report.findOne({ projectId: id }).lean();
    if (!report) {
      return res.status(404).json({ error: 'Report not found' });
    }

    const project = await Project.findById(id).lean();
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    const formatted = {
      projectId: report.projectId.toString(),
      summary: report.summary || {},
      market: report.market || {},
      competitors: report.competitors || [],
      branding: report.branding || {},
      revenue: report.revenue || {},
      marketing: report.marketing || [],
      pitch: report.pitch || {},
    };

    res.json(formatted);
  } catch (error) {
    next(error);
  }
}

export async function deleteReport(req, res, next) {
  try {
    const { id } = req.params;

    const project = await Project.findByIdAndDelete(id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    await Report.findOneAndDelete({ projectId: id });

    res.json({ message: 'Report deleted successfully' });
  } catch (error) {
    next(error);
  }
}

export async function getProject(req, res, next) {
  try {
    const { id } = req.params;

    const project = await Project.findById(id).lean();
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json({
      id: project._id.toString(),
      name: project.idea.split(' ').slice(0, 2).join(' '),
      idea: project.idea,
      industry: project.industry,
      country: project.country,
      score: project.score || 0,
      createdAt: project.createdAt?.toISOString?.() || project.createdAt || '',
      status: project.status,
    });
  } catch (error) {
    next(error);
  }
}
