/**
 * Google Apps Script for handling form submissions to Google Sheets
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com/
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Create a new Google Sheet and copy its ID
 * 5. Replace 'YOUR_SHEET_ID' with your actual sheet ID
 * 6. Deploy as web app with execute permissions for "Anyone"
 * 7. Copy the web app URL and update it in BookCallPopup.tsx
 */

// Replace with your Google Sheet ID
const SHEET_ID = 'YOUR_SHEET_ID';
const SHEET_NAME = 'Call Bookings';

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get or create the spreadsheet
    const sheet = getOrCreateSheet();
    
    // Prepare the row data
    const rowData = [
      new Date(data.timestamp),
      data.name,
      data.email,
      data.phone,
      data.course,
      data.timeSlot,
      data.message || '',
      data.source,
      'Pending' // Status column
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Send confirmation email (optional)
    sendConfirmationEmail(data);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true, message: 'Data saved successfully'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Google Apps Script is working!')
    .setMimeType(ContentService.MimeType.TEXT);
}

function getOrCreateSheet() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      // Create the sheet if it doesn't exist
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      
      // Add headers
      const headers = [
        'Timestamp',
        'Name',
        'Email',
        'Phone',
        'Course Interest',
        'Preferred Time Slot',
        'Message',
        'Source',
        'Status'
      ];
      
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format the header row
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('white');
      headerRange.setFontWeight('bold');
      
      // Set column widths
      sheet.setColumnWidth(1, 150); // Timestamp
      sheet.setColumnWidth(2, 150); // Name
      sheet.setColumnWidth(3, 200); // Email
      sheet.setColumnWidth(4, 120); // Phone
      sheet.setColumnWidth(5, 150); // Course
      sheet.setColumnWidth(6, 150); // Time Slot
      sheet.setColumnWidth(7, 250); // Message
      sheet.setColumnWidth(8, 100); // Source
      sheet.setColumnWidth(9, 100); // Status
    }
    
    return sheet;
  } catch (error) {
    console.error('Error accessing sheet:', error);
    throw new Error('Could not access Google Sheet. Please check the SHEET_ID.');
  }
}

function sendConfirmationEmail(data) {
  try {
    const subject = 'Career Call Booking Confirmation - TechAcademy';
    const body = `
Dear ${data.name},

Thank you for booking a free career consultation with TechAcademy!

Here are your booking details:
• Name: ${data.name}
• Email: ${data.email}
• Phone: ${data.phone}
• Course Interest: ${data.course}
• Preferred Time: ${data.timeSlot}
• Message: ${data.message || 'None'}

What happens next?
1. Our career counselor will review your information
2. You'll receive a call within 24 hours to confirm your appointment
3. We'll discuss your career goals and recommend the best learning path

If you have any questions, feel free to reply to this email or call us at +91-9876543210.

Best regards,
TechAcademy Team

---
This is an automated confirmation email.
    `;
    
    MailApp.sendEmail(data.email, subject, body);
    console.log('Confirmation email sent to:', data.email);
  } catch (error) {
    console.error('Error sending email:', error);
    // Don't throw error here as the main functionality should still work
  }
}

// Test function to verify the script works
function testScript() {
  const testData = {
    timestamp: new Date().toISOString(),
    name: 'Test User',
    email: 'test@example.com',
    phone: '+91-9876543210',
    course: 'Master in AI',
    timeSlot: '10:00 AM - 11:00 AM',
    message: 'This is a test submission',
    source: 'Test'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
}