const csv = require('csv-parser');
const XLSX = require('xlsx');




function findAllCommonCaller(records) {
  const callerCounts = {};

  records.forEach((record) => {
    const callingNo = (record['B PARTY NUMBER'] || record['B Party No']);
    const callType = record['CALL_TYPE'] || record['Call Type'];
    const displayNumber = record['Target No'] || record['Target /A PARTY NUMBER'];

    if (callingNo && callingNo.trim() !== '' && !isNaN(callingNo)) {
      const normalizedNumber = callingNo.replace(/^91|^\+91/, '') || displayNumber;
      const countKey = normalizedNumber.startsWith('91') ? normalizedNumber.substr(2) : normalizedNumber;
      const caller = callerCounts[countKey] || {
        displayNumber,
        number: normalizedNumber.length === 8 ? '91' + normalizedNumber : normalizedNumber,
        count: 0,
        incoming: 0,
        outgoing: 0,
      };

      caller.count++;
      if (callType === 'Incoming' || callType === 'IN' ) {
        caller.incoming++;
      } else if (callType === 'Outgoing' || callType === 'OUT') {
        caller.outgoing++;
      }

      callerCounts[countKey] = caller;
    }
  });
  

  const sortedCallers = Object.values(callerCounts).sort((a, b) => b.count - a.count);

  return sortedCallers.map(({ number, count, incoming, outgoing, displayNumber }) => ({
    number,
    count,
    incoming,
    outgoing,
    displayNumber
  }));
}

function findCommonCaller(records) {
  const callerCounts = {};

  records.forEach((record) => {
    const callingNo = (record['B PARTY NUMBER'] || record['B Party No']);
    const callType = record['CALL_TYPE'] || record['Call Type'];
    const displayNumber = record['Target No'] || record['Target /A PARTY NUMBER'];

    if (callingNo && callingNo.trim() !== '' && !isNaN(callingNo)) {
      const normalizedNumber = callingNo.replace(/^91|^\+91/, '') || displayNumber;
      const countKey = normalizedNumber.startsWith('91') ? normalizedNumber.substr(2) : normalizedNumber;
      const caller = callerCounts[countKey] || {
        displayNumber,
        number: normalizedNumber.length === 8 ? '91' + normalizedNumber : normalizedNumber,
        count: 0,
        incoming: 0,
        outgoing: 0,
      };

      caller.count++;
      if (callType === 'Incoming' || callType === 'IN' ) {
        caller.incoming++;
      } else if (callType === 'Outgoing' || callType === 'OUT') {
        caller.outgoing++;
      }

      callerCounts[countKey] = caller;
    }
  });
  

  const sortedCallers = Object.values(callerCounts).sort((a, b) => b.count - a.count).slice(0, 10);

  return sortedCallers.map(({ number, count, incoming, outgoing, displayNumber }) => ({
    number,
    count,
    incoming,
    outgoing,
    displayNumber
  }));
}


function findMaxDurationCallers(records) {
  const callers = [];

  records.forEach((record) => {
    const callingNo = (record['B PARTY NUMBER'] || record['B Party No']);
    const duration = parseInt(record['Dur(s)'], 10) || parseInt(record['Call Duration'], 10);
    const displayNumber = record['Target No'] || record['Target /A PARTY NUMBER'];

    if (callingNo && callingNo.trim() !== '' && !isNaN(callingNo) && !isNaN(duration)) {
      const normalizedNumber = callingNo.replace(/^91|^\+91/, '');
      const countKey = normalizedNumber.startsWith('91') ? normalizedNumber.substr(2) : normalizedNumber;

      callers.push({
        number: normalizedNumber.length === 8 ? '91' + normalizedNumber : normalizedNumber,
        displayNumber,
        duration,
      });
    }
  });

  const sortedCallers = callers.sort((a, b) => b.duration - a.duration).slice(0, 10);

  return sortedCallers;
}

