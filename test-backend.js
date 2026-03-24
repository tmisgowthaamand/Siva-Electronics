// Quick test to see if backend is accessible

async function testBackend() {
  const apiUrl = 'http://localhost:10000';
  
  console.log('Testing Backend Connection...');
  console.log('API URL:', apiUrl);
  
  try {
    // Test 1: Health check
    console.log('\n1. Testing /health endpoint...');
    const healthRes = await fetch(`${apiUrl}/health`);
    const healthData = await healthRes.json();
    console.log('✓ Health Check:', healthData);
    
    // Test 2: Root endpoint
    console.log('\n2. Testing root endpoint...');
    const rootRes = await fetch(`${apiUrl}/`);
    const rootData = await rootRes.json();
    console.log('✓ Root Endpoint:', rootData);
    
    // Test 3: QR Code generation
    console.log('\n3. Testing QR Code generation...');
    const qrRes = await fetch(`${apiUrl}/api/payment/qr`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderId: 'TEST123',
        amount: '100',
        description: 'Test Payment'
      })
    });
    
    if (!qrRes.ok) {
      console.error('✗ QR API Error:', qrRes.status);
      const errorText = await qrRes.text();
      console.error('Error Response:', errorText);
      return;
    }
    
    const qrData = await qrRes.json();
    console.log('✓ QR Code Generated');
    console.log('  - Success:', qrData.success);
    console.log('  - UPI ID:', qrData.upiId);
    console.log('  - Amount:', qrData.amount);
    console.log('  - QR Code Present:', !!qrData.qrCode);
    
    if (qrData.qrCode) {
      console.log('✓ QR Code is a data URL');
    }
    
  } catch (error) {
    console.error('✗ Backend Test Failed:', error.message);
    console.error('\nMake sure your backend is running:');
    console.error('  npm run dev (in backend folder)');
  }
}

// Run test
testBackend();
