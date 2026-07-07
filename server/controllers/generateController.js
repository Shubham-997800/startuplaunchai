import Project from '../models/Project.js';
import Report from '../models/Report.js';
import { runPipeline } from '../services/orchestrator.js';

export async function generateReport(req, res, next) {
  try {
    const { idea, industry, country } = req.body;

    if (!idea?.trim() || !industry?.trim() || !country?.trim()) {
      return res.status(400).json({ error: 'idea, industry, and country are required' });
    }

    const project = await Project.create({ idea: idea.trim(), industry: industry.trim(), country: country.trim() });

    try {
      const reportData = await runPipeline(idea.trim(), industry.trim(), country.trim());

      await Report.create({
        projectId: project._id,
        ...reportData,
      });

      project.status = 'completed';
      project.score = reportData.score || 87;
      await project.save();
    } catch (pipelineError) {
      project.status = 'failed';
      await project.save();
      console.error('Pipeline failed:', pipelineError.message);
    }

    const savedProject = await Project.findById(project._id);
    res.status(201).json(savedProject.toJSON());
  } catch (error) {
    next(error);
  }
}