function findAllMaxDurationCallers(records) {
  const callers = [];

  records.forEach((record) => {
    const callingNo = (record['B PARTY NUMBER'] || record['B Party No']);
    const duration = parseInt(record['Dur(s)'], 10) || parseInt(record['Call Duration'], 10);
    const displayNumber = record['Target No'] || record['Target /A PARTY NUMBER'];

    if (callingNo && callingNo.trim() !== '' && !isNaN(callingNo) && !isNaN(duration)) {
      const normalizedNumber = callingNo.replace(/^91|^\+91/, '');
      const countKey = normalizedNumber.startsWith('91') ? normalizedNumber.substr(2) : normalizedNumber;

      callers.push({
        number: normalizedNumber.length === 8 ? '91' + normalizedNumber : normalizedNumber,
        displayNumber,
        duration,
      });
    }
  });

  const sortedCallers = callers.sort((a, b) => b.duration - a.duration);

  return sortedCallers;
}


function findCommonIMEI(records) {
  const imeiCounts = {};

  records.forEach((record) => {
    const imei = record['IMEI'];

    if (imei && imei.trim() !== '') {
      imeiCounts[imei] = (imeiCounts[imei] || 0) + 1;
    }
  });

  const sortedIMEIOccurrences = Object.entries(imeiCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([imei, count]) => ({
      imei,
      count,
    }));

  return sortedIMEIOccurrences;
}


function findMaxSMS(records) {
  const smsCounts = {};

  records.forEach((record) => {
    const callingNo = record['B PARTY NUMBER'] || record['B Party No'];
    const serviceType = record['Service Type'] || record['Call Type'];

    if (callingNo && callingNo.trim() !== '' && serviceType && serviceType.trim() === 'SMS') {
      const normalizedNumber = callingNo.replace(/^91|^\+91/, '');
      const countKey = normalizedNumber.startsWith('91') ? normalizedNumber.substr(2) : normalizedNumber;
      const caller = smsCounts[countKey] || {
        number: normalizedNumber.length === 8 ? '91' + normalizedNumber : normalizedNumber,
        count: 0,
      };

      caller.count++;
      smsCounts[countKey] = caller;
    }
  });

  const sortedSMSCounts = Object.values(smsCounts).sort((a, b) => b.count - a.count).slice(0, 20);

  return sortedSMSCounts.map(({ number, count }) => ({
    number,
    count,
  }));
}

function findAllMaxSMS(records) {
  const smsCounts = {};

  records.forEach((record) => {
    const callingNo = record['B PARTY NUMBER'] || record['B Party No'];
    const serviceType = record['Service Type'] || record['Call Type'];

    if (callingNo && callingNo.trim() !== '' && serviceType && serviceType.trim() === 'SMS') {
      const normalizedNumber = callingNo.replace(/^91|^\+91/, '');
      const countKey = normalizedNumber.startsWith('91') ? normalizedNumber.substr(2) : normalizedNumber;
      const caller = smsCounts[countKey] || {
        number: normalizedNumber.length === 8 ? '91' + normalizedNumber : normalizedNumber,
        count: 0,
      };

      caller.count++;
      smsCounts[countKey] = caller;
    }
  });

  const sortedSMSCounts = Object.values(smsCounts).sort((a, b) => b.count - a.count);

  return sortedSMSCounts.map(({ number, count }) => ({
    number,
    count,
  }));
}





