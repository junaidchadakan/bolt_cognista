# Google Sheets Integration Setup Guide

## Step 1: Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Replace the default code with the content from `google-apps-script.js`
4. Save the project with a name like "TechAcademy Form Handler"

## Step 2: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Name it "TechAcademy Call Bookings"
4. Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)
   - Example: `https://docs.google.com/spreadsheets/d/1ABC123DEF456GHI789JKL/edit`
   - Sheet ID: `1ABC123DEF456GHI789JKL`

## Step 3: Configure the Script

1. In your Google Apps Script project, replace `YOUR_SHEET_ID` with your actual Sheet ID
2. Test the script by running the `testScript()` function
3. Grant necessary permissions when prompted

## Step 4: Deploy as Web App

1. In Google Apps Script, click "Deploy" → "New deployment"
2. Choose type: "Web app"
3. Set execute as: "Me"
4. Set access: "Anyone"
5. Click "Deploy"
6. Copy the Web App URL

## Step 5: Update React Component

1. In `src/components/BookCallPopup.tsx`, replace `YOUR_SCRIPT_ID` in the `GOOGLE_SCRIPT_URL` with your actual web app URL
2. The URL should look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`

## Step 6: Test the Integration

1. Submit a test form through your website
2. Check your Google Sheet to see if the data appears
3. Verify that confirmation emails are being sent

## Features Included

✅ **Automatic Sheet Creation**: Creates headers and formatting automatically
✅ **Data Validation**: Handles errors gracefully
✅ **Email Confirmation**: Sends automatic confirmation emails to users
✅ **Timestamp Tracking**: Records when each submission was made
✅ **Status Tracking**: Includes a status column for follow-up management
✅ **Source Tracking**: Identifies which form the submission came from

## Sheet Columns

The Google Sheet will have these columns:
- Timestamp
- Name
- Email
- Phone
- Course Interest
- Preferred Time Slot
- Message
- Source
- Status

## Security Notes

- The web app is deployed with "Anyone" access but only accepts POST requests
- No sensitive data is exposed in the client-side code
- All form data is validated before saving to the sheet

## Troubleshooting

**Common Issues:**
1. **Permission Denied**: Make sure you've granted all necessary permissions
2. **Sheet Not Found**: Verify the Sheet ID is correct
3. **CORS Errors**: These are normal when using `no-cors` mode with Google Apps Script
4. **Email Not Sending**: Check if Gmail API is enabled and you have email permissions

**Testing:**
- Use the `testScript()` function in Google Apps Script to verify everything works
- Check the execution log in Google Apps Script for any errors
- Test with a real form submission to ensure end-to-end functionality