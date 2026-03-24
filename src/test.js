// Simple test script to verify API is working

const API_URL = 'http://localhost:3000';
const API_KEY = 'demo_key_12345';

async function testHealth() {
  console.log('Testing /health endpoint...');
  const response = await fetch(`${API_URL}/health`);
  const data = await response.json();
  console.log('✅ Health check:', data.status);
  return data.status === 'ok';
}

async function testScreenshot() {
  console.log('\nTesting /api/v1/screenshot endpoint...');
  
  const response = await fetch(`${API_URL}/api/v1/screenshot`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': API_KEY
    },
    body: JSON.stringify({
      url: 'https://example.com',
      width: 1280,
      height: 720,
      format: 'png'
    })
  });

  const data = await response.json();
  
  if (data.success) {
    console.log('✅ Screenshot captured!');
    console.log(`   Size: ${(data.metadata.size / 1024).toFixed(2)} KB`);
    console.log(`   Duration: ${data.metadata.duration}`);
    console.log(`   Format: ${data.metadata.format}`);
    return true;
  } else {
    console.log('❌ Screenshot failed:', data.error);
    return false;
  }
}

async function testPDF() {
  console.log('\nTesting /api/v1/pdf endpoint...');
  
  const response = await fetch(`${API_URL}/api/v1/pdf`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': API_KEY
    },
    body: JSON.stringify({
      url: 'https://example.com',
      format: 'A4'
    })
  });

  const data = await response.json();
  
  if (data.success) {
    console.log('✅ PDF generated!');
    console.log(`   Size: ${(data.metadata.size / 1024).toFixed(2)} KB`);
    console.log(`   Duration: ${data.metadata.duration}`);
    console.log(`   Format: ${data.metadata.format}`);
    return true;
  } else {
    console.log('❌ PDF failed:', data.error);
    return false;
  }
}

async function runTests() {
  console.log('🧪 Running API tests...\n');
  
  try {
    const healthOk = await testHealth();
    if (!healthOk) {
      console.log('\n❌ API is not responding. Make sure server is running.');
      process.exit(1);
    }

    await testScreenshot();
    await testPDF();

    console.log('\n✅ All tests passed!');
  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
    process.exit(1);
  }
}

runTests();
