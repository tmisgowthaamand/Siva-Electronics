import express from 'express';
import { initiatePayment, verifyPayment, generateQRCode, paymentCallback } from '../controllers/paymentController.js';

const router = express.Router();

// Initiate Paytm Payment
router.post('/initiate', initiatePayment);

// Verify payment status
router.post('/verify', verifyPayment);

// Generate QR code for payment
router.post('/qr', generateQRCode);

// Paytm callback - handles both POST and GET
router.post('/callback', paymentCallback);
router.get('/callback', paymentCallback);

export default router;
