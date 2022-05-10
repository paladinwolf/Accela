function getASIVal(subGroup, fieldName, useCap) {
	// Useful for dropdown values where AInfo is NULL
	var thisVal = "";
	if (useCap) {
		holdId = capId;
		capId = useCap;
	}

	thisVal = aa.appSpecificInfo.getAppSpecificInfos(capId, subGroup, fieldName).getOutput();
	capId = holdId;

	if (thisVal[0]) {
		return thisVal[0].getChecklistComment();
	} else {
		return null;
	}
}
function checkWFHistory(taskArr, statusArr, useCap) {
	// Checks Workflow history for Task and Status
	var statusExists = "";
	if (useCap) {
		holdId = capId;
		capId = useCap;
	}

	for (var t in taskArr) {
		// Get Workflow History
		var wfResult = aa.workflow.getWorkflowHistory(capId, taskArr[t], null);
		if (wfResult.getSuccess()) {
			var wfObj = wfResult.getOutput();
			for (var o in wfObj) {
				// For each Status to compare
				for (var s in statusArr) {
					if (matches(wfObj[o].getDisposition(), wfStatusArr[s])) {
						statusExists = taskArr[t] + ": " + wfStatusArr[s];
						break;
					}
				}
			}
		} else {
			logDebug("CheckWFHistory: Failed to get Workflow: " + wfResult.getErrorMessage());
		}
	}
	return statusExists;
}