function parseCSV(csvData) {
  const rows = csvData.split('\n');

  // Find the line containing the headers
  let headersIndex = -1;
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].includes('Target /A PARTY NUMBER') || rows[i].includes('Target No') && rows[i].includes('Call Type') || rows[i].includes('Calling Party Telephone Number') ) {
      headersIndex = i;
      break;
    }
  }

  if (headersIndex === -1) {
    throw new Error('Headers not found in CSV data');
  }

  // Extract the headers by splitting with commas and removing leading/trailing spaces and quotes
  const headers = rows[headersIndex]
    .replace(/"/g, '')
    .split(',')
    .map((header) => header.trim());

  // Extract the data rows
  const dataRows = rows.slice(headersIndex + 1);

  // Parse the data rows
  const parsedData = dataRows.map((row) => {
    const values = row.split(',');
    const rowData = {};
    for (let i = 0; i < headers.length; i++) {
      if (i < values.length) {
        rowData[headers[i]] = values[i].replace(/'/g, '').trim();
      } else {
        rowData[headers[i]] = ''; // Set empty value if not enough values in the row
      }
    }
    return rowData;
  });

  return parsedData;
}

// Add a new function to save data to Excel with multiple sheets
function smartSaveToExcel(csvData, sheetNames, fileName) {
  // Parse the CSV data to get headers and rows
  const parsedData = parseCSV(csvData);

  const wb = XLSX.utils.book_new();

  for (let i = 0; i < sheetNames.length; i++) {
    const sheetName = sheetNames[i];
    const { headers, data } = getSectionData(sheetName, parsedData);

    if (data.length > 0) {
      const wsData = [headers, ...data.map(item => Object.values(item))];
      const ws = XLSX.utils.aoa_to_sheet(wsData);
      XLSX.utils.book_append_sheet(wb, ws, sheetName);
    }
  }

  XLSX.writeFile(wb, fileName);
}

// Helper function to get the data and headers for a specific section
function getSectionData(sectionName, parsedData, customHeaders = []) {
  switch (sectionName) {
    case 'Common Callers':
      const commonCallerData = findCommonCaller(parsedData);
      const commonCallerHeaders = customHeaders.length > 0 ? customHeaders : ['Number', 'Count', 'Incoming', 'Outgoing', 'Display Number'];
      return { headers: commonCallerHeaders, data: commonCallerData };
    case 'Max Duration Callers':
      const maxDurationData = findMaxDurationCallers(parsedData);
      const maxDurationHeaders = customHeaders.length > 0 ? customHeaders : ['Number', 'Display Number', 'Duration'];
      return { headers: maxDurationHeaders, data: maxDurationData };
    case 'Common IMEI':
      const commonIMEIData = findCommonIMEI(parsedData);
      const commonIMEIHeaders = customHeaders.length > 0 ? customHeaders : ['IMEI', 'Count'];
      return { headers: commonIMEIHeaders, data: commonIMEIData };
    case 'Max SMS':
      const maxSMSData = findMaxSMS(parsedData);
      const maxSMSHeaders = customHeaders.length > 0 ? customHeaders : ['Number', 'Count'];
      return { headers: maxSMSHeaders, data: maxSMSData };
    default:
      return { headers: [], data: [] };
  }
}

// Add a new function to save data to Excel with multiple sheets
function fullSaveToExcel(csvData, sheetNames, fileName) {
  // Parse the CSV data to get headers and rows
  const parsedData = parseCSV(csvData);

  const wb = XLSX.utils.book_new();

  for (let i = 0; i < sheetNames.length; i++) {
    const sheetName = sheetNames[i];
    const { headers, data } = getFullSectionData(sheetName, parsedData);

    if (data.length > 0) {
      const wsData = [headers, ...data.map(item => Object.values(item))];
      const ws = XLSX.utils.aoa_to_sheet(wsData);
      XLSX.utils.book_append_sheet(wb, ws, sheetName);
    }
  }

  XLSX.writeFile(wb, fileName);
}

// Helper function to get the data and headers for a specific section
function getFullSectionData(sectionName, parsedData, customHeaders = []) {
  switch (sectionName) {
    case 'Common Callers':
      const commonCallerData = findAllCommonCaller(parsedData);
      const commonCallerHeaders = customHeaders.length > 0 ? customHeaders : ['Number', 'Count', 'Incoming', 'Outgoing', 'Display Number'];
      return { headers: commonCallerHeaders, data: commonCallerData };
    case 'Max Duration Callers':
      const maxDurationData = findAllMaxDurationCallers(parsedData);
      const maxDurationHeaders = customHeaders.length > 0 ? customHeaders : ['Number', 'Display Number', 'Duration'];
      return { headers: maxDurationHeaders, data: maxDurationData };
    case 'Common IMEI':
      const commonIMEIData = findCommonIMEI(parsedData);
      const commonIMEIHeaders = customHeaders.length > 0 ? customHeaders : ['IMEI', 'Count'];
      return { headers: commonIMEIHeaders, data: commonIMEIData };
    case 'Max SMS':
      const maxSMSData = findAllMaxSMS(parsedData);
      const maxSMSHeaders = customHeaders.length > 0 ? customHeaders : ['Number', 'Count'];
      return { headers: maxSMSHeaders, data: maxSMSData };
    default:
      return { headers: [], data: [] };
  }
}



module.exports = {
  findCommonCaller,
  findAllCommonCaller,
  findMaxDurationCallers,
  findAllMaxDurationCallers,
  findCommonIMEI,
  findMaxSMS,
  findAllMaxSMS,
  parseCSV,
  smartSaveToExcel, // Export the new function
  fullSaveToExcel,
};
