import { Router } from 'express';
import { generateReport } from '../controllers/generateController.js';
import { getHistory } from '../controllers/historyController.js';
import { getReport, deleteReport, getProject } from '../controllers/reportController.js';
import { exportPdf } from '../controllers/exportController.js';

const router = Router();

router.post('/generate', generateReport);
router.get('/history', getHistory);
router.get('/report/:id', getReport);
router.delete('/report/:id', deleteReport);
router.get('/project/:id', getProject);
router.post('/export/pdf', exportPdf);

export default router;
