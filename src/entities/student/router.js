import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

// Get all students
router.get('/api/students', async (req, res) => {
  try {
    const users = await Ctrl.getAllStudents();
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched users',
      data: users
    });
  } catch (status) {
    let message = '';
    res.status(status).json({ status });
  }
});

// Get Student by Student Number
router.get('/api/students/:student_no', async (req, res) => {
  try {
    const user = await Ctrl.getStudentByStudNo(req.params);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched user',
      data: user
    });
  } catch (status) {
    res.status(status).json({ status });
  }
});

// Get Student by Student name
router.get('/api/students/name/:name', async (req, res) => {
  try {
    const user = await Ctrl.getStudentByName(req.params);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched user',
      data: user
    });
  } catch (status) {
    res.status(status).json({ status });
  }
});

// Get Student by Student status
router.get('/api/students/status/:status', async (req, res) => {
  try {
    const user = await Ctrl.getStudentByStatus(req.params);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched user',
      data: user
    });
  } catch (status) {
    res.status(status).json({ status });
  }
});

// Retrieve all advisers of a student
router.get('/api/students/advisers/:student_no', async (req, res) => {
  try {
    const user = await Ctrl.getAllAdvisersByStudNo(req.params);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched user',
      data: user
    });
  } catch (status) {
    res.status(status).json({ status });
  }
});

// update user adviser
router.put('/api/students/adviser', async (req, res) => {
  try {
    console.log('I tried');
    await Ctrl.updateAdviser(req.body);
    const user = await Ctrl.getStudentByStudNo({
      student_no: req.body.student_no
    });
    res.status(200).json({
      status: 200,
      message: 'Successfully edited user',
      data: user
    });
  } catch (status) {
    res.status(status).json({ status });
  }
});

// // removeUser
// router.delete('/api/users/:empno', async (req, res) => {
//   try {
//     const id = await Ctrl.removeUser(req.params);

//     res.status(200).json({
//       status: 200,
//       message: 'Successfully removed user',
//       data: id
//     });
//   } catch (status) {
//     res.status(status).json({ status, message });
//   }
// });

export default router;
